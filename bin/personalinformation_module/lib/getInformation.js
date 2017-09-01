module.exports = getInformation;

const saferman = require('saferman');

function getInformation(ID,callback){

    let sql = 'SELECT RealName,QQ FROM PersonalInformation WHERE ID=' + ID;

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
