import React from 'react';
import { motion } from 'framer-motion';
import {
    Users,
    Building,
    TrendingUp,
    Briefcase,
    GraduationCap,
    MessageCircle,
    BarChart,
    DollarSign,
    Award,
    Target,
    Globe,
    Megaphone,
    Handshake,
    PieChart,
    UserPlus,
    MapPin
} from 'lucide-react';
import '../styles/Skills.css';

const skills = [
    { title: 'Training & Development', icon: <Users size={32} />, category: 'HR' },
    { title: 'Corporate Relations', icon: <Building size={32} />, category: 'Strategy' },
    { title: 'Marketing Strategy', icon: <TrendingUp size={32} />, category: 'Marketing' },
    { title: 'Employer Relations', icon: <Handshake size={32} />, category: 'HR' },
    { title: 'Communication', icon: <MessageCircle size={32} />, category: 'Soft Skills' },
    { title: 'Data Analysis', icon: <BarChart size={32} />, category: 'Analytics' },
    { title: 'Budget Management', icon: <DollarSign size={32} />, category: 'Finance' },
    { title: 'Corporate Comm.', icon: <Megaphone size={32} />, category: 'Communication' },
    { title: 'Leadership', icon: <Award size={32} />, category: 'Management' },
    { title: 'Career Counseling', icon: <UserPlus size={32} />, category: 'Counseling' },
    { title: 'Campus Placement', icon: <GraduationCap size={32} />, category: 'Education' },
    { title: 'Key Account Mgmt', icon: <Target size={32} />, category: 'Sales' },
    { title: 'Channel Sales', icon: <Briefcase size={32} />, category: 'Sales' },
    { title: 'Lead Generation', icon: <Users size={32} />, category: 'Sales' },
    { title: 'Sales Management', icon: <Briefcase size={32} />, category: 'Sales' },
    { title: 'Business Development', icon: <TrendingUp size={32} />, category: 'Growth' },
    { title: 'Sales & Marketing', icon: <PieChart size={32} />, category: 'Growth' },
    { title: 'Team Management', icon: <Globe size={32} />, category: 'Management' },
    { title: 'Sales & Distribution', icon: <MapPin size={32} />, category: 'Sales' }
];

const Skills = () => {
    return (
        <section id="skills" className="skills-section">
            {/* Background Elements */}
            <div className="skills-bg-grid"></div>
            <div className="skills-glow-orb"></div>

            <div className="skills-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="section-header"
                >
                    <h2 className="linear-title-sm">
                        Core <span className="text-gradient">Competencies</span>
                    </h2>
                    <p className="linear-subtitle-sm">
                        A comprehensive toolkit sharpened over <strong>15+ years</strong> of industry leadership,
                        bridging the gap between <strong>talent</strong> and <strong>opportunity</strong>.
                    </p>
                </motion.div>

                <div className="skills-grid-container">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="premium-skill-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.5 }}
                            whileHover={{ y: -5 }}
                        >
                            <div className="skill-icon-box">
                                {skill.icon}
                            </div>
                            <div className="skill-content">
                                <h3>{skill.title}</h3>
                                <span className={`skill-tag tag-${skill.category.toLowerCase().replace(/\s+/g, '-')}`}>
                                    {skill.category}
                                </span>
                            </div>
                            <div className="card-hover-gradient"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
