const express = require('express');
const path = require('path');
const MongoClient = require('mongodb').MongoClient;


const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.use(express.static('../public'));

app.get('/get-profile', (req, res) => {
  const response = res;

  MongoClient.connect('mongodb://admin:pass@localhost:27017', (err, client) => {
    if (err) throw err;
    const db = client.db('catbook-db');
    const query = {catid: 1};
    db.collection('cats').findOne(query, (err, result) => {
      if (err) throw err;
      client.close();
      response.send(result)
    });
  });
});

app.post('/update-profile', (req, res) => {
  const userObj = req.body;
  console.log('connecting to db...')
  MongoClient.connect('mongodb://admin:pass@localhost:27017', () => {
    if (err) throw err;
    let db = client.db('catbook-db')
    userObj['userid'] = 1;
    const query = {userId: 1};
    const newValues = { $set: userObj};
  
    db.collection("cats").updateOne(query, newValues, {upsert: true}, (err, res) => {
      if (err) throw err;
      client.close()
    });
  });
})

app.listen(PORT, () => {
  console.log(`Cat napping on port ${PORT}`)
})

