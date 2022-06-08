const dir = require('../create_directory')
const fs = require('fs')



module.exports.stream =  (req, res) => {
    const readStream = fs.createReadStream('./new_directory/test.txt');
    readStream.on('data', (chunkdata) => {
            res.write(chunkdata)
        })
        readStream.on('end', () => {
            res.end();
        })
        readStream.on('error', (err) => {
            console.log(err)
            res.end('file not found');
        }) 
}

module.exports.writestream =  (req, res) => {

            if (req.method === "POST" && req.url === "/write") {
              console.log("writing data to stream.");
              res.send({message:'writing data to stream'})
              const writeStream = fs.createWriteStream('./new_directory/test.txt');
              for (let i = 0; i <= 10; i++) {
                writeStream.write('Hello' + "\n");
              }
           
              writeStream.end();
             
    }

}

module.exports.fileBuffer = (req, res) => {

    
    const buffer = Buffer.from('Hello')

     console.log(buffer)
    
       
}

module.exports.logAndobject = (req, res) => {

    const obj = {
        name: 'joe',
        age: 35,
        person1: {
          name: 'Tony',
          age: 50,
          person2: {
            name: 'Albert',
            age: 21,
            person3: {
              name: 'Peter',
              age: 23,
            },
          },
        },
      };

      console.log(JSON.stringify(obj, null, 2))

      res.send({obj})
    
}
exports.readStream