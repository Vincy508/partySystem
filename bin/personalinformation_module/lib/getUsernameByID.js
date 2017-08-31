module.exports = getUsernameByID;

const saferman = require('saferman');

function getUsernameByID(ID,callback){

    let sql = 'SELECT Name,QQ FROM PersonalInformation WHERE ID=' + ID;

    saferman.sql(sql,function(results){
        if(results.length){
            executeCallback(results[0]);
        }else{
            executeCallback(null);
        }
    });


    function executeCallback(argumentOfCallback){
        if(callback!=undefined)
            callback(argumentOfCallback);
    }
}
