// src/components/Banner.js
import React from "react";
import "./Banner.css";

function Banner() {
    return (
        <div className="banner">
            <img src="/images/banner.jpg" alt="Portfolio Banner" className="banner-img" />
            <h1>Harshit Babu</h1>
            <p className="tagline">Aspiring Software Developer | Tech Enthusiast</p>
        </div>
    );
}

export default Banner;
