import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  MapPin,
  Thermometer,
  Wind,
  Droplets,
  Eye,
  Gauge,
  Sun,
  Moon,
  Cloud,
  CloudRain,
  CloudSnow,
  CloudLightning,
  CloudFog,
  Loader2,
  X,
  AlertCircle,
  Sunrise,
  Sunset,
  Calendar,
  CalendarDays
} from 'lucide-react';
import './Weather.css';

const Weather = ({
  search,
  setSearch,
  handleSearch,
  cityData,
  weatherData,
  forecastData,
  loading,
  error,
  clearWeather
}) => {

  const getWeatherIcon = (condition, isDayTime) => {
    const iconProps = { size: 80, className: "weather-main-icon" };

    if (!condition) return <Cloud {...iconProps} />;

    const lowerCondition = condition.toLowerCase();

    if (lowerCondition.includes('thunder') || lowerCondition.includes('storm')) {
      return <CloudLightning {...iconProps} />;
    }
    if (lowerCondition.includes('rain') || lowerCondition.includes('shower')) {
      return <CloudRain {...iconProps} />;
    }
    if (lowerCondition.includes('snow') || lowerCondition.includes('ice')) {
      return <CloudSnow {...iconProps} />;
    }
    if (lowerCondition.includes('fog') || lowerCondition.includes('mist') || lowerCondition.includes('haze')) {
      return <CloudFog {...iconProps} />;
    }
    if (lowerCondition.includes('cloud') || lowerCondition.includes('overcast')) {
      return <Cloud {...iconProps} />;
    }
    if (lowerCondition.includes('sun') || lowerCondition.includes('clear')) {
      return isDayTime ? <Sun {...iconProps} /> : <Moon {...iconProps} />;
    }

    return isDayTime ? <Sun {...iconProps} /> : <Moon {...iconProps} />;
  };

  const getForecastIcon = (condition, size = 40) => {
    const iconProps = { size, className: "forecast-weather-icon" };

    if (!condition) return <Cloud {...iconProps} />;

    const lowerCondition = condition.toLowerCase();

    if (lowerCondition.includes('thunder') || lowerCondition.includes('storm')) {
      return <CloudLightning {...iconProps} />;
    }
    if (lowerCondition.includes('rain') || lowerCondition.includes('shower')) {
      return <CloudRain {...iconProps} />;
    }
    if (lowerCondition.includes('snow') || lowerCondition.includes('ice')) {
      return <CloudSnow {...iconProps} />;
    }
    if (lowerCondition.includes('fog') || lowerCondition.includes('mist') || lowerCondition.includes('haze')) {
      return <CloudFog {...iconProps} />;
    }
    if (lowerCondition.includes('cloud') || lowerCondition.includes('overcast')) {
      return <Cloud {...iconProps} />;
    }

    return <Sun {...iconProps} />;
  };

  const getDayName = (dateString, index) => {
    if (index === 0) return 'Today';
    if (index === 1) return 'Tomorrow';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { weekday: 'short' });
  };

  const getWeatherGradient = (condition, isDayTime) => {
    if (!condition) return 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';

    const lowerCondition = condition.toLowerCase();

    if (lowerCondition.includes('thunder') || lowerCondition.includes('storm')) {
      return 'linear-gradient(135deg, #373b44 0%, #4286f4 100%)';
    }
    if (lowerCondition.includes('rain') || lowerCondition.includes('shower')) {
      return 'linear-gradient(135deg, #3a7bd5 0%, #3a6073 100%)';
    }
    if (lowerCondition.includes('snow') || lowerCondition.includes('ice')) {
      return 'linear-gradient(135deg, #e6dada 0%, #274046 100%)';
    }
    if (lowerCondition.includes('cloud') || lowerCondition.includes('overcast')) {
      return 'linear-gradient(135deg, #bdc3c7 0%, #2c3e50 100%)';
    }
    if (!isDayTime) {
      return 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)';
    }

    return 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)';
  };

  return (
    <div className="weather-page">
      {/* Background Animation */}
      <div className="weather-background">
        <div className="weather-bg-gradient" />
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="weather-bg-particle"
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
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

      <div className="weather-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="weather-header"
        >
          <h1 className="weather-title">Weather Search</h1>
          <p className="weather-subtitle">
            Enter any city name to get real-time weather updates
          </p>
        </motion.div>

        {/* Search Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          onSubmit={handleSearch}
          className="weather-search-form"
        >
          <div className="search-input-wrapper">
            <Search className="search-icon" size={22} />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for a city..."
              className="search-input"
              disabled={loading}
            />
            {search && (
              <button
                type="button"
                onClick={() => setSearch('')}
                className="search-clear"
              >
                <X size={18} />
              </button>
            )}
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="search-button"
            disabled={loading || !search.trim()}
          >
            {loading ? (
              <Loader2 className="spinner" size={22} />
            ) : (
              <>
                <Search size={20} />
                <span>Search</span>
              </>
            )}
          </motion.button>
        </motion.form>

        {/* Error Message */}
        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="weather-error"
            >
              <AlertCircle size={20} />
              <span>{error}</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Weather Result */}
        <AnimatePresence>
          {weatherData && cityData && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="weather-result"
            >
              {/* Main Weather Card */}
              <div
                className="weather-card-main"
                style={{ background: getWeatherGradient(weatherData.WeatherText, weatherData.IsDayTime) }}
              >
                <button onClick={clearWeather} className="weather-card-close">
                  <X size={20} />
                </button>

                <div className="weather-card-header">
                  <div className="weather-location">
                    <MapPin size={20} />
                    <span>{cityData.EnglishName}, {cityData.Country?.EnglishName}</span>
                  </div>
                  <div className="weather-time">
                    {weatherData.IsDayTime ? (
                      <><Sunrise size={16} /> Day</>
                    ) : (
                      <><Sunset size={16} /> Night</>
                    )}
                  </div>
                </div>

                <div className="weather-card-body">
                  <div className="weather-icon-wrapper">
                    {getWeatherIcon(weatherData.WeatherText, weatherData.IsDayTime)}
                  </div>
                  <div className="weather-temp-wrapper">
                    <span className="weather-temp">
                      {Math.round(weatherData.Temperature?.Metric?.Value)}
                    </span>
                    <span className="weather-temp-unit">°C</span>
                  </div>
                </div>

                <div className="weather-condition">
                  {weatherData.WeatherText}
                </div>

                <div className="weather-feels-like">
                  Feels like {Math.round(weatherData.RealFeelTemperature?.Metric?.Value || weatherData.Temperature?.Metric?.Value)}°C
                </div>
              </div>

              {/* Weather Details Grid */}
              <div className="weather-details-grid">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="weather-detail-card"
                >
                  <div className="detail-icon" style={{ background: 'rgba(79, 172, 254, 0.2)', color: '#4facfe' }}>
                    <Thermometer size={24} />
                  </div>
                  <div className="detail-info">
                    <span className="detail-label">Temperature</span>
                    <span className="detail-value">
                      {Math.round(weatherData.Temperature?.Imperial?.Value)}°F
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="weather-detail-card"
                >
                  <div className="detail-icon" style={{ background: 'rgba(67, 233, 123, 0.2)', color: '#43e97b' }}>
                    <Wind size={24} />
                  </div>
                  <div className="detail-info">
                    <span className="detail-label">Wind Speed</span>
                    <span className="detail-value">
                      {weatherData.Wind?.Speed?.Metric?.Value || 'N/A'} km/h
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="weather-detail-card"
                >
                  <div className="detail-icon" style={{ background: 'rgba(102, 126, 234, 0.2)', color: '#667eea' }}>
                    <Droplets size={24} />
                  </div>
                  <div className="detail-info">
                    <span className="detail-label">Humidity</span>
                    <span className="detail-value">
                      {weatherData.RelativeHumidity || 'N/A'}%
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="weather-detail-card"
                >
                  <div className="detail-icon" style={{ background: 'rgba(240, 147, 251, 0.2)', color: '#f093fb' }}>
                    <Eye size={24} />
                  </div>
                  <div className="detail-info">
                    <span className="detail-label">Visibility</span>
                    <span className="detail-value">
                      {weatherData.Visibility?.Metric?.Value || 'N/A'} km
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="weather-detail-card"
                >
                  <div className="detail-icon" style={{ background: 'rgba(255, 217, 61, 0.2)', color: '#ffd93d' }}>
                    <Gauge size={24} />
                  </div>
                  <div className="detail-info">
                    <span className="detail-label">Pressure</span>
                    <span className="detail-value">
                      {weatherData.Pressure?.Metric?.Value || 'N/A'} mb
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="weather-detail-card"
                >
                  <div className="detail-icon" style={{ background: 'rgba(255, 107, 107, 0.2)', color: '#ff6b6b' }}>
                    <Sun size={24} />
                  </div>
                  <div className="detail-info">
                    <span className="detail-label">UV Index</span>
                    <span className="detail-value">
                      {weatherData.UVIndex || 'N/A'}
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* 5-Day Forecast Section */}
              {forecastData && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="weather-forecast-section"
                >
                  <div className="forecast-section-header">
                    <Calendar size={24} />
                    <h3>5-Day Forecast</h3>
                  </div>

                  <div className="forecast-cards-grid">
                    {forecastData.map((day, index) => (
                      <motion.div
                        key={day.Date}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        whileHover={{ y: -5, scale: 1.02 }}
                        className={`forecast-day-card ${index === 0 ? 'forecast-today' : ''}`}
                      >
                        <div className="forecast-day-name">{getDayName(day.Date, index)}</div>
                        <div className="forecast-day-date">
                          {new Date(day.Date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                        </div>
                        <div className="forecast-day-icon">
                          {getForecastIcon(day.Day?.IconPhrase)}
                        </div>
                        <div className="forecast-day-temps">
                          <span className="forecast-temp-high">{Math.round(day.Temperature?.Maximum?.Value)}°</span>
                          <span className="forecast-temp-low">{Math.round(day.Temperature?.Minimum?.Value)}°</span>
                        </div>
                        <div className="forecast-day-condition">{day.Day?.IconPhrase}</div>
                        {day.Day?.PrecipitationProbability > 0 && (
                          <div className="forecast-day-precip">
                            <Droplets size={14} />
                            <span>{day.Day?.PrecipitationProbability}%</span>
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Monthly Calendar Overview */}
              {forecastData && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="weather-monthly-section"
                >
                  <div className="monthly-section-header">
                    <CalendarDays size={24} />
                    <h3>Monthly Overview</h3>
                  </div>

                  <div className="monthly-calendar">
                    <div className="calendar-header">
                      <span>{new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
                    </div>
                    <div className="calendar-weekdays">
                      {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                        <div key={day} className="calendar-weekday">{day}</div>
                      ))}
                    </div>
                    <div className="calendar-days">
                      {(() => {
                        const now = new Date();
                        const firstDay = new Date(now.getFullYear(), now.getMonth(), 1);
                        const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0);
                        const startPadding = firstDay.getDay();
                        const days = [];

                        // Empty cells for padding
                        for (let i = 0; i < startPadding; i++) {
                          days.push(<div key={`empty-${i}`} className="calendar-day empty" />);
                        }

                        // Days of the month
                        for (let d = 1; d <= lastDay.getDate(); d++) {
                          const isToday = d === now.getDate();
                          const forecastDay = forecastData.find(f => {
                            const fDate = new Date(f.Date);
                            return fDate.getDate() === d && fDate.getMonth() === now.getMonth();
                          });

                          days.push(
                            <div
                              key={d}
                              className={`calendar-day ${isToday ? 'today' : ''} ${forecastDay ? 'has-forecast' : ''}`}
                            >
                              <span className="day-number">{d}</span>
                              {forecastDay && (
                                <div className="day-weather">
                                  {getForecastIcon(forecastDay.Day?.IconPhrase, 16)}
                                  <span className="day-temp">{Math.round(forecastDay.Temperature?.Maximum?.Value)}°</span>
                                </div>
                              )}
                            </div>
                          );
                        }

                        return days;
                      })()}
                    </div>
                    <div className="calendar-legend">
                      <div className="legend-item">
                        <div className="legend-dot today-dot" />
                        <span>Today</span>
                      </div>
                      <div className="legend-item">
                        <div className="legend-dot forecast-dot" />
                        <span>Forecast Available</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Empty State */}
        {!weatherData && !loading && !error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="weather-empty-state"
          >
            <div className="empty-state-icon">
              <Cloud size={64} />
            </div>
            <h3>Search for Weather</h3>
            <p>Enter a city name above to get current weather conditions</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Weather;
