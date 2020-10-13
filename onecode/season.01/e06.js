module.exports = function(fileName){
    const fs = require('fs')
    fs.unlink(fileName, function (err){
        if (err) throw err
        console.log("File onecode.txt successfully removed!")
    })

    
};