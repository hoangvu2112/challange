// src/TeamProjectsSection.js

import React from 'react';
import './TeamProjectsSection.css';

const TeamProjectsSection = () => {
    return (
        <div className="team-projects-section">
            <h2>
                Your team. Your projects.<br />
                <span>Always together.</span>
            </h2>
            <p>
                Malesuada ut aliquam at ac est nisi, interdum etiam dignissim.
            </p>
            <div className="buttons">
                <button className="start-button">Start for free</button>
                <button className="request-button">Request more info</button>
            </div>
        </div>
    );
};

export default TeamProjectsSection;
