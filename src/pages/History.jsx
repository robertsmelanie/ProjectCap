import React from 'react';
import 'style.css'

function History() {
  return (
      <section>
         


                      <div class="title">
                          <h1>
                              Barn Cat History - The Mighty Mouser
                          </h1>
                      </div>
                      <!-- Title Section -->
                      <!-- <div class="title text-center">
                          <h1>Barn Cat History</h1>
                      </div> -->

                      <!-- Background Image Section -->
                      <div class="container-fluid container1 d-flex justify-content-center align-items-center py-5">
                          <div class="container">
                              <!-- Maroon Background Section (One Column) -->
                              <div class="containertext p-4 mx-auto">
                                  <div class="scroll-box overflow-x-scroll containerleft">
                                      <div class="text-center">
                                          <img class="img-fluid rounded shadow" src="illustration_for_barn_cats_9.png" alt="BarnCats" width="250px">
                                      </div>

                                      <h2 class="mt-3">History of Barn Cats</h2>

                                      <p>Barn cats have been essential to human civilization for thousands of years, serving as natural pest controllers in agricultural settings. Their presence on farms dates back to ancient times when humans first began storing grain and raising livestock, leading to the domestication of wild cats.</p>

                                      <h3>Ancient Origins</h3>
                                      <p>Around 9,000 years ago, in the Fertile Crescent, early farmers faced the challenge of protecting grain stores from rodents. Wild cats, particularly the African wildcat (<i>Felis lybica</i>), were naturally drawn to human settlements due to the abundance of prey. Over time, a symbiotic relationship developed—cats provided pest control, and humans tolerated their presence, occasionally offering food and shelter. This early bond marked the beginning of cat domestication.</p>

                                      <h3>Medieval and Renaissance Periods</h3>
                                      <p>As agriculture spread across Europe, so did the need for rodent control. Barn cats became common in farms, monasteries, and granaries, playing a crucial role in food preservation. However, during the Middle Ages, superstitions surrounding cats—particularly black ones—led to their persecution, as they were often associated with witchcraft. Despite this, their practical benefits ensured their survival, and they remained a fixture in rural communities.</p>

                                      <!-- <h3>Colonial and Early American Farms</h3>
                                      <p>European settlers brought cats to North America aboard ships to protect food stores from rodents. Once on land, many of these cats adapted to farm life, becoming an essential part of rural homesteads. They thrived in barns and outbuildings, where they controlled rodent populations, making them indispensable for early American farmers who relied on stored grains and livestock feed.</p> -->

                                      <h3>Modern Barn Cats</h3>
                                      <p>Today, barn cats continue to serve as an eco-friendly pest control solution on farms and rural properties. Unlike house cats, they are often semi-feral or completely feral, living independently while forming colonies around barns, stables, and sheds. Although they primarily fend for themselves, many farmers provide basic care, such as supplemental feeding, shelter, and medical attention, to maintain a healthy barn cat population.</p>
                                  </div>
                              </div> <!-- End Maroon Background -->
                          </div> <!-- End Container -->
                      </div> <!-- End Background Image Section -->

                      <div class="containerbuttons">
                          <button onclick="window.location.href='health.html'" class="health" type="button">
                              Health
                          </button>
                          <button onclick="window.location.href='supplies.html'" class="supplies" type="button">Supplies</button>
                          <button onclick="window.location.href='history.html'" class="history" type="button">History</button>
                      </div>
                  </div>
                  <div class="footer-custom">
                      Copyright 2025
                  </div>
              </div>
      </section>
      

    );
}
export default History;