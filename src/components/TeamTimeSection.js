import React from 'react';
import '../styles/TeamTimeSection.css';

const TeamTimeSection = () => {
    return (
        <div className="team-time-section">
            <div className="text-content">
                <h2>Bigger team.</h2>
                <h3>More time.</h3>
                <p>
                    Quam quis orci turpis vulputate platea. Urna ipsum suscipit nullam ipsum nam leo fringilla eget lorem.
                    Sit vestibulum phasellus integer et et diam malesuada. Sed tortor orci mauris proin ac. Venenatis euismod
                    mauris quis sit purus nisi. Sed quis eget augue ut aliquam sed.
                </p>
            </div>
            <div className="images-content">
                <img src={`${process.env.PUBLIC_URL}/img/image1.svg`} alt="Image 1" />
                <img src={`${process.env.PUBLIC_URL}/img/image2.svg`} alt="Image 2" />
                <img src={`${process.env.PUBLIC_URL}/img/image3.svg`} alt="Image 3" />
                <img src={`${process.env.PUBLIC_URL}/img/image4.svg`} alt="Image 4" />
            </div>
        </div>
    );
};

export default TeamTimeSection;
