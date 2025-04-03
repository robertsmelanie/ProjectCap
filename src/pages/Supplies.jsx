import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Components.css';
import FooterButtons from '../components/Footerbutton';


function Supplies() {
    return (
        <>
            
            <main className="main">
                <section className="hero">
                    <h2>Welcome to Our Pet Store!</h2>
                    <p>Your one-stop shop for all things pet-related.</p>
                </section>
<div>
  <div className="title">
    <h1>
      Supplies
    </h1>
  </div>
  <div className="container">
    <div className="container1">
      <div className="containertext">
        <div className="supply-container">
          <h3><em>Our Supplies</em></h3>
          {/* <img src="illustration_for_barn_cats_9.png" alt="BarnCats" width="250px"> */}
          <br />
          <div id="market" style={{textAlign: 'center'}} />
        </div>
        <br />
        <div id="market" />
      </div>
    </div></div></div>

            </main>
            
            
        </>
    );
}

export default Supplies;