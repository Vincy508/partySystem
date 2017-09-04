module.exports = refuse;

const saferman = require('saferman');

function refuse(userID,teamID,callback){

    var sql = saferman.format('DELETE FROM ApplicationList WHERE userID=? AND teamID=?',
        [userID,teamID]);

    saferman.sql(sql,function(){
        executeCallback();
    })


    function executeCallback(argumentOfCallback){
        if(callback!=undefined)
            callback(argumentOfCallback);
    }
}
