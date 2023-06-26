import React from "react";
import "./HighlightPanel.css";
import HighlightCard from "./UI/HighlightCard";
import Rise from "./UI/Rise";
import { formatToLocalTime } from "../../Service/Weather";
import TempCard from "./UI/TempCard";

const HighlightPanel = ({ weatherData }) => {
  if (!weatherData || !weatherData.currentWeather) {
    return null;
  }

  const {
    humidity,
    speed,
    sunrise,
    sunset,
    temp_max,
    temp_min,
    pressure,
    feels_like,
  } = weatherData.currentWeather;
  const { timezone } = weatherData.forecast;
  return (
    <div className="highlight-panel">
      <TempCard name="Max & Min Temp" value1={temp_max} value2={temp_min} />
      <HighlightCard name="Wind Status" value={`${speed} Km/h`} />
      <Rise
        name="Sunrise & Sunset"
        value1={formatToLocalTime(sunrise, timezone, "hh:mm a")}
        value2={formatToLocalTime(sunset, timezone, "hh:mm a")}
      />
      <HighlightCard name="Humidity" value={`${humidity}%`} />
      <HighlightCard name="Pressure" value={`${pressure} Pa`} />
      <HighlightCard name="Feels Like" value={`${feels_like}°`} />
    </div>
  );
};

export default HighlightPanel;
