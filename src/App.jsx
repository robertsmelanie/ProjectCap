import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Health from "./pages/Health";
import Supplies from "./pages/Supplies";
import History from "./pages/History";
import Contact from "./pages/Contact";
import About from "./pages/About";
// import Shop from "./pages/Shop";
// import Catcalc from "./pages/Catcalc";
import './App.css'
import "./styles/style.css"


function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/Health' element={<Health />} />
        <Route path="/Supplies" element={<Supplies />} />
        <Route path='/History' element={<History />} />
        <Route path='/About' element={<About />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path='/Contact' element={<Contact />} />
        {/* <Route path='/Catcalc' element={<CatCalc />} /> */}
      </Routes>
    </Router>
    
      
       
      
    
      
  );
}

export default App
