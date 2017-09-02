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

    app.get('/myTeam/getQuestionDetail', function(req, res){
        let dataToSended = {};

        let teamID;
        let userID = getUserID();

        if(!questionID){
            res.redirect('/personalHomePage');
            return;
        }

        view_module.getQuestionDetail(questionID,function(result){
            dataToSended.title = result.title;
            dataToSended.description = result.description;
            dataToSended.total_score = result.total_score;

            authorID = result.authorID;

            dataToSended.author_name = result;

                dataToSended.score = result.score;
                dataToSended.answer = result.answer;

                if(userID==authorID){
                    dataToSended.isAuthor = true;
                }else{
                    dataToSended.isAuthor = false;
                }

                res.send(JSON.stringify(dataToSended));
        });


        function getUserID(){
            return req.session.ID;
        }

        function getQuestionID(){
            return req.session.questionID;
        }
    });

}

