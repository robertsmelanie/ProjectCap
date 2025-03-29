import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


function Supplies() {
    return (
        <>
            <Navbar />
            <main className="main">
                <section className="hero">
                    <h2>Welcome to Our Pet Store!</h2>
                    <p>Your one-stop shop for all things pet-related.</p>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default Supplies;