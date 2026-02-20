import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import '../styles/Experience.css';

const experiences = [
    {
        id: 1,
        company: 'Noida International University',
        role: 'General Manager - Career Services & Corporate Relations (SET & SOS)',
        duration: 'August 2025 - Present',
        location: 'Noida, Uttar Pradesh',
        details: [
            'Leading career services and corporate relations strategies.',
            'Setting up prominent industrial connects.',
            'Spearheading student placement initiatives.'
        ]
    },
    {
        id: 2,
        company: 'Sharda University, Greater Noida',
        role: 'Sr Manager - Career Services (Sharda School of Engineering and Technology)',
        duration: 'February 2024 - August 2025',
        location: 'Greater Noida',
        details: [
            'Managed career services for engineering and technology students.',
            'Sr Manager Corporate Relations and Career Services.'
        ]
    },
    {
        id: 3,
        company: 'CSJM University Kanpur (Aspirevision Tech Education)',
        role: 'Lead Corporate Relations and Industrial Connect',
        duration: 'April 2021 - February 2024',
        location: 'Kanpur, Uttar Pradesh, India',
        details: [
            'Lead corporate relations and industrial connect initiatives.',
            'Sr manager corporate relations role.'
        ]
    },
    {
        id: 4,
        company: 'NFCI Global Pvt. Ltd.',
        role: 'Regional Manager Corporate Relations',
        duration: 'October 2019 - April 2021',
        location: 'Corporate office Jalandhar',
        details: []
    },
    {
        id: 5,
        company: 'Lovely Professional University-LPU',
        role: 'Sr. Manager Placement',
        duration: 'August 2016 - October 2019',
        location: 'Ludhiana, Punjab, India',
        details: []
    }
];

const Experience = () => {
    return (
        <section id="experience" className="experience-section">
            <div className="experience-bg-grid"></div>
            <div className="experience-glow-orb"></div>

            <div className="experience-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="section-header"
                >
                    <h2 className="linear-title-sm">
                        Professional <span className="text-gradient">Journey</span>
                    </h2>
                    <p className="linear-subtitle-sm">
                        A track record of <strong>strategic leadership</strong> and impactful corporate relations across top institutions.
                    </p>
                </motion.div>

                <div className="timeline-container">
                    <div className="timeline-line"></div>

                    {experiences.map((exp, index) => (
                        <TimelineItem key={exp.id} data={exp} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const TimelineItem = ({ data, index }) => {
    const isLeft = index % 2 === 0;

    return (
        <motion.div
            className={`timeline-row ${isLeft ? 'left' : 'right'}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <div className={`timeline-card premium-card ${isLeft ? 'card-left' : 'card-right'}`}>
                <div className="card-content">
                    <div className="role-header">
                        <h3>{data.role}</h3>
                        <div className="company-badge">
                            <Briefcase size={14} /> {data.company}
                        </div>
                    </div>

                    <div className="meta-info">
                        <span className="date-badge">
                            <Calendar size={12} /> {data.duration}
                        </span>
                        <span className="location-text">
                            {data.location}
                        </span>
                    </div>

                    {data.details.length > 0 && (
                        <ul className="details-list">
                            {data.details.map((detail, i) => (
                                <li key={i}>{detail}</li>
                            ))}
                        </ul>
                    )}
                </div>
                {/* Glow Effect */}
                <div className="card-glow"></div>
            </div>

            <div className="timeline-dot-container">
                <div className="timeline-dot"></div>
                <div className="timeline-pulse"></div>
            </div>

            <div className="timeline-spacer"></div>
        </motion.div>
    );
};

export default Experience;
