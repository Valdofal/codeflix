module.exports = function (fileName) {

    const fs = require("fs");
    fs.lstat(fileName, (err, stats) => {

        if(err) return console.log("The argument [ /dev/null ] is another unix things"); //Handle error
        else if (stats.isFile(fileName)) console.log("The argument [ ch0pper.txt ] is a file")
        else if (stats.isDirectory(fileName)) console.log("The argument [ . ] is a directory")
    });
    
}
