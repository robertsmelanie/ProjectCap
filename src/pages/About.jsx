import React from "react";
import "../style.css"; // global stylesheet

function About() {
    return (
        <section className="about-section">
            <h2>
                <span className="title">About Us - The Mighty Mouser</span>
            </h2>

            <p className="intro">
                At The Mighty Mouser, when it comes to rodent control we believe in
                working smarter not harder. Farmers have known for generations that
                barn cats are the best defense against mice, rats, and other pests — a
                tried-and-true partnership between cat and farm.
            </p>

            <div className="custom-container">
                <div className="custom-container1">
                    <div className="containertext">
                        <div className="containerright custom-scroll">
                            <p>
                                Our mission is simple: help get the right supplies for:
                                <ul>
                                    <li>Farmers</li>
                                    <li>Ranchers</li>
                                    <li>Homesteaders</li>
                                </ul>
                            </p>

                            <p>
                                We provide everything you need to support your barn cats,
                                including:
                                <ul>
                                    <li>Quality feed</li>
                                    <li>Sturdy shelters</li>
                                    <li>Other supplies to keep them ready for the job</li>
                                </ul>
                            </p>

                            <p>
                                Whether you’ve been farming for decades or are just getting
                                started, we’re here to help you build a sustainable,
                                rodent-free farm — one barn cat at a time.
                            </p>
                        </div>
                    </div>

                    <div className="containerbuttons">
                        <button
                            onClick={() => (window.location.href = "/health")}
                            className="health"
                            type="button"
                        >
                            Health
                        </button>
                        <button
                            onClick={() => (window.location.href = "/supplies")}
                            className="supplies"
                            type="button"
                        >
                            Supplies
                        </button>
                        <button
                            onClick={() => (window.location.href = "/history")}
                            className="history"
                            type="button"
                        >
                            History
                        </button>
                    </div>
                </div>
            </div>

            <div className="footer-custom">Copyright 2025</div>
        </section>
    );
}

export default About;