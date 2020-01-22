const express = require('express');
const parser = require('body-parser');
const app = express();

app.use(parser.json());

const cors = require('cors');
app.use(cors());

const MongoClient = require('mongodb').MongoClient;
const createRouter = require("./helpers/create_router.js");

MongoClient.connect('mongodb://localhost:27017')
.then((client) => {
  const db = client.db('hotel');
  const bookingsCollection = db.collection('bookings')
  const bookingsRouter = createRouter(bookingsCollection)
  app.use('/api/bookings', bookingsRouter)
})
.catch(console.err);

app.listen(3000, function () {
  console.log(`listening on port ${ this.address().port }`);
});
