module.exports = function(fileName){
    var fs = require('fs');
    let content;
try {
  content = fs.readFileSync(fileName, { encoding: 'utf8' });
} catch(err) {
  // An error occurred
  console.error(err);
}
    console.log(content)
};