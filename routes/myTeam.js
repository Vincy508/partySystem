module.exports = init;

const view_module = require('../bin/view_module');
const personalinformation_module = require('../bin/personalinformation_module');

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
}

