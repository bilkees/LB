const express = require('express');
const bodyParser= require('body-parser')
const MongoClient = require('mongodb').MongoClient
const app = express()
const port =process.env.PORT || 5000;


app.use(bodyParser.urlencoded({ extended: true }))
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
  })

  app.post('/books', (req, res) => {
    console.log(req.body)
  })
  

app.listen(port,()=> {
    console.log('listening on 5000')
  })