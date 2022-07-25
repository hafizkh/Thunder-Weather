import React, { useState } from 'react';
import './App.css';
import Weather from './components/Weather';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import WeatherCard from './components/WeatherCard';
import About from './components/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';


function App() {
  const [city, setCity] = useState('')
  const [cityData, setCityData] = useState()

  // To get the Key number of the city
  const getCityInfo = (e) => {
    e.preventDefault()
    const apiKey = process.env.REACT_APP_API
    const url = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${city}`
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data[0].Key);

        // To get the Weather information of the city
        if (data[0].Key) {
          const url = `http://dataservice.accuweather.com/currentconditions/v1/${data[0].Key}?apikey=${apiKey}`
          axios.get(url)
            .then((response) => {
              console.log(response.data);
            }).catch((e) => alert(e))
        }
      })
    setCity('')
  }

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/weather' element={<Weather city={city}
            setCity={setCity} getCityInfo={getCityInfo} />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/weatherCard' element={<WeatherCard cityData={cityData} setCityData={setCityData} />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>

      </Router>

    </div>
  );
}

export default App;