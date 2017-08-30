module.exports = initRoutes;

function initRoutes(app,directory){
    let fs = require('fs');

    var match1 = new RegExp('css');
    var match2 = new RegExp('javascripts');
    var match3 = new RegExp('picture');

    app.use(function (req,res,next){
        if(0)
        {
            if(isSignIn(req)){
                next();
            }else{
                res.sendFile(directory + '/views/pleaseSignInFirst.html');
            }

        }else{
            next();
        }


        function isSignIn(req){
            if(req.session.ID != undefined){
                return true;
            }else{
                return false;
            }
        }
    });

    app.get('/',function(req,res){
        res.sendFile(directory + '/views/personalHomePage.html');
    });

    app.get('/css/:file',function(req,res){
        res.sendFile(directory + '/public/css/' + req.params['file']);
    });

    app.get('/javascripts/:file',function(req,res){
        res.sendFile(directory + '/public/javascripts/' + req.params['file']);
    });

    app.get('/picture/:file',function(req,res){
        res.sendFile(directory + '/public/picture/' + req.params['file']);
    });

    require('./signPage')(app,directory);
    require('./personalHomePage')(app,directory);
    require('./questionList')(app,directory);
    require('./questionDetail')(app,directory);
    require('./answerPage')(app,directory);
    require('./publishPage')(app,directory);
    require('./answerDetail')(app,directory);
    require('./answerList')(app,directory);
    require('./jumpPage')(app,directory);
}
