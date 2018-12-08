require('dotenv').config();
let express = require('express');
let bodyParser = require('body-parser');
let massive = require('massive');
let PORT = 4000;
let { CONNECTION_STRING } = process.env;

let app = express();
app.use(bodyParser.json());

app.use(express.static( __dirname + '/../build/static')); 

app.get('/api/houses', (req, res) => {
  const dbInstance = req.app.get('db');
  dbInstance.get_houses()
    .then(houses => {
      res.status(200).send(houses);
    }).catch(error => {
      console.log('error in get!', error);
      res.sendStatus(500);
    });
})

app.post('/api/house', (req, res) => {
  let { property_name, address, city, state, zipcode, image, monthly_mortgage, desired_rent } = req.body;
  const dbInstance = req.app.get('db');
  dbInstance.add_house(property_name, address, city, state, Number(zipcode), image, monthly_mortgage, desired_rent)
    .then(() => {
      res.status(200).send('House added!');
    }).catch(error => {
      console.log('error in post!', error);
      res.sendStatus(500);
    });
})

app.delete('/api/house/:id', (req, res) => {
  const dbInstance = req.app.get('db');
  let { id } = req.params;
  dbInstance.delete_house( id )
    .then( () => {
      res.status(200).send('House deleted!');
    }).catch(error => {
      console.log('error in delete!', error);
      res.sendStatus(500);
    });
})

massive(CONNECTION_STRING)
  .then(dbInstance => {
    app.set('db', dbInstance);
    app.listen(PORT, () => console.log(`server is running at port ${PORT}`));
    console.log('connected to the db!')
  });


// How I altered my table in SqlTabs:

// ALTER TABLE house
// ADD COLUMN image TEXT,
// ADD COLUMN monthly_mortgage FLOAT,
// ADD COLUMN desired_rent FLOAT;

// SELECT * FROM house;