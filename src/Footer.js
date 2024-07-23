// src/Footer.js

import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-column">
                    <h3>Categories</h3>
                    <ul>
                        <li>User Interface</li>
                        <li>User Experience</li>
                        <li>Digital Media</li>
                        <li>Lifestyle</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Product</h3>
                    <ul>
                        <li>Pricing</li>
                        <li>Overview</li>
                        <li>Browse</li>
                        <li>Accessibility <span className="beta">BETA</span></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Solutions</h3>
                    <ul>
                        <li>Brainstorming</li>
                        <li>Ideation</li>
                        <li>Wireframing</li>
                        <li>Research</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Resources</h3>
                    <ul>
                        <li>Help Center</li>
                        <li>Blog</li>
                        <li>Tutorials</li>
                        <li>FAQs</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Support</h3>
                    <ul>
                        <li>Contact Us</li>
                        <li>Developers</li>
                        <li>Documentation</li>
                        <li>Integrations</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Company</h3>
                    <ul>
                        <li>About</li>
                        <li>Press</li>
                        <li>Events</li>
                        <li>Request Demo</li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>Trakor @ 2023 &nbsp; | &nbsp; Terms of Service &nbsp; | &nbsp; Privacy Policy &nbsp; | &nbsp; Manage Cookies</p>
                <div className="social-media">
                    <img src="/youtube.svg" alt="youtube" className="youtube-svg" />
                    <img src="/facebook.svg" alt="facebook" className="facebook-svg" />
                    <img src="/twiter.svg" alt="twitter" className="twitter-svg" />
                    <img src="/instagram.svg" alt="instagram" className="instagram-svg" />
                    <img src="/in.svg" alt="linkedin-in" className="in-svg" />
                </div>
                <div className="app-buttons">
                    <img src="https://static.wixstatic.com/media/824d13_7d31aba6cb534af0b0348133041fdab5~mv2.png/v1/fill/w_353,h_114,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/App-Store-Button-transparent.png" alt="Download on the App Store" />
                    <img src="https://static.wixstatic.com/media/824d13_539ebea66855442d8684e84d8c76d383~mv2.png/v1/fill/w_361,h_111,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/1024px-Google_Play_Store_badge_EN_svg.png" alt="Get it on Google Play" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
