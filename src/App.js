import React, { useState } from 'react';
import axios from 'axios';
import NavBar from './components/NavBar'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import NotFound from './components/NotFound'
import Weather from './components/Weather'
import WeatherCard from './components/WeatherCard';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {

  const [search, setSearch] = useState('');
  const [cityData, setCityData]=useState(null);

const apiKey = process.env.REACT_APP_API
  const getCityInfo = (event) =>{
    event.preventDefault();
    axios.get(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${search}`)
    .then((res)=>{
      setCityData(res.data[0]);
      setSearch('');
    }).catch(e=>alert(e));
  }

  return (
    <>
    <div className='App'>
    <Router>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/home' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/weather' element={<Weather cityData= {cityData} search={search}
        setSearch={setSearch} getCityInfo={getCityInfo} />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/weatherCard' element={<WeatherCard cityData={cityData} setCityData={setCityData} />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>

    </Router>
  </div>
  </>

  );
}

export default App;