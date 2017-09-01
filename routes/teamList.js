module.exports = init;

const view_module = require('../bin/view_module');

function init(app,directory){
    app.get('/teamList',function(req,res){
        res.sendFile(directory + '/views/teamList.html');
    });

    app.get('/teamList/getTeamList', function(req, res){
        view_module.getTeamList(function(results){
            res.send(JSON.stringify(results));
        })
    });

}

