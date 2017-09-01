module.exports = updateInformation;

const saferman = require('saferman');

function updateInformation(ID,RealName,QQ,callback){

    var sql = saferman.format('UPDATE PersonalInformation SET RealName=?,QQ=? WHERE ID=?',
        [RealName,QQ,ID]);

    saferman.sql(sql,function(){
        executeCallback();
    });


    function executeCallback(argumentOfCallback){
        if(callback!=undefined)
            callback(argumentOfCallback);
    }
}
