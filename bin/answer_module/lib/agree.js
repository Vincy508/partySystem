module.exports = agree;

const saferman = require('saferman');

function agree(userID,teamID,callback){

    var sql = saferman.format('UPDATE PersonalInformation SET teamID=? WHERE ID=?',
        [teamID,userID]);

    saferman.sql(sql,function(){
        executeCallback();
    })


    function executeCallback(argumentOfCallback){
        if(callback!=undefined)
            callback(argumentOfCallback);
    }
}
