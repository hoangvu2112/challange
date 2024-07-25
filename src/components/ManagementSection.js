import React from 'react';
import '../styles/ManagementSection.css';

const ManagementSection = () => {
    return (
        <div className="management-section">
            <div className="text-content">
                <h2>Team management.</h2>
                <h3>Effortless synchronization.</h3>
                <p>
                    Massa nunc nisi fames adipiscing scelerisque placerat et sagittis cursus.
                    Mi commodo id maecenas amet, elementum a, in.
                </p>
                <ul>
                    <li>Est et in pharetra magna adipiscing ornare aliquam.</li>
                    <li>Tellus arcu sed consequat ac velit ut eu blandit.</li>
                    <li>Ullamcorper ornare et in egestas dolor orci.</li>
                </ul>
                <button className="start-button">Start for free</button>
            </div>
            <div className="image-content">
                <img src={`${process.env.PUBLIC_URL}/img/management.svg`} alt="Team Management" />
            </div>
        </div>
    );
};

export default ManagementSection;
