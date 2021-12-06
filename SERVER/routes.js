const express = require('express');
const app = express();
const port = 3000;
const morgan = require("morgan");
const path = require("path");
const methods = require('../DB/pool.js');
const db = methods.db;

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.json());


/************************************** GET /all  ************************************************/
app.get('/all', function (req, res) {
  db.getItems('1')
    .then((items) => {res.send(items.rows)})
    .catch((err) => {
      console.log('err', err)
      res.status(404).send(err)})
})


  app.listen(port, () => {
    console.log(`Listening to Port: ${port}`);
  });