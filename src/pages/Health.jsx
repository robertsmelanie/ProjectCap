import React from 'react';
import 'style.css'

function Health() {
    return (
        <section>

            <div className="title">
                <h1>Barn Cat Health</h1>
            </div>

            <!--Background Image Section-- >
            <div class="container-fluid container1 d-flex justify-content-center align-items-center py-5">
                <div class="container">
                    <!-- Maroon Background Section -->
                    <div class="containertext p-4 mx-auto">
                        <div class="row align-items-center">

                            <!-- Left Column: Image -->
                            <!-- <div class="col-md-6 text-center">
                                <h2>Health of Barn Cats</h2>
                                <p>Barn cats help control pests but face unique health risks due to their outdoor lifestyle. Proper care improves their well-being while ensuring they remain effective hunters.</p>
                                <br>
                                    <img src="illustration_for_barn_cats_9.png" alt="BarnCats" class="img-fluid rounded shadow">
                                    </div> -->

                                    <!-- Right Column: Text Content -->
                                    <!-- <div class="col-md-6 text-light text-start p-3">
                                        <h2>Health of Barn Cats</h2>

                                    </div> -->
                                    <!-- </div> End Row -->
                            <!--</div> -- End Maroon Background -->
                        <!--</div>  End Container -->
                    <!--</div> End Background Image Section -->

                <div class="container">
                    <div class="container1">
                        <div class="containertext">
                            <div class="containerleft scroll-box overflow-x-scroll">
                                <img src="illustration_for_barn_cats_9.png" alt="BarnCats" width="250px">
                                    <br>
                                        <h1>Health of Barn Cats</h1>


                                        <p>Barn cats help control pests but face unique health risks due to their outdoor lifestyle. Proper
                                            care improves their well-being while ensuring they remain effective hunters.</p>

                                        <h2>Common Health Issues</h2>
                                        <p>
                                            <ul>
                                                <li><strong>Parasites:</strong> High risk for fleas, ticks, mites, and worms. Regular deworming
                                                    and flea prevention help.</li>
                                                <li><strong>Diseases:</strong> Exposure to FeLV, FIV, and respiratory infections. Vaccinations
                                                    reduce risks.</li>
                                                <li><strong>Malnutrition:</strong> Hunting alone may not provide balanced nutrition.
                                                    Supplemental feeding ensures health.</li>
                                                <li><strong>Injuries:</strong> Fights, predators, and farm equipment pose dangers.
                                                    Spaying/neutering reduces aggression.</li>
                                                <li><strong>Extreme Weather:</strong> Cold winters and hot summers can be deadly. Insulated
                                                    shelters and shade help.</li>
                                            </ul>

                                        </p>


                                        <h2>Best Care Practices</h2>
                                        <p>
                                            <ul>
                                                <li><strong>Spay & Neuter:</strong> Prevents overbreeding, reduces disease spread, and lowers
                                                    injury risks.</li>
                                                <li><strong>Vaccinations & Vet Care:</strong> Essential for disease prevention and overall
                                                    health.</li>
                                                <li><strong>Safe Shelter:</strong> Insulated boxes or barn spaces protect from weather and
                                                    predators.</li>
                                                <li><strong>Food & Water:</strong> Even hunting cats need consistent meals and clean water.</li>
                                            </ul>
                                        </p>




                                        <p>By implementing these care strategies, farmers can ensure their barn cats remain healthy,
                                            reducing the spread of disease and improving their quality of life while continuing their role
                                            as efficient pest controllers.</p>


                                    </div>
                                    <!-- <div class="containerright">



                                    </div> -->

                                    <br>


                                    </div>
                                    <div class="cats9">

                                    </div>
                            </div>
                            <div class="containerbuttons">
                                <button onclick="window.location.href='health.html'" class="health" type="button">
                                    Health
                                </button>
                                <button onclick="window.location.href='supplies.html'" class="supplies" type="button">Supplies</button>
                                <button onclick="window.location.href='index.html'" class="history" type="button">Home</button>
                            </div>
                        </div>
                        <div class="footer-custom">
                            Copyright 2025
                        </div>



        </section>


    );
}
export default Health;