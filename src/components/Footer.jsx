import React from 'react';
import '../styles/Footer.css';
import { Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Vishaal Bajpai. All rights reserved.</p>
                <div className="social-links">
                    <a href="https://www.linkedin.com/in/vishaal-bajpai-17aa5ab2" target="_blank" rel="noopener noreferrer">
                        <Linkedin size={24} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
