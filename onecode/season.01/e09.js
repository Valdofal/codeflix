module.exports = function (fileName, permissionCode) {
    console.log(permissionCode)
    const fs = require ('fs')
    fs.chmod('test1.txt', permissionCode, (err) => {
        if (err) throw err;
        console.log('The permissions for file "my_file.txt" have been changed!');
      })
}