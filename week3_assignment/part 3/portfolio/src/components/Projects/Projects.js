// src/components/Projects.js
import React from "react";
import "./Projects.css";

function Projects() {
    return (
        <section className="projects">
            <h2>Projects</h2>
            <div className="project">
                <img
                    src="/images/mall-app.jpg"
                    alt="Mall Application Project"
                    className="project-img"
                />
                <h3>Mall Application Product (2020)</h3>
                <p>
                    Developed a website and Android app to assist customers in large
                    supermarkets, providing product and shop information and parking slot
                    reservations.
                </p>
                <p>
                    <strong>Tools:</strong> PHP, HTML, Android Studio, PostgreSQL
                </p>
            </div>
            <div className="project">
                <img
                    src="/images/signal-strength.jpg"
                    alt="Signal Strength Project"
                    className="project-img"
                />
                <h3>Signal Strength Product (2021)</h3>
                <p>
                    Designed a website to check mobile service signal strength at specific
                    locations, assisting customers with SIM card information.
                </p>
                <p>
                    <strong>Tools:</strong> PHP, HTML, PostgreSQL
                </p>
            </div>
        </section>
    );
}

export default Projects;
