const express = require('express');
const bodyParser= require('body-parser')
const MongoClient = require('mongodb').MongoClient
const app = express()
const port =process.env.PORT || 5000;
const url = 'mongodb+srv://bilkees:bilkees@cluster0.urlh5.mongodb.net/Librarydb?retryWrites=true&w=majority';
// MongoClient.connect(url,(err,client)=>{
//   if (err) return console.error(err)
//   console.log('Connected to Database')
// });

MongoClient.connect(url, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
    const db = client.db('Librarydb')
    const bookCollection = db.collection('books')

    app.use(bodyParser.urlencoded({ extended: true }))
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
  })

  app.post('/books', (req, res) => {
    bookCollection.insertOne(req,body)
    .then(result=> {
      console.log(result)
    })
    // console.log(req.body)
    .catch(error=>console.error(error))
  })
  

app.listen(port,()=> {
    console.log('listening on 5000')
  })
  })

  .catch(console.error)

