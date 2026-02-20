import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Linkedin, ChevronRight, Target, Users, Zap } from 'lucide-react';
import '../styles/Hero.css';

const Hero = () => {
    return (
        <section id="hero" className="hero-linear">
            {/* Grid Beam Background */}
            <div className="linear-grid">
                <div className="beam horizontal"></div>
                <div className="beam vertical"></div>
                <div className="beam horizontal-2"></div>
                <div className="grid-fade"></div>
            </div>

            <div className="hero-content">
                <motion.div
                    className="announcement-badge"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <span className="dot-indicator"></span>
                    <span className="badge-text">Seeking Senior Leadership Roles</span>
                    <ChevronRight size={14} />
                </motion.div>

                <motion.h1
                    className="linear-title"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    Targeting <span className="text-gradient">Excellence</span> in <br />
                    Corporate Relations
                </motion.h1>

                <motion.p
                    className="linear-subtitle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                >
                    Hi, I'm <strong>Vishaal Bajpai</strong>. I architect bridges between academia and industry.
                    With 15+ years of experience, I scale student placements and build high-value corporate partnerships.
                </motion.p>

                <motion.div
                    className="linear-actions"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                >
                    <a href="https://www.linkedin.com/in/vishaal-bajpai-17aa5ab2" target="_blank" rel="noopener noreferrer" className="btn-linear-primary">
                        <Linkedin size={18} /> Connect on LinkedIn
                    </a>
                    <a href="#contact" className="btn-linear-secondary">
                        Contact Me
                    </a>
                </motion.div>

                {/* Feature Grid */}
                <motion.div
                    className="feature-grid"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                >
                    <div className="feature-item">
                        <div className="feature-icon"><Target size={20} /></div>
                        <div>
                            <h4>Strategy</h4>
                            <p>Placement Roadmaps</p>
                        </div>
                    </div>
                    <div className="feature-divider"></div>
                    <div className="feature-item">
                        <div className="feature-icon"><Users size={20} /></div>
                        <div>
                            <h4>Network</h4>
                            <p>500+ Partners</p>
                        </div>
                    </div>
                    <div className="feature-divider"></div>
                    <div className="feature-item">
                        <div className="feature-icon"><Zap size={20} /></div>
                        <div>
                            <h4>Impact</h4>
                            <p>Record Outcomes</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
