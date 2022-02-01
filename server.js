const express = require('express');
const bodyParser= require('body-parser')
const MongoClient = require('mongodb').MongoClient
const app = express()
const port =process.env.PORT || 5000;
const url = 'mongodb+srv://bilkees:bilkees@cluster0.urlh5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
MongoClient.connect(url,(err,client)=>{
  if (err) return console.error(err)
  console.log('Connected to Database')
});
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