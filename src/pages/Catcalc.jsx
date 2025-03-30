import '../styles/style.css';
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Components.css';
import Calc from '../components/Calc';

function Catcalc() {
    return (
        <>
            <Navbar />
            <main>
                <Calc />
            </main>
            <Footer />
        </>
    )
}

export default Catcalc;