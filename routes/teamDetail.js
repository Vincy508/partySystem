module.exports = init;

const personalinformation_module = require('../bin/personalinformation_module');
const answer_module = require('../bin/answer_module');
const view_module = require('../bin/view_module');

function init(app,directory){
    app.get('/teamDetail', function(req, res){
        let teamID = getTeamID();

        if(!teamID){
            res.redirect('/myInformation');
        }else{
            req.session.teamID = teamID;
            res.sendFile(directory + '/views/teamDetail.html');
        }


        function getTeamID(){
            return req.query.ID;
        }
    });

    app.get('/teamDetail/getTeamDetail', function(req, res){
        let dataToSended = {};
        let teamID = getTeamID();

        if(!teamID){
            return;
        }

        let answerDetail = new Promise(function(resolve,reject){
            view_module.getTeamDetail(teamID,function(result){
                dataToSended.title = result.title;
                dataToSended.description = result.description;
                dataToSended.leaderName = result.leaderName;
                dataToSended.leaderQQ = result.leaderQQ;
                resolve();
            });
        }).then(function(){
            res.send(JSON.stringify(dataToSended));
        });


        function getTeamID(){
            return req.session.teamID;
        }
    });

    app.get('/teamDetail/joinTeam', function(req, res){
        let userID = getUserID();
        let teamID = getTeamID();

        if(userID && teamID){
            answer_module.joinTeam(userID,teamID,function(){
                res.redirect('/signInSuccess');
            });
        }else{
            res.redirect('/myInformation');
        }

        function getUserID(){
            return req.session.ID;
        }

        function getTeamID(){
            return req.session.teamID;
        }
    });

}

