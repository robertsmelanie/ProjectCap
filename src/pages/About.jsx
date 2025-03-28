import React from 'react';
import 'style.css'

function About() {
  return (
    <section>
          <h2><span className ="title">About Us - The Mighty Mouser</span></h2>
      <p>
              At The Mighty Mouser when it comes to rodent control we believe in working smarter not harder. Farmers have known for generations that barn cats are the best defense against mice, rats, and other pests. A tried-and-true partnership between cat and farm.
      </p>
    
                    <br />
                                <div className="custom-container" />
                                    <div className='custom-container1'>
                                        <div className="containertext">
                                            
                                            <div className="containerright custom-scroll">
                                                <span className="left-align">
                                                    <h4>
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

                                                          
                                                        </p>
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
                                                    <h4 />

                                                <span />
                                                


                                            </div>

                                            <br />

                                        </div>
                                        <div className="cats9">

                                        </div>
                                    </div>
                                    <div className="containerbuttons">
                                        <button onClick="window.location.href='health.html'" className="health" type="button">
                                            Health
                                        </button>
                                        <button onClick="window.location.href='supplies.html'" className="supplies" type="button">Supplies</button>
                                        <button onClick="window.location.href='history.html'" className="history" type="button">History</button>
                                    </div>
                                </div>
                                <div class="footer-custom">
                                    Copyright 2025
                                </div>
      </div>
    </section>
            );
}
export default About;