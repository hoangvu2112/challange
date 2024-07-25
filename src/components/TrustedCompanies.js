import React from 'react';
import '../styles/TrustedCompanies.css';
import SmartFinderLogo from '../logo/SmartFinderLogo.svg';
import ZoomerrLogo from '../logo/ZoomerrLogo.svg';
import ShellsLogo from '../logo/ShellsLogo.svg';
import WavesLogo from '../logo/WavesLogo.svg';
import ArtVenueLogo from '../logo/ArtVenueLogo.svg';

const TrustedCompanies = () => {
    return (
        <div className="trusted-companies">
            <p>Trusted by teams from leading companies</p>
            <div className="company-logos">
                <div className="company-logo">
                    <img src={SmartFinderLogo} alt="SmartFinder" />
                    <span>SmartFinder</span>
                </div>
                <div className="company-logo">
                    <img src={ZoomerrLogo} alt="Zoomerr" />
                    <span>Zoomerr</span>
                </div>
                <div className="company-logo">
                    <img src={ShellsLogo} alt="SHELLS" />
                    <span>SHELLS</span>
                </div>
                <div className="company-logo">
                    <img src={WavesLogo} alt="WAVES" />
                    <span>WAVES</span>
                </div>
                <div className="company-logo">
                    <img src={ArtVenueLogo} alt="ArtVenue" />
                    <span>ArtVenue</span>
                </div>
            </div>
        </div>
    );
};

export default TrustedCompanies;
