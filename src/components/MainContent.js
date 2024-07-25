import React from 'react';
import '../styles/MainContent.css';

const MainContent = () => {
    return (
        <div className="main-content">
            <h2>Team Progress Tracking Tool</h2>
            <h1>Track your team progress</h1>
            <p>Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem.</p>
            <div className="buttons">
                <button className="start-button">Start for free</button>
                <button className="request-button">Request more info</button>
            </div>
            <div className="graphic">
                <img src={`${process.env.PUBLIC_URL}/shapes.svg`} alt="Graphic" className="graphic-svg" />
            </div>
        </div>
    );
};

export default MainContent;
