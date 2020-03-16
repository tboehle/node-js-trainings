var fs = require('fs');

// Sync is blocking the code underneath
fs.readFile('readMe.txt', 'utf8', function(err, data) {
    // asynchronous function -> need for callback function to fire when the process is complete
    fs.writeFile('writeMe.txt', data, (err)=>{
        if (err) {
            throw err;
        }
        console.log('Successfully saved file');
    });
});