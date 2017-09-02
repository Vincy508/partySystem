module.exports = getTeamDetail;

const saferman = require('saferman');

function getTeamDetail(ID,callback){

    let sql = 'SELECT title,description,leaderName,leaderQQ FROM TeamList WHERE ID=' + ID;

    saferman.sql(sql,function(results){
        executeCallback(results[0]);
    });


    function executeCallback(argumentOfCallback){
        if(callback!=undefined)
            callback(argumentOfCallback);
    }
}
