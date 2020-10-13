module.exports = function(fileName){
    var fs = require('fs');
    fs.readFile(fileName, 'utf8', function(err, data) {
        if (err) throw err;
        console.log(data);
    });
};