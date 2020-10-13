module.exports = function (filename) {

    var path = require('path');
    var ext = path.extname(filename);
    console.log(ext);
    
}