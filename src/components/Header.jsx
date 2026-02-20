import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Header.css';

const Header = () => {
    return (
        <motion.header
            className="premium-header"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        >
            <div className="header-container">
                <a href="#" className="logo">
                    V<span className="text-gradient">ishaal</span>
                </a>
                <nav className="nav-menu">
                    <ul>
                        <li><a href="#hero">Home</a></li>
                        <li><a href="#achievements">Impact</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#education">Education</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </motion.header>
    );
};

export default Header;
