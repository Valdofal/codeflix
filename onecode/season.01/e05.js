module.exports = function(fileName, fileContent){
    var fs = require('fs')
    fs.appendFile(fileName, fileContent, function(err){
        if (err) throw err
        console.log("File "+fileName+" successfully created!")
    })
    
};