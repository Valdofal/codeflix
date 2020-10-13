module.exports = function (fileName) {
    const fs = require('fs')
try {
    fs.accessSync(fileName,fs.constants.F_OK | fs.constants.R_OK | fs.constants.W_OK) 
    console.log(`${fileName} exists and it is reable and writable`);
    } 
    catch (error) {
    console.error(error);
}
}