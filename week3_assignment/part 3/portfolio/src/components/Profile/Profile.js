// src/components/Profile.js
import React from "react";
import "./Profile.css";

function Profile() {
    return (
        <div className="profile-section">
            <img src="/images/profile.jpg" alt="Profile Picture" className="profile-img" />
            <p>Markham, ON L6B0P1</p>
            <p>Email: <a href="mailto:harshitchennakdan@gmail.com">harshitchennakdan@gmail.com</a></p>
            <p>Phone: 416-823-0157</p>
        </div>
    );
}

export default Profile;
