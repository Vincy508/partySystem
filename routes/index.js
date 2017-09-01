module.exports = initRoutes;

function initRoutes(app,directory){
    let fs = require('fs');

    app.use(function (req,res,next){
        if(req.path==='/myInformation'||
            req.path==='/')
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
        res.sendFile(directory + '/views/myInformation.html');
    });

    app.get('/css/:file',function(req,res){
        res.sendFile(directory + '/public/css/' + req.params['file']);
    });

    app.get('/bootstrap/css/:file',function(req,res){
        res.sendFile(directory + '/bootstrap/css/' + req.params['file']);
    });

    app.get('/javascripts/:file',function(req,res){
        res.sendFile(directory + '/public/javascripts/' + req.params['file']);
    });

    app.get('/picture/:file',function(req,res){
        res.sendFile(directory + '/public/picture/' + req.params['file']);
    });

    require('./signPage')(app,directory);
    require('./myInformation')(app,directory);
    require('./teamList')(app,directory);
    require('./publishTeam')(app,directory);
    require('./jumpPage')(app,directory);
}
