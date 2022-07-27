import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import bg from '../images/bg_pic.jpg'
import night from '../images/night_bg.jpg'


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

      <Card className= 'mt-3'>
        {data.IsDayTime===true?<Card.Img variant="top" src={bg} style={{width: 'auto', height: 'auto'}} />
        :<Card.Img variant="top" src={night} style={{width: 'auto', height: 'auto'}} />}
        <Card.Body style={{border: '2px solid'}}>
          <Card.Title style={{fontSize: 'xx-large'}}>{cityData.EnglishName}, {cityData.Country.EnglishName} </Card.Title>
          <Card.Text style={{fontSize: 'xx-large'}} ><strong>Temp: {Math.ceil(data.Temperature.Metric.Value)} °C</strong></Card.Text>
          <Card.Text style={{fontSize: 'x-large'}}><strong>{data.WeatherText}</strong></Card.Text>
          
        </Card.Body>
      </Card>
    )
  }
        
    </>
  );
};

export default WeatherCard;