module.exports = function (fileName) {

    const fs = require("fs");
    fs.lstat(fileName, (err, stats) => {

        if(err) return console.log("The argument [ "+ fileName +" ] is another unix things"); //Handle error
        else if (stats.isFile(fileName)) console.log("The argument [ "+ fileName +" ] is a file")
        else if (stats.isDirectory(fileName)) console.log("The argument [ "+fileName+" ] is a directory")
    });
    
}
