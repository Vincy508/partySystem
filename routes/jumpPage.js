module.exports = init;

function init(app,directory){
    app.get('/pleaseSignInFirst',function(req,res){
        res.sendFile(directory + '/views/pleaseSignInFirst.html');
    });

    app.get('/signInSuccess',function(req,res){
        res.sendFile(directory + '/views/signInSuccess.html');
    });

    app.get('/signInFail',function(req,res){
        res.sendFile(directory + '/views/signInFail.html');
    });
}

