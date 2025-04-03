
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
               <div>
  <div className="title">
    <h1>
      Barn Cat Calculator - The Mighty Mouser
    </h1>
                    </div>
                    <Calc />
  
    <div className="container">
      <div className="container1">
        <br />
        <div className="containertext">
          <div className="containerleft">
            <br />
            <h1>Cat Age Calculator</h1>
            <span className="age">
              <label htmlFor="birthMonth">Birth Month:</label>
              <select id="birthMonth" />
              <label htmlFor="birthYear">Birth Year:</label>
              <select id="birthYear" />
              <br /><br />
              <button onclick="calculateCatAge()">Calculate Cat Age</button>
              <p id="result" />
              <img src="illustration_for_barn_cats_9.png" alt="BarnCats" width="250px" />
            </span></div>
          <br />
        </div>
        <div className="cats9">
        </div>
      </div>
    </div></div>

                {/* <div class="title">
                    <h1>
                        Barn Cat Calculator - The Mighty Mouser
                    </h1>
                </div> */}
                {/* <Calc /> */}

                
                {/* <div class="container">
                    <div class="container1">
                        <br />
                            <div class="containertext">
                                <div class="containerleft">

                                    <br />

                                        <Calc />




                                        <img src="illustration_for_barn_cats_9.png" alt="BarnCats" width="250px" />






 */}

                                {/* </div> */}


                                {/* <br />
                            </div>
                            <div class="cats9">

                            </div>
                    </div>
                    </div>
            </div> */}
            </main>


        </>




    // <div className="footer-custom text-center py-4">Copyright 2025</div>
                        )
}

                        export default Catcalc;