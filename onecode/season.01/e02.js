module.exports = function (fileName) {

    var path = require('path');
    var ext = path.extname(fileName);
    console.log(ext);
    
}