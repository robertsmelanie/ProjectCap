
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import '../styles/Components.css';
import Calc from '../components/Calc';
import FooterButtons from '../components/Footerbutton';

function Catcalc() {
    return (
        <>
            <Navbar />
            <main>
                <Calc />
            </main>
            <FooterButtons />
            <Footer />
        </>

         

   
    // <div className="footer-custom text-center py-4">Copyright 2025</div>
    )
}

export default Catcalc;