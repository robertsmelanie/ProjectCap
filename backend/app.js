require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const router = express.Router();
const productRoutes = require('./routes/productRoutes');

const Product = require('./models/productModel'); 

const app = express();

app.use(express.static('public'));

// app.set('view engine', 'ejs');  I don't think I need this one


console.log('🔍 MONGO_URI =', JSON.stringify(process.env.MONGO_URI));
//database connection
const dbURI = process.env.MONGO_URI; 
console.log('RAW URI:', [...process.env.MONGO_URI]);
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3009))
  .catch((err) => console.log(err));



  //routes
app.get('/', (req, res) => res.render('home'));
app.get('/items', (req, res) => res.render('items'));

app.use(productRoutes);

const PORT = process.env.PORT || 3009;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
