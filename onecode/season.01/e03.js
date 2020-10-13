module.exports = function(filename){
    var fs = require('fs');
    fs.readFile(filename, 'utf8', function(err, data) {
        if (err) throw err;
        console.log(data);
    });
};