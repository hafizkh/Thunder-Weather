import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import bg from "../images/bg_pic.jpg";
import night from "../images/night_bg.jpg";

const WeatherCard = ({ cityData }) => {
  const [value, setValue] = useState(null);
  useEffect(() => {
    const apiKey = process.env.REACT_APP_API;
    const url = `https://dataservice.accuweather.com/currentconditions/v1/${cityData.Key}?apikey=${apiKey}`;

    axios.get(url).then((res) => {
      setValue(res.data[0]);
    });
  }, [cityData.Key]);

  return (
    <>
      {value && (
        <Card className="mt-3" style={{ border: "2px solid" }}>
          {value.IsDayTime === true ? (
            <Card.Img
              variant="top"
              src={bg}
              style={{ width: "auto", height: "auto" }}
            />
          ) : (
            <Card.Img
              variant="top"
              src={night}
              style={{ width: "auto", height: "auto" }}
            />
          )}
          <Card.Body>
            <Card.Title style={{ fontSize: "xx-large" }}>
              {cityData.EnglishName}, {cityData.Country.EnglishName}{" "}
            </Card.Title>
            <Card.Text style={{ fontSize: "xx-large" }}>
              <strong>
                Temp: {Math.ceil(value.Temperature.Metric.Value)} °C
              </strong>
            </Card.Text>
            <Card.Text style={{ fontSize: "x-large" }}>
              <strong>{value.WeatherText}</strong>
            </Card.Text>
            <Card.Text style={{ fontSize: "x-large" }}>
              <strong>
                Temp in Fahrenheit:{" "}
                {Math.ceil(value.Temperature.Imperial.Value)} °F
              </strong>
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </>
  );
};

export default WeatherCard;
