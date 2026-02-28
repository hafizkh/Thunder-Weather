import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CloudLightning,
  Menu,
  X,
  Home,
  Cloud,
  Info,
  Mail
} from 'lucide-react';
import './NavBar.css';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/weather', label: 'Weather', icon: Cloud },
    { path: '/about', label: 'About', icon: Info },
    { path: '/contact', label: 'Contact', icon: Mail },
  ];

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/' || location.pathname === '/home';
    }
    return location.pathname === path;
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}
      >
        <div className="navbar-container">
          {/* Logo */}
          <Link to="/" className="navbar-logo">
            <motion.div
              whileHover={{ rotate: 15, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="navbar-logo-icon"
            >
              <CloudLightning size={32} />
            </motion.div>
            <span className="navbar-logo-text">
              Thunder<span className="navbar-logo-accent">Weather</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="navbar-desktop-nav">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`navbar-link ${isActive(link.path) ? 'navbar-link-active' : ''}`}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="navbar-link-inner"
                >
                  <link.icon size={18} />
                  <span>{link.label}</span>
                  {isActive(link.path) && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="navbar-active-indicator"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.div>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <Link to="/weather" className="navbar-cta-link">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="navbar-cta-button"
            >
              <Cloud size={18} />
              Get Weather
            </motion.button>
          </Link>

          {/* Mobile Menu Toggle */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="navbar-mobile-toggle"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="mobile-menu-overlay"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="mobile-menu"
            >
              <div className="mobile-menu-header">
                <CloudLightning size={28} style={{ color: '#667eea' }} />
                <span className="mobile-menu-title">Menu</span>
              </div>

              <div className="mobile-menu-links">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      className={`mobile-nav-link ${isActive(link.path) ? 'mobile-nav-link-active' : ''}`}
                    >
                      <link.icon size={22} />
                      <span>{link.label}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mobile-menu-footer"
              >
                <Link to="/weather" onClick={() => setIsMobileMenuOpen(false)}>
                  <button className="mobile-cta-button">
                    <Cloud size={20} />
                    Check Weather Now
                  </button>
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;
