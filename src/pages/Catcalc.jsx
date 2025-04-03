
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import '../styles/Components.css';
import Calc from '../components/Calc';
import FooterButtons from '../components/Footerbutton';
import BarnCatsImage from '../components/BarnCatsImage';

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
                    
  
    <div className="container">
      <div className="container1">
        <br />
        <div className="containertext">
          {/* <div className="containerleft">
            <br />
            <h1>Cat Age Calculator</h1>
          
            </div>  */}
                                <br />
                                <Calc />
                                <BarnCatsImage />
                            
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




   
                        )
}

                        export default Catcalc;