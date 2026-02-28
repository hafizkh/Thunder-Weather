import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Cloud,
  Zap,
  Globe,
  Shield,
  Code,
  Heart,
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Sparkles,
  Target,
  Users,
  Award
} from 'lucide-react';
import './About.css';

const About = () => {
  const stats = [
    { value: '200+', label: 'Cities Covered', icon: Globe },
    { value: '99.9%', label: 'Uptime', icon: Shield },
    { value: '50K+', label: 'Daily Users', icon: Users },
    { value: '4.9', label: 'User Rating', icon: Award }
  ];

  const values = [
    {
      icon: Target,
      title: 'Accuracy First',
      description: 'We prioritize delivering the most accurate weather data by partnering with AccuWeather.'
    },
    {
      icon: Sparkles,
      title: 'Beautiful Design',
      description: 'Weather information should be easy to understand and visually stunning.'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Get instant weather updates with our optimized, real-time data fetching.'
    },
    {
      icon: Heart,
      title: 'User Focused',
      description: 'Every feature is designed with our users needs and experience in mind.'
    }
  ];

  const team = [
    {
      name: 'Hafiz Javid',
      role: 'Full Stack Developer',
      description: 'Passionate developer dedicated to creating the best weather experience.',
      links: {
        github: 'https://github.com/hafizkh',
        linkedin: 'https://www.linkedin.com/in/hafiz-javid/',
        email: 'mailto:hello@thunderweather.com'
      }
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-background">
          <div className="about-hero-gradient" />
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="about-particle"
              animate={{
                y: [0, -20, 0],
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

        <div className="about-hero-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="about-badge"
          >
            <Cloud size={16} />
            <span>About Us</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="about-title"
          >
            Weather Forecasting,
            <span className="about-title-accent"> Reimagined</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="about-description"
          >
            Thunder Weather brings you accurate, real-time weather updates with a beautiful,
            intuitive interface. We believe checking the weather should be a delightful experience.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="about-stats">
        <div className="about-container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="stat-card"
              >
                <div className="stat-icon">
                  <stat.icon size={24} />
                </div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="about-mission">
        <div className="about-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mission-content"
          >
            <h2 className="mission-title">Our Mission</h2>
            <p className="mission-text">
              We're on a mission to make weather information accessible, beautiful, and reliable
              for everyone. By combining cutting-edge technology with thoughtful design, we deliver
              weather forecasts that help you plan your day with confidence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-values">
        <div className="about-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="values-header"
          >
            <h2 className="values-title">What We Stand For</h2>
            <p className="values-subtitle">The principles that guide everything we do</p>
          </motion.div>

          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="value-card"
              >
                <div className="value-icon">
                  <value.icon size={28} />
                </div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="about-tech">
        <div className="about-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="tech-content"
          >
            <div className="tech-icon">
              <Code size={40} />
            </div>
            <h2 className="tech-title">Built with Modern Technology</h2>
            <p className="tech-description">
              Thunder Weather is built using React, Framer Motion for smooth animations,
              and AccuWeather API for reliable weather data. We prioritize performance,
              accessibility, and a delightful user experience in every line of code.
            </p>
            <div className="tech-stack">
              <span className="tech-tag">React</span>
              <span className="tech-tag">Framer Motion</span>
              <span className="tech-tag">AccuWeather API</span>
              <span className="tech-tag">Modern CSS</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-team">
        <div className="about-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="team-header"
          >
            <h2 className="team-title">Meet the Team</h2>
            <p className="team-subtitle">The people behind Thunder Weather</p>
          </motion.div>

          <div className="team-grid">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="team-card"
              >
                <div className="team-avatar">
                  <Zap size={40} />
                </div>
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-description">{member.description}</p>
                <div className="team-links">
                  <a href={member.links.github} className="team-link" target="_blank" rel="noopener noreferrer">
                    <Github size={20} />
                  </a>
                  <a href={member.links.linkedin} className="team-link" target="_blank" rel="noopener noreferrer">
                    <Linkedin size={20} />
                  </a>
                  <a href={member.links.email} className="team-link">
                    <Mail size={20} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="about-cta-container"
        >
          <h2 className="about-cta-title">Ready to Check the Weather?</h2>
          <p className="about-cta-description">
            Experience beautiful weather forecasting today
          </p>
          <Link to="/weather" className="about-cta-button">
            <span>Get Started</span>
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
