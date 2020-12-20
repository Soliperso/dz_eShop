// Requiring modules 
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express()

// Connect mongoose to DB 
mongoose.connect('mongodb://localhost:27017/dz_eShop', {
  useNewUrlParser: true, 
  useUnifiedTopology: true, 
  useCreateIndex: true
})

// Make sure mongoose successfully connected to DB 
const db = mongoose.connection 
db.on('error', console.error.bind(console, 'Connection error!'))
db.once('open', () => console.log('Successfully connected to DB'))

// Serving static files 
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Root route 
app.get('/', (req, res) => {
  res.send('Welcome to DZ eShop');
});

// INDEX - get all products
app.get('/products', (req, res) => {
  res.render('products/index')
});

// Listening to the server on port 3000 
app.listen(3000, () => {
  console.log('App listening on port 3000!');
});