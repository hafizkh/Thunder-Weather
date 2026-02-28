import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Cloud,
  Sun,
  CloudRain,
  Wind,
  Thermometer,
  MapPin,
  Search,
  Zap,
  Shield,
  Globe,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import './Home.css';

const Home = () => {
  const features = [
    {
      icon: Search,
      title: 'Instant Search',
      description: 'Find weather for any city worldwide in milliseconds',
      color: '#667eea'
    },
    {
      icon: Thermometer,
      title: 'Real-time Data',
      description: 'Get accurate, up-to-the-minute weather updates',
      color: '#f093fb'
    },
    {
      icon: Globe,
      title: 'Global Coverage',
      description: 'Access weather data for locations across the globe',
      color: '#4facfe'
    },
    {
      icon: Shield,
      title: 'Reliable & Fast',
      description: 'Powered by AccuWeather for trusted forecasts',
      color: '#43e97b'
    }
  ];

  const weatherTypes = [
    { icon: Sun, label: 'Sunny', color: '#ffd93d' },
    { icon: Cloud, label: 'Cloudy', color: '#a8d8ea' },
    { icon: CloudRain, label: 'Rainy', color: '#6bcbff' },
    { icon: Wind, label: 'Windy', color: '#95e1d3' }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="hero-gradient" />
          <div className="hero-particles">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="particle"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  y: [-20, -100],
                  x: Math.random() * 20 - 10
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${60 + Math.random() * 40}%`
                }}
              />
            ))}
          </div>
        </div>

        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-badge"
          >
            <Sparkles size={16} />
            <span>Beautiful Weather Forecasts</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hero-title"
          >
            Weather at Your
            <span className="hero-title-accent"> Fingertips</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hero-description"
          >
            Experience weather forecasting like never before. Get instant, accurate
            updates for any location worldwide with our stunning, intuitive interface.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hero-actions"
          >
            <Link to="/weather" className="hero-cta-primary">
              <Search size={20} />
              <span>Check Weather</span>
              <ArrowRight size={18} />
            </Link>
            <Link to="/about" className="hero-cta-secondary">
              Learn More
            </Link>
          </motion.div>

          {/* Weather Type Icons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hero-weather-types"
          >
            {weatherTypes.map((type, index) => (
              <motion.div
                key={type.label}
                className="weather-type-item"
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div
                  className="weather-type-icon"
                  style={{ background: `${type.color}20`, color: type.color }}
                >
                  <type.icon size={24} />
                </div>
                <span>{type.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Hero Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hero-visual"
        >
          <div className="hero-card">
            <div className="hero-card-header">
              <MapPin size={18} />
              <span>Helsinki, Finland</span>
            </div>
            <div className="hero-card-temp">
              <Sun size={64} className="hero-card-icon" />
              <div className="hero-card-temp-value">
                <span className="temp-number">24</span>
                <span className="temp-unit">°C</span>
              </div>
            </div>
            <div className="hero-card-condition">Sunny</div>
            <div className="hero-card-details">
              <div className="detail-item">
                <Wind size={16} />
                <span>12 km/h</span>
              </div>
              <div className="detail-item">
                <Thermometer size={16} />
                <span>Feels 26°</span>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="floating-element floating-cloud"
          >
            <Cloud size={40} />
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="floating-element floating-sun"
          >
            <Sun size={32} />
          </motion.div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="floating-element floating-rain"
          >
            <CloudRain size={28} />
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="features-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="features-header"
          >
            <h2 className="features-title">
              Why Choose <span className="text-gradient">Thunder Weather</span>?
            </h2>
            <p className="features-subtitle">
              Everything you need to stay ahead of the weather
            </p>
          </motion.div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="feature-card"
              >
                <div
                  className="feature-icon"
                  style={{
                    background: `linear-gradient(135deg, ${feature.color}20, ${feature.color}10)`,
                    color: feature.color
                  }}
                >
                  <feature.icon size={28} />
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="cta-container"
        >
          <div className="cta-content">
            <Zap className="cta-icon" size={48} />
            <h2 className="cta-title">Ready to Check the Weather?</h2>
            <p className="cta-description">
              Get instant weather updates for any city in the world
            </p>
            <Link to="/weather" className="cta-button">
              <Search size={20} />
              <span>Start Exploring</span>
              <ArrowRight size={18} />
            </Link>
          </div>
          <div className="cta-decoration">
            <div className="cta-circle cta-circle-1" />
            <div className="cta-circle cta-circle-2" />
            <div className="cta-circle cta-circle-3" />
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
