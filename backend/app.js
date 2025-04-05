const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const router = express.Router();
const Product = require('../models/product'); //Adjust the path as necessary


const app = express();

app.use(express.static('public'));

// app.set('view engine', 'ejs');  I don't think I need this one

//database connection
const dbURI = 'mongodb.srv://more'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then((result) => app.listen(3001))
  .catch((err) => console.log(err));

  //routes
app.get('/', (req, res) => res.render('home'));
app.get('/items', (req, res) => res.render('items'));

app.use(productRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});