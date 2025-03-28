import React from 'react';
import './styles/style.css'

function Health() {
    return (
        <div>
            {/* Navbar Component */}
            {/* Replace with: <Navbar /> once componentized */}

            {/* Title */}
            <div className={styles.title}>
                <h1>Barn Cat Health</h1>
            </div>

            {/* Background Image Section */}
            <div className={`${styles.container1} py-5`}>
                <div className={`${styles.containertext} p-4 mx-auto`}>
                    <div className={styles.containerleft}>
                        <img
                            src="/assets/illustration_for_barn_cats_9.png"
                            alt="BarnCats"
                            width="250px"
                        />
                        <h1>Health of Barn Cats</h1>
                        <p>
                            Barn cats help control pests but face unique health risks due to
                            their outdoor lifestyle. Proper care improves their well-being
                            while ensuring they remain effective hunters.
                        </p>

                        <h2>Common Health Issues</h2>
                        <ul>
                            <li>
                                <strong>Parasites:</strong> High risk for fleas, ticks, mites,
                                and worms. Regular deworming and flea prevention help.
                            </li>
                            <li>
                                <strong>Diseases:</strong> Exposure to FeLV, FIV, and
                                respiratory infections. Vaccinations reduce risks.
                            </li>
                            <li>
                                <strong>Malnutrition:</strong> Hunting alone may not provide
                                balanced nutrition. Supplemental feeding ensures health.
                            </li>
                            <li>
                                <strong>Injuries:</strong> Fights, predators, and farm equipment
                                pose dangers. Spaying/neutering reduces aggression.
                            </li>
                            <li>
                                <strong>Extreme Weather:</strong> Cold winters and hot summers
                                can be deadly. Insulated shelters and shade help.
                            </li>
                        </ul>

                        <h2>Best Care Practices</h2>
                        <ul>
                            <li>
                                <strong>Spay & Neuter:</strong> Prevents overbreeding, reduces
                                disease spread, and lowers injury risks.
                            </li>
                            <li>
                                <strong>Vaccinations & Vet Care:</strong> Essential for disease
                                prevention and overall health.
                            </li>
                            <li>
                                <strong>Safe Shelter:</strong> Insulated boxes or barn spaces
                                protect from weather and predators.
                            </li>
                            <li>
                                <strong>Food & Water:</strong> Even hunting cats need consistent
                                meals and clean water.
                            </li>
                        </ul>

                        <p>
                            By implementing these care strategies, farmers can ensure their
                            barn cats remain healthy, reducing the spread of disease and
                            improving their quality of life while continuing their role as
                            efficient pest controllers.
                        </p>
                    </div>
                </div>
            </div>

            {/* Navigation Buttons */}
            <div className={styles.containerbuttons}>
                <button onClick={() => (window.location.href = "/health")} className={styles.health}>
                    Health
                </button>
                <button onClick={() => (window.location.href = "/supplies")} className={styles.supplies}>
                    Supplies
                </button>
                <button onClick={() => (window.location.href = "/")} className={styles.history}>
                    Home
                </button>
            </div>

            {/* Footer */}
            <div className={styles.footerCustom}>Copyright 2025</div>
        </div>
    );
}
export default Health;