import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  CloudOff,
  Home,
  Search,
  ArrowLeft,
  Cloud,
  CloudRain
} from 'lucide-react';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="notfound-page">
      {/* Background */}
      <div className="notfound-background">
        <div className="notfound-gradient" />
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="notfound-particle"
            animate={{
              y: [0, -30, 0],
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

      <div className="notfound-container">
        {/* Floating clouds */}
        <motion.div
          animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="notfound-cloud notfound-cloud-1"
        >
          <Cloud size={60} />
        </motion.div>
        <motion.div
          animate={{ y: [0, 10, 0], x: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="notfound-cloud notfound-cloud-2"
        >
          <CloudRain size={48} />
        </motion.div>
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="notfound-cloud notfound-cloud-3"
        >
          <Cloud size={40} />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="notfound-content"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="notfound-icon"
          >
            <CloudOff size={64} />
          </motion.div>

          {/* 404 */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="notfound-title"
          >
            <span className="notfound-404">404</span>
          </motion.h1>

          {/* Message */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="notfound-subtitle"
          >
            Weather Not Found
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="notfound-description"
          >
            Looks like this page got lost in the storm.
            Don't worry, we'll help you find your way back!
          </motion.p>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="notfound-actions"
          >
            <Link to="/" className="notfound-btn-primary">
              <Home size={20} />
              <span>Go Home</span>
            </Link>
            <Link to="/weather" className="notfound-btn-secondary">
              <Search size={20} />
              <span>Check Weather</span>
            </Link>
          </motion.div>

          {/* Back link */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            onClick={() => window.history.back()}
            className="notfound-back"
          >
            <ArrowLeft size={16} />
            <span>Go back to previous page</span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
