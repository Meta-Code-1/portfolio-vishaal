import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, User } from 'lucide-react';
import '../styles/Education.css';

const educationData = [
    {
        id: 1,
        degree: "Master of Business Administration (HR & Marketing)",
        institution: "Punjab Technical University (PTU)",
        year: "2011",
        grade: "First Division",
        details: "Specialized in Human Resource Management and Strategic Marketing."
    },
    {
        id: 2,
        degree: "Bachelor of Arts",
        institution: "CSJM University Kanpur",
        year: "2008",
        grade: "Second Division",
        details: "Focused on core humanities subjects."
    }
];

const Education = () => {
    return (
        <section id="education" className="education-section">
            <div className="education-container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="linear-title-sm">
                        Academic <span className="text-gradient">Background</span>
                    </h2>
                    <p className="linear-subtitle-sm">
                        Foundational knowledge underpinning a career in corporate strategy.
                    </p>
                </motion.div>

                <div className="education-list">
                    {educationData.map((edu, index) => (
                        <motion.div
                            key={edu.id}
                            className="education-card"
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <div className="edu-icon-wrapper">
                                <GraduationCap size={24} />
                            </div>
                            <div className="edu-content">
                                <div className="edu-header">
                                    <h3>{edu.degree}</h3>
                                    <span className="edu-year">{edu.year}</span>
                                </div>
                                <h4 className="edu-institution">{edu.institution}</h4>
                                <p className="edu-details">{edu.details}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
