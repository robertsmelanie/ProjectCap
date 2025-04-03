import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Components.css';
import BarnCatsImage from '../components/BarnCatsImage';


function Home() {
  return (
    <>

      <main className="main">
        <section className="hero">
          <h2>Welcome to Our Pet Store!</h2>
          <p>Your one-stop shop for all things pet-related.</p>
          {/* <div className="title">
            
          </div> */}
          <br />

         
            
            <div className="container-fluid container1 d-flex justify-content-center align-items-center py-5">
              <div className="container">
                
                <div className="containertext p-4 mx-auto">
                  <div className="row align-items-center">
                    
                    <div className="col-md-6">
                      <div className="p-3 text-light">
                        <h2>Welcome to The Mighty Mouser</h2>
                        <p>Are you looking for an effective, eco-friendly way to keep rodents under control?</p>
                        <p>At The Mighty Mouser, we specialize in helping you care for these hardworking
                          felines by offering essential supplies, expert guidance, and a passion for sustainable
                          farming solutions.</p>

                        <section className="offer-section">
                          <h3><em>What We Offer</em></h3>
                          <div className="offer-item">
                            <strong>🐾 Supplies for Barn Cats:</strong>
                            <p>Find shelters, feeding stations, and all the essentials your barn cats need.</p>
                            <ul className="styled-list">
                              <li>Outdoor Shelters</li>
                              <li>Feeding Stations</li>
                              <li>Health Products</li>
                            </ul>
                            <p><a href="./supplies.html" class="btn btn-light">Shop Now »</a></p>
                          </div>
                        </section>

                        <ul>
                          <li><strong>🚜 Looking for Rodent Control?</strong><br />
                            If you’re considering adding barn cats to your property, we can help you get started with
                            tips on placement, feeding, and care.
                          </li>
                        </ul>

                        📩 Have Questions?
                        Reach out to us anytime—we’d love to help you create a rodent-free, cat-friendly farm!
                        <a href="./contact.html">[Contact Us »]</a>
                      </div>
                    </div>

                    
                  <div className="col-md-6 text-center">
                    <BarnCatsImage />
                   

                        <div className="mt-3 p-3 border bg-light">
                          <div className="offer-item">
                            <strong>Barn Cat Health Care:</strong>
                            <p>Learn how to keep your cats:</p>
                            <ul className="styled-list">
                              <li>Working</li>
                              <li>Happy</li>
                              <li>Healthy</li>
                            </ul>
                          </div>

                          <div className="offer-item">
                            <strong>📜 The History of Barn Cats:</strong>
                            <p>Discover the role cats have played in agriculture for centuries.</p>
                            <ul className="styled-list">
                              <li>Ancient Roles</li>
                              <li>Modern Roles</li>
                              <li>Cultural Significance</li>
                            </ul>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>


            </div>


        </section>


          <div className="testlist">

          </div>
      </main>

        <br />



          </>
          );
}

          export default Home;