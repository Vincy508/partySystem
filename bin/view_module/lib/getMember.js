module.exports = getMember;

const saferman = require('saferman');

function getMember(teamID,callback){

    let sql = 'SELECT RealName FROM PersonalInformation WHERE teamID=' + teamID;

    saferman.sql(sql,function(results){
        executeCallback(results);
    });



    function executeCallback(argumentOfCallback){
        if(callback!=undefined)
            callback(argumentOfCallback);
    }
}
