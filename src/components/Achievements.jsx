import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Trophy, TrendingUp, Award, Users } from 'lucide-react';
import '../styles/Achievements.css';

const achievements = [
    {
        id: 1,
        title: "Record Placement Drive",
        metric: "95%",
        description: "Achieved highest ever placement percentage for the engineering batch of 2024.",
        icon: <TrendingUp size={32} />
    },
    {
        id: 2,
        title: "Industry Partnerships",
        metric: "500+",
        description: "Established strategic MOUs with top Fortune 500 companies for internships and hiring.",
        icon: <Users size={32} />
    },
    {
        id: 3,
        title: "Excellence Award",
        metric: "2023",
        description: "Recognized as 'Best Corporate Relations Manager' for outstanding contribution.",
        icon: <Trophy size={32} />
    },
    {
        id: 4,
        title: "Student Training",
        metric: "10k+",
        description: "Directly mentored and trained over 10,000 students in soft skills and interview prep.",
        icon: <Award size={32} />
    }
];

const Counter = ({ value }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-20px" });

    // Parse number and non-numeric characters
    const match = value.match(/^([\d.]+)(.*)$/);
    const number = match ? parseFloat(match[1]) : 0;
    const suffix = match ? match[2] : value;
    const isNumeric = !isNaN(number) && match;

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        stiffness: 60,
        damping: 15,
        mass: 1,
    });

    useEffect(() => {
        if (inView && isNumeric) {
            motionValue.set(number);
        }
    }, [inView, number, motionValue, isNumeric]);

    const displayValue = useTransform(springValue, (latest) => {
        if (!isNumeric) return value;
        // Handle integers vs floats
        if (number % 1 !== 0) {
            return latest.toFixed(1) + suffix;
        }
        return Math.round(latest) + suffix;
    });

    if (!isNumeric) return <span>{value}</span>;

    return <motion.span ref={ref}>{displayValue}</motion.span>;
};

const Achievements = () => {
    return (
        <section id="achievements" className="achievements-section">
            <div className="achievements-bg-glow"></div>

            <div className="achievements-container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="linear-title-sm">
                        Key <span className="text-gradient">Achievements</span>
                    </h2>
                    <p className="linear-subtitle-sm">
                        Delivering measurable impact through strategic initiatives and dedicated leadership.
                    </p>
                </motion.div>

                <div className="achievements-grid">
                    {achievements.map((item, index) => (
                        <motion.div
                            key={item.id}
                            className="achievement-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -8 }}
                        >
                            <div className="card-bg-gradient"></div>
                            <div className="achievement-icon">
                                {item.icon}
                            </div>
                            <div className="achievement-metric">
                                <Counter value={item.metric} />
                            </div>
                            <h3 className="achievement-title">{item.title}</h3>
                            <p className="achievement-desc">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
