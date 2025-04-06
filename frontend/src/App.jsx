import { useState } from 'react'

import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Health from "./pages/Health";
import Supplies from "./pages/Supplies";
import History from "./pages/History";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Catcalc from "./pages/Catcalc";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FooterButtons from './components/Footerbutton';
import 'bootstrap/dist/css/bootstrap.min.css';
// not sure if the below should be here or app.js
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const router = express.Router();
//Adjust the path as necessary


const app = express();

app.use(express.static('public'));

// app.set('view engine', 'ejs');  I don't think I need this one

//database connection
const dbURI = 'mongodb.srv://more'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

  //routes moved to backend app.js
// app.get('/', (req, res) => res.render('home'));
// app.get('/items', (req, res) => res.render('items'));

// app.use(authRoutes);
axios.get('/products');
// End list




function App() {
  

  return (
    <div className="background-img" id='app'>
      <Router>
        <>
          <main>
          <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path='/health' element={<Health />} />
              <Route path="/supplies" element={<Supplies />} />
              <Route path='/history' element={<History />} />
              <Route path='/about' element={<About />} />
              <Route path="/shop" element={<Shop />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/calc' element={<Catcalc />} />
            </Routes>


          
            <FooterButtons />
            <br />
          <Footer />
          </main>
        </>
      </Router>


    </div>
  );
}

export default App
