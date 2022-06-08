const fs = require("fs");
var path = require('path')
const dir = fs;
dir.mkdir("./new_directory",  (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("New Directory successfully created");
  }

  const dirPath = path.join(__dirname, 'new_directory')

  //create a file inside directory

  fs.writeFileSync(dirPath + '/test.txt', 'This is a simple file')
  console.log('File created successfully')
});

console.log("Going to read directory /new_directory");
fs.readdir("./new_directory", function (err, files) {
  if (err) {
    return console.log(err);
  }
  files.forEach(function (file) {
    console.log(file.toString());
  });
  const dirPath = path.join(__dirname, 'new_directory')
  const filePath  = `${dirPath}/test.txt`
  fs.readFile(filePath, 'utf8', (err, item) => {
      console.log('content inside file: ', item)
  })
});

exports.dir;



