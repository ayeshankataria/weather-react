import React, { useState } from "react";
import axios from "axios";
import "./App.css";

export default function Weather() {
  const [city, setCity] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function showForecast(response) {
    setLoaded(true);
    let icon = `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`;
    let searchCity = (
      <div>
        <ul>
          <li>{city}</li>
          <li>Temperature: {Math.round(response.data.main.temp)}°C</li>
          <li>Description: {response.data.weather[0].main}</li>
          <li>Humidity: {response.data.main.humidity}%</li>
          <li>Wind: {response.data.wind.speed}km/h</li>
          <img src={icon} alt={response.data.weather[0].description} />
        </ul>
      </div>
    );
    setForecast(searchCity);
    return setForecast;
  }

  function handleSearch(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=86f093aa43690ee890e5cd351bb4c53c&units=metric`;
    axios.get(url).then(showForecast);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <div className="weather-search">
      <form onSubmit={handleSearch}>
        <input
          type="search"
          placeholder="Search for a city"
          onChange={updateCity}
        />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
  if (loaded) {
    return (
      <div>
        {form}
        <br />
        {forecast}
      </div>
    );
  } else {
    return form;
  }
}
