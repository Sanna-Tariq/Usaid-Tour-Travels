import React, { useState, useEffect } from "react";

const WeatherWidget = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_KEY = "586419298769b0c0abaffe5acfafcaf5";
  const lat = 34.0837; // Srinagar latitude
  const lon = 74.7973; // Srinagar longitude
  const units = "metric"; // metric = Celsius, imperial = Fahrenheit

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=${units}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("Weather API response:", data); // Debug
        setWeather(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching weather:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-light">Loading weather...</p>;
  if (!weather || weather.cod !== 200)
    return <p className="text-light">Weather data not available.</p>;

  return (
    <div
      className="p-1 bg-transparent shadow  rounded shadow-sm text-center d-inline-flex justify-content-center gap-3 align-items-center flex-md-nowrap flex-wrap" style={{backdropFilter:'blur(10px)'}}

    >
      <h6 className=" fs-6">{weather.name}</h6>
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt={weather.weather[0].description}
        style={{ width: "30px", height: "30px" }}
      />
      <h4 className="mb-0 fs-6">{Math.round(weather.main.temp)}°C</h4>
      <small className="text-white text-nowrap text-capitalize">
        {weather.weather[0].description}
      </small>
    </div>
  );
};

export default WeatherWidget;