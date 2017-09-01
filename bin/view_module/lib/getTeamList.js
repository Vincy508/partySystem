module.exports = getTeamList;

const saferman = require('saferman');

function getTeamList(callback){

    let sql = 'SELECT ID,title FROM TeamList';

    saferman.sql(sql,function(results){
        executeCallback(results);
    });



    function executeCallback(argumentOfCallback){
        if(callback!=undefined)
            callback(argumentOfCallback);
    }
}
