import React, { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import {
  Mail,
  MessageSquare,
  User,
  Send,
  MapPin,
  Phone,
  Clock,
  Github,
  Linkedin,
  Twitter,
  CheckCircle
} from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast.success('Message sent successfully! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hello@thunderweather.com',
      link: 'mailto:hello@thunderweather.com'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'San Francisco, CA',
      link: null
    },
    {
      icon: Clock,
      title: 'Response Time',
      value: 'Within 24 hours',
      link: null
    }
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/hafizkh' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/hafiz-javid/' },
    { icon: Twitter, label: 'Twitter', href: 'https://twitter.com' }
  ];

  return (
    <div className="contact-page">
      {/* Background */}
      <div className="contact-background">
        <div className="contact-gradient" />
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="contact-particle"
            animate={{
              y: [0, -25, 0],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      <div className="contact-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="contact-header"
        >
          <div className="contact-badge">
            <MessageSquare size={16} />
            <span>Get in Touch</span>
          </div>
          <h1 className="contact-title">
            Let's <span className="contact-title-accent">Connect</span>
          </h1>
          <p className="contact-description">
            Have a question or feedback? We'd love to hear from you.
            Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="contact-content">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="contact-form-wrapper"
          >
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  <User size={18} />
                  <span>Your Name</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  <Mail size={18} />
                  <span>Email Address</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  <MessageSquare size={18} />
                  <span>Subject</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  <MessageSquare size={18} />
                  <span>Message</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more about your inquiry..."
                  className="form-textarea"
                  rows={5}
                  required
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="form-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="submit-spinner"
                    />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="contact-info"
          >
            <div className="info-cards">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="info-card"
                >
                  <div className="info-icon">
                    <info.icon size={24} />
                  </div>
                  <div className="info-content">
                    <span className="info-title">{info.title}</span>
                    {info.link ? (
                      <a href={info.link} className="info-value info-link">
                        {info.value}
                      </a>
                    ) : (
                      <span className="info-value">{info.value}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="social-section"
            >
              <h3 className="social-title">Follow Us</h3>
              <div className="social-links">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={22} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* FAQ Teaser */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="faq-teaser"
            >
              <CheckCircle size={24} className="faq-icon" />
              <div>
                <h4 className="faq-title">Need quick answers?</h4>
                <p className="faq-text">
                  Most questions are answered within 24 hours.
                  We're here to help!
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
