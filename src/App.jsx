import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Router, Routes, Route } from "react-router-dom";
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
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import "./styles/style.css";
// import "./styles/Components.css";


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <main>
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/Health' element={<Health />} />
            <Route path="/Supplies" element={<Supplies />} />
            <Route path='/History' element={<History />} />
            <Route path='/About' element={<About />} />
            <Route path="/Shop" element={<Shop />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/Catcalc' element={<Catcalc />} />
          </Routes>
        


      </main>
      <Footer />
    </>
      
      
  );
}

export default App
