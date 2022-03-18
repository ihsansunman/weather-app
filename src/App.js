import React, { useState } from "react";
import WeatherList from "./components/WeatherList";
import "./App.scss";
import SearchBar from "./components/SearchBar";
import Time from "./components/CurrentTime";

function App() {
  let inputValue = "";
  const WEATHER_API = "bce7dbbaafc4400daab123331221803";
  const [weatherData, setWeatherData] = useState([]);

  async function showWeatherDays() {
    const data = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API}&q=${inputValue}&days=7&aqi=no&alerts=no`
    );
    const result = await data.json();
    setWeatherData(result.forecast.forecastday);
  }

  function searchCityItem(event) {
    inputValue = event.target.value;
  }

  return (
    <div className="weather-app">
      <h1 className="head-name">
        Weather APP{" "}
        <h1 className="time">
          <Time />
        </h1>
      </h1>

      <div className="row mb-5">
        <SearchBar showList={showWeatherDays} searchCity={searchCityItem} />
      </div>

      <div className="row mb-5">
        {weatherData.map((item, index) => (
          <WeatherList
            key={index}
            date={item.date}
            iconImg={item.day.condition.icon}
            text={item.day.condition.text}
            minTemp={item.day.mintemp_c}
            maxTemp={item.day.maxtemp_c}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
