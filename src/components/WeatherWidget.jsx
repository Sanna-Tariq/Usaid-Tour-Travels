import React, { useState, useEffect } from "react";

const WeatherWidget = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showDetails, setShowDetails] = useState(false);

  const API_KEY = "586419298769b0c0abaffe5acfafcaf5";
  const units = "metric"; // Celsius

  const locations = [
    { name: "Srinagar", lat: 34.0837, lon: 74.7973 },
    { name: "Pahalgam", lat: 34.015, lon: 75.315 },
    { name: "Gulmarg", lat: 34.0486, lon: 74.3805 },
  ];

  useEffect(() => {
    Promise.all(
      locations.map((loc) =>
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${loc.lat}&lon=${loc.lon}&appid=${API_KEY}&units=${units}`
        ).then((res) => res.json())
      )
    )
      .then((data) => {
        const updatedData = data.map((w, i) => ({
          ...w,
          displayName: locations[i].name,
        }));
        setWeatherData(updatedData);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching weather:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-light">Loading weather...</p>;
  if (!weatherData.length)
    return <p className="text-light">Weather data not available.</p>;

  return (
    <div  >
      {/* Weather Icon Button */}
      <div
        className="weather-icon-btn p-2 rounded-circle shadow"
        style={{
          background: "rgba(255, 255, 255, 1)",
          cursor: "pointer",
          backdropFilter: "blur(5px)",
          width: "50px",
          height: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={() => setShowDetails(!showDetails)}
      >
        <i className="fas fa-cloud-sun text-warning fs-4"></i>
      </div>

      {/* Weather Details Sliding to Left */}
      <div
        className="weather-details position-absolute"
        style={{
          top: "0",
          right: "60px", // space between icon & details
          background: "rgba(0, 0, 0, 0.1)",
          padding: "10px",
          borderRadius: "10px",
          backdropFilter: "blur(10px)",
          transform: showDetails ? "translateX(0)" : "translateX(180%)",
          transition: "transform 0.6s ease-in-out",
          whiteSpace: "nowrap",
        }}
      >
        <div className="d-flex flex-column gap-2">
          {weatherData.map((weather, index) =>
            weather.cod === 200 ? (
              <div
                key={index}
                className="p-2 rounded text-center d-flex align-items-center gap-2"
                style={{ background: "rgba(255, 255, 255, 0.57)" }}
              >
                <h6 className="fs-6 mb-0">{weather.displayName}</h6>
                <img
                  src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                  alt={weather.weather[0].description}
                  style={{ width: "30px", height: "30px" }}
                />
                <span className="fs-6">{Math.round(weather.main.temp)}°C</span>
              </div>
            ) : (
              <div key={index} className="text-light">
                {locations[index].name}: N/A
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;
