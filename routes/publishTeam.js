module.exports = init;

const publish_module = require('../bin/publish_module');

function init(app,directory){
    app.get('/publishTeam',function(req,res){
        res.sendFile(directory + '/views/publishTeam.html');
    });

    app.post('/publishTeam/publishTeamInformation',function(req,res){
        var leaderID = getLeaderID();
        var title = req.body.title;
        var description = req.body.description;

        publish_module.publishTeamInformation(title,description,leaderID,function (){
            res.redirect('/signInSuccess');
        });

        function getLeaderID(){
            return req.session.ID;
        }
    });

}
