import React, { useState, useCallback } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AnimatePresence } from "framer-motion";

// Components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Weather from "./pages/Weather";
import NotFound from "./pages/NotFound";

function App() {
  const [search, setSearch] = useState("");
  const [cityData, setCityData] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiKey = process.env.REACT_APP_API;

  const getCityInfo = useCallback(async (searchTerm) => {
    if (!searchTerm.trim()) return;

    setLoading(true);
    setError(null);

    try {
      // Get city data
      const cityResponse = await axios.get(
        `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${searchTerm}`
      );

      if (cityResponse.data && cityResponse.data.length > 0) {
        const city = cityResponse.data[0];
        setCityData(city);

        // Get weather data
        const weatherResponse = await axios.get(
          `https://dataservice.accuweather.com/currentconditions/v1/${city.Key}?apikey=${apiKey}&details=true`
        );

        if (weatherResponse.data && weatherResponse.data.length > 0) {
          setWeatherData(weatherResponse.data[0]);
        }
      } else {
        setError("City not found. Please try a different search.");
      }
    } catch (err) {
      console.error("API Error:", err);
      if (err.response) {
        setError(`Error: ${err.response.data?.Message || "Failed to fetch weather data"}`);
      } else if (err.request) {
        setError("Network error. Please check your connection.");
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  }, [apiKey]);

  const handleSearch = (e) => {
    e.preventDefault();
    getCityInfo(search);
  };

  const clearWeather = () => {
    setCityData(null);
    setWeatherData(null);
    setSearch("");
    setError(null);
  };

  return (
    <Router>
      <div className="app">
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 3000,
            style: {
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(20px)',
              color: '#fff',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '12px',
              padding: '16px 24px',
            },
            success: {
              iconTheme: {
                primary: '#4ade80',
                secondary: '#fff',
              },
            },
            error: {
              iconTheme: {
                primary: '#f87171',
                secondary: '#fff',
              },
            },
          }}
        />

        <NavBar />

        <main style={{ flex: 1 }}>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route
                path="/weather"
                element={
                  <Weather
                    search={search}
                    setSearch={setSearch}
                    handleSearch={handleSearch}
                    cityData={cityData}
                    weatherData={weatherData}
                    loading={loading}
                    error={error}
                    clearWeather={clearWeather}
                  />
                }
              />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
