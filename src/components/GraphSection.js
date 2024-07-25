// src/GraphSection.js

import React from 'react';
import '../styles/GraphSection.css';

const GraphSection = () => {
    return (
        <div className="graph-section">
            <div className="text-content">
                <h2>Ultrices risus, sagittis, ullamcorper gravida aliquam auctor.</h2>
                <p>
                    Risus sit suscipit et nibh. Morbi pretium volutpat eget habitasse habitant
                    elementum dignissim arcu mauris. Ullamcorper euismod id commodo mi nec.
                    Sit egestas mauris imperdiet feugiat eros, sapien at pellentesque.
                </p>
                <button className="request-button">Request more info</button>
            </div>
            <div className="graph-content">
                <img src="graph.svg" alt="Graph" />
            </div>
        </div>
    );
};

export default GraphSection;
