require('dotenv').config();
let express = require('express');
let bodyParser = require('body-parser');
let massive = require('massive');
let PORT = 4000;
let { CONNECTION_STRING } = process.env;

let app = express();
app.use(bodyParser.json());

massive(CONNECTION_STRING)
  .then(dbInstance => {
    app.set('db', dbInstance);
    app.listen(PORT, () => console.log(`server is running at port ${PORT}`));
    console.log('connected to the db!')
  });

