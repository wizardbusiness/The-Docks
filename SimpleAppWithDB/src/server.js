const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.use(express.static('../public'));

app.listen(PORT, () => {
  console.log(`Cat napping on port ${PORT}`)
})

