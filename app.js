var fs = require('fs');

fs.mkdir('stuff', function(){
    fs.readFile('readMe.txt', 'utf8', function(err, data){
        if (err) {
            throw err;
        }
        fs.writeFile('./stuff/writeMe.txt', data, function(err){
            if (err) {
                throw err;
            }
        });
    });
});

// Can't activate function because of asynchronous creation of folder and file
/*
fs.unlink('./stuff/writeMe.txt', function(){
    fs.rmdir('stuff', function(err){
        if (err) {
            throw err;
        }
    });
});*/
