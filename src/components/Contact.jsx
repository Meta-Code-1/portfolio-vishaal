import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, MapPin, Send } from 'lucide-react';
import '../styles/Contact.css';

const Contact = () => {
    const [result, setResult] = React.useState("");
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setResult("Sending...");
        const formData = new FormData(event.target);

        // Access key is already in the form as a hidden input
        // formData.append("access_key", "f2703ed3-758d-4edc-a380-17cd68dcabd9");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResult("Message Sent Successfully!");
                event.target.reset();
            } else {
                console.log("Error", data);
                setResult(data.message);
            }
        } catch (error) {
            setResult("Something went wrong. Please try again.");
            console.error("Submission error:", error);
        }

        setIsSubmitting(false);

        // Clear result message after 5 seconds
        setTimeout(() => {
            setResult("");
        }, 5000);
    };

    return (
        <section id="contact" className="contact-section">
            <div className="contact-bg-grid"></div>
            <div className="contact-glow-orb"></div>

            <div className="contact-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="section-header"
                >
                    <h2 className="linear-title-sm">
                        Let's <span className="text-gradient">Collaborate</span>
                    </h2>
                    <p className="linear-subtitle-sm">
                        Open for leadership roles and strategic consulting opportunities.
                    </p>
                </motion.div>

                <div className="contact-content-grid">
                    {/* Contact Info Card */}
                    <motion.div
                        className="contact-card-premium"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3>Contact Information</h3>
                        <p className="contact-desc">
                            Ready to drive institutional growth? Reach out directly or connect via social platforms.
                        </p>

                        <div className="contact-items">
                            <div className="contact-item">
                                <div className="icon-box">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <h4>Location</h4>
                                    <p>Noida, Uttar Pradesh, India</p>
                                </div>
                            </div>

                            <a href="mailto:vishaalbajpai@example.com" className="contact-item link-item">
                                <div className="icon-box">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <h4>Email</h4>
                                    <p>vishaalbajpai@example.com</p>
                                </div>
                            </a>

                            <a
                                href="https://www.linkedin.com/in/vishaal-bajpai-17aa5ab2"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-item link-item"
                            >
                                <div className="icon-box">
                                    <Linkedin size={20} />
                                </div>
                                <div>
                                    <h4>LinkedIn</h4>
                                    <p>in/vishaal-bajpai</p>
                                </div>
                            </a>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        className="form-card-premium"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <form className="premium-form" onSubmit={onSubmit}>

                            <input type="hidden" name="access_key" value="f2703ed3-758d-4edc-a380-17cd68dcabd9" />
                            {/* Optional: Honeypot Spam Protection */}
                            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <input type="text" id="name" name="name" placeholder="John Doe" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input type="email" id="email" name="email" placeholder="john@company.com" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" name="message" rows="4" placeholder="How can we work together?" required></textarea>
                            </div>

                            <button type="submit" className="submit-btn" disabled={isSubmitting}>
                                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                                <Send size={16} />
                            </button>

                            {result && (
                                <p className={`form-result ${result.includes("Success") ? "success" : "error"}`} style={{
                                    marginTop: '1rem',
                                    fontSize: '0.9rem',
                                    color: result.includes("Success") ? '#4ade80' : '#f87171',
                                    textAlign: 'center'
                                }}>
                                    {result}
                                </p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
