const express = require("express")
const app = express();

app.get('/', (req, res) => {
  res.send("This is a node app running in a docker container!");
});

app.listen(3000, () => {
  console.log("app listening on port 3000")
})
