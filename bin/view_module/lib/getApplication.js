module.exports = getApplication;

const saferman = require('saferman');

function getApplication(teamID,callback){

    let sql = 'SELECT userID,Name,QQ FROM ApplicationList WHERE teamID=' + teamID;

    saferman.sql(sql,function(results){
        executeCallback(results);
    });



    function executeCallback(argumentOfCallback){
        if(callback!=undefined)
            callback(argumentOfCallback);
    }
}
