module.exports = publishTeamInformation;

const saferman = require('saferman');
const personalinformation_module = require('../../personalinformation_module');

function publishTeamInformation(title,description,leaderID,callback){

    let isTitleDuplicate = new Promise((resolve,reject) => {
        let sql = saferman.format(
            'SELECT ID FROM TeamList WHERE title=?',
            [title]);

        saferman.sql(sql,function(results){
            //console.log('results is: '+results.length);
            if(results.length == 0){
                //console.log('not duplicate');
                resolve();
            }else{
                //console.log('duplicate');
                reject();
            }
        });
    });

    isTitleDuplicate.then(titleNotDuplicate,titleDuplicate);


    function titleNotDuplicate(){
        personalinformation_module.getInformation(leaderID,function(result){
            console.log(result)
            let sql = saferman.format(
                'INSERT INTO TeamList (ID,title,description,leaderName,leaderQQ,leaderID) VALUE (null,?,?,?,?,?)',
                [title,description,result.RealName,result.QQ,leaderID]);

            saferman.sql(sql,function(){
                let sql = saferman.format(
                    'SELECT ID FROM TeamList WHERE title=?',
                    [title]);

                saferman.sql(sql,function(result){
                    saferman.sql(sql,function(){
                        let sql = saferman.format(
                            'UPDATE PersonalInformation SET teamID=? WHERE ID=?',
                            [result[0].ID,leaderID]);

                        saferman.sql(sql,executeCallback);
                    });
                });
            });
        });
    };

    function titleDuplicate(){
        executeCallback()
    };


    function executeCallback(argumentOfCallback){
        if(callback!=undefined)
            callback(argumentOfCallback);
    }
}
