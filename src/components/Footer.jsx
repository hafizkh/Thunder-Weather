import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  CloudLightning,
  Github,
  Linkedin,
  Twitter,
  Mail,
  Heart,
  ArrowUp
} from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    product: [
      { label: 'Weather', path: '/weather' },
      { label: 'Features', path: '/#features' },
      { label: 'API', path: '/about' }
    ],
    company: [
      { label: 'About Us', path: '/about' },
      { label: 'Contact', path: '/contact' },
      { label: 'Careers', path: '/about' }
    ],
    resources: [
      { label: 'Documentation', path: '/about' },
      { label: 'Help Center', path: '/contact' },
      { label: 'Privacy', path: '/about' }
    ]
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/hafizkh', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/hafiz-javid/', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Mail, href: 'mailto:hello@thunderweather.com', label: 'Email' }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Top Section */}
        <div className="footer-top">
          {/* Brand */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <div className="footer-logo-icon">
                <CloudLightning size={24} />
              </div>
              <span className="footer-logo-text">
                Thunder<span className="footer-logo-accent">Weather</span>
              </span>
            </Link>
            <p className="footer-tagline">
              Beautiful weather forecasts at your fingertips.
              Get real-time updates with stunning visuals.
            </p>
            <div className="footer-social">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="footer-links">
            <div className="footer-links-column">
              <h4 className="footer-links-title">Product</h4>
              <ul className="footer-links-list">
                {footerLinks.product.map((link) => (
                  <li key={link.label}>
                    <Link to={link.path} className="footer-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-links-column">
              <h4 className="footer-links-title">Company</h4>
              <ul className="footer-links-list">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link to={link.path} className="footer-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-links-column">
              <h4 className="footer-links-title">Resources</h4>
              <ul className="footer-links-list">
                {footerLinks.resources.map((link) => (
                  <li key={link.label}>
                    <Link to={link.path} className="footer-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {year} Thunder Weather. Made with{' '}
            <Heart size={14} className="footer-heart" /> by the Thunder Team
          </p>

          <motion.button
            onClick={scrollToTop}
            className="footer-scroll-top"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
