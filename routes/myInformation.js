module.exports = init;

const personalinformation_module = require('../bin/personalinformation_module');

function init(app,directory){
    app.get('/myInformation',function(req,res){
        res.sendFile(directory + '/views/myInformation.html');
    });

    app.get('/myInformation/getMyInformation', function(req, res){
        let ID = getUserID();
        let dataToSended = {};

        personalinformation_module.getUsernameByID(ID,function(result){
            dataToSended.username = result.Name;
            dataToSended.qq = result.QQ;
            res.send(JSON.stringify(dataToSended));
        });

        function getUserID(){
            return req.session.ID;
        }
    });

    app.post('/myInformation/postMyInformation', function(req, res){
        var userID = getUserID();
        var realName = req.body.username;
        var qq = req.body.qq;
        console.log(req.body);
        console.log(userID);
        console.log(realName);
        console.log(qq);

        personalinformation_module.updateInformation(userID,realName,qq,function (){
            res.redirect('/signInSuccess');
        });

        function getUserID(){
            return req.session.ID;
        }
    });
}
