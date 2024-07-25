import React from 'react';
import '../styles/WebInterfaceSection.css';

const WebInterfaceSection = () => {
    return (
        <div className="web-interface-section">
            <h2>Diam quam tortor eget id.</h2>
            <h3>Aliquet lacus volutpat tristique sed diam.</h3>
            <img src={`${process.env.PUBLIC_URL}/section.svg`} alt="section" />
        </div>
    );
};

export default WebInterfaceSection;
