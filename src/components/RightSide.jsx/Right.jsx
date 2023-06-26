import React, { useState } from "react";
import "./Right.css";
import { FaSearch } from "react-icons/fa";
import { formatToLocalTime} from "../../Service/Weather";

const Right = ({ weatherData, setQuery, units }) => {
  
  const [city, setCity] = useState("");

  if (!weatherData || !weatherData.currentWeather || !weatherData.forecast) {
    return null;
  }

  const { temp, details, dt, name, country } = weatherData.currentWeather;
  const { timezone } = weatherData.forecast;

  let imageSrc;
  switch (details) {
    case "Rain":
      imageSrc = "https://cdn-icons-png.flaticon.com/512/4006/4006133.png";
      break;
    case "Clouds":
      imageSrc =
        "https://cdn-icons-png.flaticon.com/512/5903/5903939.png";
      break;
    case "Drizzle":
      imageSrc = "https://cdn-icons-png.flaticon.com/512/4052/4052984.png";
      break;
    default:
      imageSrc =
        "https://cdn-icons-png.flaticon.com/512/1434/1434804.png";
      break;
  }

  const handleButtonClick = () => {
    if (city !== "") setQuery({ q: city });
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (city !== "") setQuery({ q: city });
    }
  };

  console.log(weatherData.currentWeather);
  return (
    <div className="right">
      <div className="search-area">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Search for places.."
          onKeyDown={handleKeyDown}
        />
        <div className="right-icon">
          <FaSearch onClick={handleButtonClick} />
        </div>
      </div>
      <div className="container">
        <div className="img-area">
          <img src={imageSrc} alt="" className="right-img" />
        </div>

        <div className="right-content">
          <h1 className="right-heading">{`${temp.toFixed()}°${
            units === "metric" ? "C" : "F"
          }`}</h1>
          <h2 className="right-subheading">{details}</h2>
          <h3 className="right-subheading">
            {formatToLocalTime(dt, timezone)}
          </h3>
        </div>
      </div>

      <div
        className="right-city"
        style={{
          backgroundImage: `url('https://source.unsplash.com/1600x900/?${name}')`,
        }}
      >
        <p>{`${name},${country}`}</p>
      </div>
    </div>
  );
};

export default Right;
