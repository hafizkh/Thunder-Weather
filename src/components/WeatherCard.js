import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import bg from '../images/bg_pic.jpg'


const WeatherCard = ({ cityData }) => {

  const [data, setData] = useState(null);

  useEffect(() => {
    const apiKey = process.env.REACT_APP_API
    const url = `http://dataservice.accuweather.com/currentconditions/v1/${cityData.Key}?apikey=${apiKey}`

    axios.get(url)
      .then((res) => {
        setData(res.data[0]);
      });
  }, [cityData.Key]);

  return (
    <>
    {data &&(

      <Card style={{ borderRadius: '1rem', height: '20rem' }} className= 'mt-3'>
        <Card.Img variant="top" src={bg} style={{width: 'auto', height: 'auto'}} />
        <Card.Body>
          <Card.Title>{cityData.EnglishName}, {cityData.Country.EnglishName} </Card.Title>
          <Card.Text><strong>{Math.ceil(data.Temperature.Metric.Value)} °C</strong></Card.Text>
          <Card.Text><strong>{data.WeatherText}</strong></Card.Text>
          
        </Card.Body>
      </Card>
    )
  }
        
    </>
  );
};

export default WeatherCard;