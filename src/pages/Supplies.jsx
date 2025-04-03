import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Components.css';
import FooterButtons from '../components/Footerbutton';
import BarnCatsImage from '../components/BarnCatsImage';


function Supplies() {
    return (
        <>

            <main>
                <section>
                    <h2>Welcome to Our Pet Store!</h2>
                    <p>Your one-stop shop for all things pet-related.</p>
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
                                    <barncatsimage>
                                        <br />
                                        <div id="market" style={{ textAlign: 'center' }}>
                                        </div>
                                    </barncatsimage></div>
                                <br />
                                <div id="market" />
                            </div>
                        </div>
                    </div>
                </section>
            </main>


        </>
    );
};


export default Supplies;