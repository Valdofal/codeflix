module.exports = function (fileName) {
    const fs = require('fs')
    try {
        fs.accessSync(fileName, fs.constants.R_OK | fs.constants.W_OK);
        console.log(`I can read or write the file ${fileName}`);
      } catch (err) {
        console.error(`I don't have access to the file ${fileName}`);
      }
}