import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Components.css';


function Home() {
  return (
    <>
    
      <main className="main">
        <section className="hero">
          <h2>Welcome to Our Pet Store!</h2>
          <p>Your one-stop shop for all things pet-related.</p>
        </section>
      </main>
     
    </>
  );
}

export default Home;