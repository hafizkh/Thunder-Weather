import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';
import {
  Cloud,
  Sun,
  Moon,
  CloudRain,
  CloudSnow,
  CloudLightning,
  CloudFog,
  Wind,
  Thermometer,
  MapPin,
  Search,
  Zap,
  Shield,
  Globe,
  ArrowRight,
  Sparkles,
  Loader2,
  Calendar,
  Droplets
} from 'lucide-react';
import './Home.css';

const Home = () => {
  const [locationWeather, setLocationWeather] = useState(null);
  const [dailyForecast, setDailyForecast] = useState(null);
  const [loading, setLoading] = useState(true);
  const [locationError, setLocationError] = useState(null);

  const apiKey = process.env.REACT_APP_API;

  useEffect(() => {
    const getUserLocationWeather = () => {
      if (!navigator.geolocation) {
        setLocationError('Geolocation is not supported');
        setLoading(false);
        return;
      }

      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            // Get location key from coordinates
            const locationResponse = await axios.get(
              `https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${apiKey}&q=${latitude},${longitude}`
            );

            if (locationResponse.data) {
              const locationData = locationResponse.data;

              // Get current weather
              const weatherResponse = await axios.get(
                `https://dataservice.accuweather.com/currentconditions/v1/${locationData.Key}?apikey=${apiKey}&details=true`
              );

              // Get 5-day daily forecast
              const forecastResponse = await axios.get(
                `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationData.Key}?apikey=${apiKey}&metric=true`
              );

              if (weatherResponse.data && weatherResponse.data.length > 0) {
                setLocationWeather({
                  city: locationData.LocalizedName,
                  country: locationData.Country?.LocalizedName,
                  weather: weatherResponse.data[0],
                  locationKey: locationData.Key
                });
              }

              if (forecastResponse.data && forecastResponse.data.DailyForecasts) {
                setDailyForecast(forecastResponse.data.DailyForecasts);
              }
            }
          } catch (error) {
            console.error('Weather API error:', error);
            setLocationError('Unable to fetch weather data');
          } finally {
            setLoading(false);
          }
        },
        (error) => {
          console.error('Geolocation error:', error);
          setLocationError('Location access denied');
          setLoading(false);
        },
        { timeout: 10000, enableHighAccuracy: false }
      );
    };

    getUserLocationWeather();
  }, [apiKey]);

  const getWeatherIcon = (condition, isDayTime, size = 64) => {
    const iconProps = { size, className: size === 64 ? "hero-card-icon" : "forecast-icon" };

    if (!condition) return <Sun {...iconProps} />;

    const lowerCondition = condition.toLowerCase();

    if (lowerCondition.includes('thunder') || lowerCondition.includes('storm')) {
      return <CloudLightning {...iconProps} />;
    }
    if (lowerCondition.includes('rain') || lowerCondition.includes('shower')) {
      return <CloudRain {...iconProps} />;
    }
    if (lowerCondition.includes('snow') || lowerCondition.includes('ice') || lowerCondition.includes('flurries')) {
      return <CloudSnow {...iconProps} />;
    }
    if (lowerCondition.includes('fog') || lowerCondition.includes('mist') || lowerCondition.includes('haze')) {
      return <CloudFog {...iconProps} />;
    }
    if (lowerCondition.includes('cloud') || lowerCondition.includes('overcast')) {
      return <Cloud {...iconProps} />;
    }
    if (lowerCondition.includes('sun') || lowerCondition.includes('clear')) {
      return isDayTime !== false ? <Sun {...iconProps} /> : <Moon {...iconProps} />;
    }

    return isDayTime !== false ? <Sun {...iconProps} /> : <Moon {...iconProps} />;
  };

  const getDayName = (dateString, index) => {
    if (index === 0) return 'Today';
    if (index === 1) return 'Tomorrow';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { weekday: 'short' });
  };

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
            {weatherTypes.map((type) => (
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

        {/* Hero Visual - Live Weather Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hero-visual"
        >
          <div className="hero-card">
            {loading ? (
              <div className="hero-card-loading">
                <Loader2 size={40} className="spinner" />
                <span>Getting your location...</span>
              </div>
            ) : locationWeather ? (
              <>
                <div className="hero-card-header">
                  <MapPin size={18} />
                  <span>{locationWeather.city}, {locationWeather.country}</span>
                </div>
                <div className="hero-card-temp">
                  {getWeatherIcon(locationWeather.weather.WeatherText, locationWeather.weather.IsDayTime)}
                  <div className="hero-card-temp-value">
                    <span className="temp-number">
                      {Math.round(locationWeather.weather.Temperature?.Metric?.Value)}
                    </span>
                    <span className="temp-unit">°C</span>
                  </div>
                </div>
                <div className="hero-card-condition">{locationWeather.weather.WeatherText}</div>
                <div className="hero-card-details">
                  <div className="detail-item">
                    <Wind size={16} />
                    <span>{locationWeather.weather.Wind?.Speed?.Metric?.Value || 0} km/h</span>
                  </div>
                  <div className="detail-item">
                    <Thermometer size={16} />
                    <span>Feels {Math.round(locationWeather.weather.RealFeelTemperature?.Metric?.Value || locationWeather.weather.Temperature?.Metric?.Value)}°</span>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="hero-card-header">
                  <MapPin size={18} />
                  <span>{locationError || 'Enable location'}</span>
                </div>
                <div className="hero-card-temp">
                  <Sun size={64} className="hero-card-icon" />
                  <div className="hero-card-temp-value">
                    <span className="temp-number">--</span>
                    <span className="temp-unit">°C</span>
                  </div>
                </div>
                <div className="hero-card-condition">
                  <Link to="/weather" style={{ color: 'white', textDecoration: 'underline' }}>
                    Search a city
                  </Link>
                </div>
                <div className="hero-card-details">
                  <div className="detail-item">
                    <Wind size={16} />
                    <span>-- km/h</span>
                  </div>
                  <div className="detail-item">
                    <Thermometer size={16} />
                    <span>Feels --°</span>
                  </div>
                </div>
              </>
            )}
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

      {/* 5-Day Forecast Section */}
      {dailyForecast && (
        <section className="forecast-section">
          <div className="forecast-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="forecast-header"
            >
              <Calendar size={28} className="forecast-header-icon" />
              <div>
                <h2 className="forecast-title">5-Day Forecast</h2>
                <p className="forecast-subtitle">
                  {locationWeather ? `${locationWeather.city}, ${locationWeather.country}` : 'Your Location'}
                </p>
              </div>
            </motion.div>

            <div className="forecast-grid">
              {dailyForecast.map((day, index) => (
                <motion.div
                  key={day.Date}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="forecast-card"
                >
                  <div className="forecast-day">{getDayName(day.Date, index)}</div>
                  <div className="forecast-date">
                    {new Date(day.Date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  </div>
                  <div className="forecast-icon-wrapper">
                    {getWeatherIcon(day.Day?.IconPhrase, true, 48)}
                  </div>
                  <div className="forecast-temps">
                    <span className="forecast-high">{Math.round(day.Temperature?.Maximum?.Value)}°</span>
                    <span className="forecast-low">{Math.round(day.Temperature?.Minimum?.Value)}°</span>
                  </div>
                  <div className="forecast-condition">{day.Day?.IconPhrase}</div>
                  {day.Day?.PrecipitationProbability > 0 && (
                    <div className="forecast-precip">
                      <Droplets size={14} />
                      <span>{day.Day?.PrecipitationProbability}%</span>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

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
