const { constants } = require('buffer');

module.exports = function (fileName) {

    const path = require('path');
    var ext = path.extname(fileName);
    console.log(ext);
    
}