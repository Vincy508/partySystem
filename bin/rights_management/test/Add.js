//test environment init
var expect = require('chai').expect;
var directory = '../../';

var config = {
    modules: []
};

//module load area
config.modules['rights_management'] = (require(directory + './rights_management'))(config);
config.modules['saferman'] = (require(directory + './saferman'))(config);

describe('Add',function(){

    before(function(done){
        var deleteRightsTable = new Promise(function(resolve,reject){
            config.modules['saferman'].sql('DELETE FROM RightsTable',function(){
                resolve();
            });
        });

        var insertRightsTable1 = new Promise(function(resolve,reject){
            config.modules['saferman'].sql('INSERT INTO RightsTable (ID,Rights) VALUE (1,"|publish|view")',function(){
                resolve();
            });
        });

        var insertRightsTable2 = new Promise(function(resolve,reject){
            config.modules['saferman'].sql('INSERT INTO RightsTable (ID,Rights) VALUE (2,"|publish|view")',function(){
                resolve();
            });
        });

        Promise.all([
            deleteRightsTable,
            insertRightsTable1,
            insertRightsTable2]).then(function(){
                done();
            });
    });

    it('add right answer to user1',function(done){
        config.modules['rights_management'].Add(1,'answer',function(){
            var sql_string = 'SELECT Rights FROM RightsTable WHERE ID=1';

            config.modules['saferman'].sql(sql_string,function(results){
                var match = new RegExp('answer');
                var value = (match.exec(results[0].Rights)!=null);

                expect(value).to.be.a('boolean');
                expect(value).to.be.equal(true);

                done();
            });
        });

    });

    it('add illegal right to user1',function(done){
        config.modules['rights_management'].Add(1,'ppt',function(){
            var sql_string = 'SELECT Rights FROM RightsTable WHERE ID=1';

            config.modules['saferman'].sql(sql_string,function(results){
                var match = new RegExp('ppt');
                var value = (match.exec(results[0].Rights)==null);

                expect(value).to.be.a('boolean');
                expect(value).to.be.equal(true);

                done();
            });
        });

    });

    it('add right answer to user2',function(done){
        config.modules['rights_management'].Add(2,'answer',function(){
            var sql_string = 'SELECT Rights FROM RightsTable WHERE ID=2';

            config.modules['saferman'].sql(sql_string,function(results){
                var match = new RegExp('answer');
                var value = (match.exec(results[0].Rights)!=null);

                expect(value).to.be.a('boolean');
                expect(value).to.be.equal(true);

                done();
            });
        });

    });

})
