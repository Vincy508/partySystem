module.exports = init;

const view_module = require('../bin/view_module');
const answer_module = require('../bin/answer_module');

function init(app,directory){
    app.get('/myTeam', function(req, res){
        let userID = getUserID();

        view_module.isLeader(userID,function(result){
            if(result){
                res.sendFile(directory + "/views/myTeamForLeader.html");
            }else{
                res.sendFile(directory + "/views/myTeamForMember.html");
            }
        });


        function getUserID(){
            return req.session.ID;
        }
    });

    app.get('/myTeam/getTeamInformation', function(req, res){
        let dataToSended = {};

        let teamID;
        let userID = getUserID();

        view_module.getTeamOfUser(userID,function(result){
            if(result){
                teamID = result;
                setTeamID();

                view_module.getTeamDetail(teamID,function(result){
                    dataToSended.title = result.title;
                    dataToSended.description = result.description;
                    dataToSended.leaderName = result.leaderName;
                    dataToSended.leaderQQ = result.leaderQQ;

                    view_module.getMember(teamID,function(result){
                        dataToSended.member = result;

                        res.send(JSON.stringify(dataToSended));
                    });
                });
            }else{
                dataToSended.noTeam = true;
                res.send(JSON.stringify(dataToSended));
            }
        });

        function setTeamID(){
            req.session.teamID = teamID;
        }

        function getUserID(){
            return req.session.ID;
        }
    });

    app.get('/myTeam/getApplication', function(req, res){
        let dataToSended = {};

        let teamID;
        let userID = getUserID();

        view_module.getTeamOfUser(userID,function(result){
            if(result){
                teamID = result;
                view_module.getApplication(teamID,function(result){
                    dataToSended.application = result;
                    res.send(JSON.stringify(dataToSended));
                });
            }
        });

        function getUserID(){
            return req.session.ID;
        }
    });

    app.get('/myTeam/refuse', function(req, res){
        let dataToSended = {};

        let teamID = getTeamID();
        let userID = getUserID();

        answer_module.refuse(userID,teamID,function(){
            res.redirect('/signInSuccess');
        });

        function getTeamID(){
            return req.session.teamID;
        }

        function getUserID(){
            return req.query.ID;
        }
    });

    app.get('/myTeam/agree', function(req, res){
        let dataToSended = {};

        let teamID = getTeamID();
        let userID = getUserID();

        answer_module.agree(userID,teamID,function(){
            res.redirect('/signInSuccess');
        });

        function getTeamID(){
            return req.session.teamID;
        }

        function getUserID(){
            return req.query.ID;
        }
    });
}

