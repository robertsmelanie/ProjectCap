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
          <div class="title">
            <h1>
              About Us - The Mighty Mouser
            </h1>
          </div>
          <br />
            <div className="container">
              <div className="container1">
                <div className="containertext">

                  <div className="containerright scroll-box overflow-x-scroll">
                    <div className="left-align">
                      {/* <h4> */}
                        <p>
                          At The Mighty Mouser when it comes to rodent control we believe in working smarter not harder. Farmers have known for generations that barn cats are the best defense against mice, rats, and other pests. A tried-and-true partnership between cat and farm.
                        </p>
                        <p>
                          Our mission is simple help get the right supplies for:
                          <ul>
                            <li>Farmers, </li>
                            <li>
                              Ranchers,
                            </li>
                            <li>
                              and Homesteaders
                            </li>

                          </ul>
                          <br />


                            <p>
                              At The Mighty Mouser, we provide everything you need to support your barn cats including:
                              <ul>
                                <li>Quality feed</li>
                                <li>Sturdy shelters</li>
                                <li>Other suppliles to keep them ready for the job</li>
                              </ul>
                            </p>
                            <p>
                              Whether you’ve been farming for decades or are just getting started, we’re here to help you build a sustainable, rodent-free farm one barn cat at a time.
                            </p>  
                      </p>
                      {/* </h4> */}


                    </div>


                  </div>

                    <br />

                  </div>
                  <div className="cats9">

                  </div>
              </div>

            </div>
         </section>
      </main>

          </>
          );
}

          export default Home;