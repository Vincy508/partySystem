module.exports = refuse;

const saferman = require('saferman');
const personalinformation_module = require('../../personalinformation_module');

function refuse(userID,teamID,callback){

    var sql = saferman.format('SELECT ID FROM ApplicationList WHERE userID=? AND teamID=?',
        [userID,teamID]);

    saferman.sql(sql,function(results){
        if(results.length != 0){
            var ID = results[0].ID;
            haveApply();
        }else{
            haveNotApply();
        }

        function haveNotApply(){
            personalinformation_module.getInformation(userID,function(result){
                var username = result.RealName;
                var QQ = result.QQ;
                if(username){
                    var sqlString = saferman.format(
                        'INSERT INTO ApplicationList (ID,teamID,userID,Name,QQ) VALUE (null,?,?,?,?)',
                        [teamID,userID,username,QQ]);
                    saferman.sql(sqlString,executeCallback);
                }
            });
        }

        function haveApply(){
            var sqlString = saferman.format('UPDATE ApplicationList SET teamID=? WHERE ID=?',
                [teamID]);
            saferman.sql(sqlString,executeCallback);
        }
    })


    function executeCallback(argumentOfCallback){
        if(callback!=undefined)
            callback(argumentOfCallback);
    }
}
