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

import './App.css';
import "./styles/style.css";

// import "./styles/Components.css";


function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="background-img">
      <Router>
        <>
          <Navbar />
          <main>
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


          </main>
          <FooterButtons />
          <Footer />
        </>
      </Router>


    </div>
  );
}

export default App
