
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import '../styles/Components.css';
// import Footerbutton from '../components/Footerbutton';
import FooterButtons from '../components/Footerbutton';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';


function App() {
  return (
   <>
            <Navbar />
            <main>
                     <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
            </main>
            <FooterButtons />
            <Footer />
        </>


    


  );
}

export default App;

