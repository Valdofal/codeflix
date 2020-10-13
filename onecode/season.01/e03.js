module.exports = function(filename){
    var fs = require('fs');
    let content;
try {
  content = fs.readFileSync(filename, { encoding: 'utf8' });
} catch(err) {
  // An error occurred
  console.error(err);
}
    console.log(content)
};