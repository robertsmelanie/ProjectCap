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

const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(express.static('public'));

// app.set('view engine', 'ejs');  I don't think I need this one but not sure

//database connection
const dbURI = 'mongodb.srv://more'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then((result) => app.listen(3000))
  .catach((err) => console.log(err));

  //routes
app.get('/', (req, res) => res.render('home'));
app.get('/word', (req, res) => res.render('name'));

app.use(authRoutes);



})

// import "./styles/Components.css";


function App() {
  // const [count, setCount] = useState(0)

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
