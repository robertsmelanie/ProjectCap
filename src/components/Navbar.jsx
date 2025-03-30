
import React from 'react';
import { NavLink } from "react-router-dom";
// or Navbar.module.css if you go modular
import '../styles/Components.css';


function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">PetStore</div>
      <ul className="navbar__links">
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/History" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            History
          </NavLink>
        </li>
        <li>
          <NavLink to="/Health" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Health
          </NavLink>
        </li>
        <li>
          <NavLink to="/Shop" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink to="/About" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/Contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/Catcalc" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Cat Calculator
          </NavLink>
        </li>
        <li>
          <NavLink to="/Supplies" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Supplies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;



// function Navbar() {
//   return (
//     <nav className="navbar">
//       <div className="navbar__logo">PetStore</div>
//       <ul className="navbar__links">
//         <li><NavLink to="/" className="nav-link">Home</NavLink></li>
//         <li><NavLink to="/History" className="nav-link">History</NavLink></li>
//         <li><NavLink to="/Health" className="nav-link">Health</NavLink></li>
//         <li><NavLink to="/Shop" className="nav-link">Shop</NavLink></li>
//         <li><NavLink to="/About" className="nav-link">About</NavLink></li>
//         <li><NavLink to="/Contact" className="nav-link">Contact</NavLink></li>
//         <li><NavLink to="/Catcalc" className="nav-link">Cat Calculator</NavLink></li>
//         <li><NavLink to="/Supplies" className="nav-link">Supplies</NavLink></li>
//       </ul>
//     </nav>
//   );
// }
// export default Navbar;
// export default Navbar;
// function Navbar() {
//   return (
//     <nav>
//       <ul>
//         <li><Link to="/">Home</Link></li>

//         <li><Link to="/History">History</Link></li>
//         <li><Link to='/About'>About</Link></li>
//         <li><Link to='/Contact'>Contact</Link></li>
//         <li><Link to="/Health">Health</Link></li>
//         <li><Link to="/History">History</Link></li>
//         <li><Link to="/Catcalc">Cat Calculator</Link></li>
//         <li><Link to="/Shop">Shop</Link></li>
//         <li><Link to="/Supplies">Supplies</Link></li>
//       </ul>





//     </nav>

//   );
// }

// export default Navbar