const fs = require('fs');

const dir = require('./create_directory')

const express = require('express')
const app = express()

app.get('/', (req,res) => {
    res.send('Server Started')
})

const rout = require('./routes/routes')

app.use('/api', rout)
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log('Server listening on port: ', port);
})


