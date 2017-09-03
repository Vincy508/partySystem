module.exports = getTeamOfUser;

const saferman = require('saferman');

function getTeamOfUser(ID,callback){

    let sql = 'SELECT teamID FROM PersonalInformation WHERE ID=' + ID;

    saferman.sql(sql,function(results){
        if(results[0].teamID===null){
            executeCallback(false);
        }else{
            executeCallback(results[0].teamID);
        }
    });



    function executeCallback(argumentOfCallback){
        if(callback!=undefined)
            callback(argumentOfCallback);
    }
}
