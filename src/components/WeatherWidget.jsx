// src/components/WeatherWidget.jsx
import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../store/weatherSlice";

export default function WeatherWidget() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.weather);

  useEffect(() => {
    dispatch(fetchWeather("Srinagar"));
  }, [dispatch]);

  if (loading) return <div className="card p-3 text-center">Loading...</div>;
  if (error) return <div className="card p-3 text-center">Error: {error}</div>;
  if (!data) return null;

  return (
    <div className="card text-center p-3 shadow-sm">
      <h6 className="mb-2">{data.name} Weather</h6>
      <img
        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt={data.weather[0].description}
        width="60"
      />
      <h4>{Math.round(data.main.temp)}°C</h4>
      <p className="mb-0 text-capitalize">{data.weather[0].description}</p>
    </div>
  );
}
