// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// // import "./styles/style.css";
// import App from './App.jsx';
// import '../styles/Components.css';
// import { BrowserRouter } from 'react-router-dom';
// im

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <BrowserRouter>

//       <App />

//     </BrowserRouter>
    
//   </StrictMode>
// );
// File: /src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles/style.css'; // global styles

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App /> {/* Router goes HERE, not in App.jsx */}
    </BrowserRouter>
  </React.StrictMode>
);