module.exports = function(fileName){
  const fs = require('fs');
  let content;
try {
content = fs.readFileSync(fileName, { encoding: 'utf8' });
} catch(err) {
console.error(err);
}
  console.log(content)
};