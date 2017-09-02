module.exports = isLeader;

const saferman = require('saferman');

function isLeader(ID,callback){

    let sql = 'SELECT teamID FROM PersonalInformation WHERE ID=' + ID;

    saferman.sql(sql,function(results){
        if(results[0].teamID===null){
            executeCallback(false);
        }else{
            sql = 'SELECT leaderID FROM TeamList WHERE ID=' + results[0].teamID;

            saferman.sql(sql,function(results){
                if(results[0].leaderID === ID){
                    executeCallback(true);
                }else{
                    executeCallback(false);
                }
            });
        }
    });



    function executeCallback(argumentOfCallback){
        if(callback!=undefined)
            callback(argumentOfCallback);
    }
}
