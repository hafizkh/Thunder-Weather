import React from "react";
import { Form, Button } from "react-bootstrap";
import WeatherCard from "./WeatherCard";

const Weather = ({ search, setSearch, getCityInfo, cityData }) => {
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div style={{ width: "25rem" }} className="container">
      <h2 className="mt-2">Thunder Weather Client</h2>

      <Form
        style={{ height: "2.4rem" }}
        className="d-flex mt-2"
        onSubmit={getCityInfo}
      >
        <Form.Control
          type="search"
          placeholder="Search Weather By City"
          className="me-2"
          aria-label="Search"
          value={search}
          onChange={handleChange}
        />
        <Button className="btn-success" onClick={getCityInfo}>
          Search
        </Button>
      </Form>
      {cityData && (
        <div>
          <WeatherCard cityData={cityData} />
        </div>
      )}
    </div>
  );
};

export default Weather;
