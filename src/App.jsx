import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Health from "./pages/Health";
import './App.css'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={Home} />
        <Route path='/health' element={Health} />
        <Route path="supplies" element={Supplies} />
        <Route path='history' element={History} />
      </Routes>
    </Router>
    
      
       
      
    
      
     )
}

export default App
