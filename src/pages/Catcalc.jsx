
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import '../styles/Components.css';
import Calc from '../components/Calc';
import FooterButtons from '../components/Footerbutton';

function Catcalc() {
    return (
        <>

            <main>
                <div class="title">
                    <h1>
                        Barn Cat Calculator - The Mighty Mouser
                    </h1>
                </div>
                {/* <Calc /> */}

                
                <div class="container">
                    <div class="container1">
                        <br />
                            <div class="containertext">
                                <div class="containerleft">

                                    <br />

                                        <Calc />




                                        <img src="illustration_for_barn_cats_9.png" alt="BarnCats" width="250px" />








                                {/* </div> */}


                                <br />
                            </div>
                            <div class="cats9">

                            </div>
                    </div>
                    </div>
            </div>
            </main>


        </>




    // <div className="footer-custom text-center py-4">Copyright 2025</div>
                        )
}

                        export default Catcalc;