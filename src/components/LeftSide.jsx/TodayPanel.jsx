import React, { useState } from "react";
import "./TodayPanel.css";
import Card from "./UI/Card";

const TodayPanel = ({ weatherData, setUnits, units }) => {
  const [selectedButton, setSelectedButton] = useState("week");
  const [highlighted, setHighlighted] = useState(false);
  if (!weatherData || !weatherData.currentWeather || !weatherData.forecast) {
    return null;
  }

  const handleButton1Click1 = () => {
    setSelectedButton("Today");
    setHighlighted(!highlighted);
  };

  const handleButton1Click2 = () => {
    setSelectedButton("week");
    setHighlighted(!highlighted);
  };

  const handleUnitChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };
  const { daily, hourly } = weatherData.forecast;
  return (
    <div>
      <div className="left-navbar">
        <div className="week-today">
          <button
            className="btn"
            onClick={handleButton1Click1}
            style={highlighted ? { color: "black" } : { color: "#d6d6d6" }}
          >
            Today
          </button>
          <button
            className="btn"
            onClick={handleButton1Click2}
            style={highlighted ? { color: "#d6d6d6" } : { color: "black" }}
          >
            Week
          </button>
        </div>
        <div className="icons">
          <button
            className="conversion"
            name="metric"
            onClick={handleUnitChange}
          >
            C
          </button>
          <button
            className="conversion"
            name="imperial"
            onClick={handleUnitChange}
          >
            F
          </button>
        </div>
      </div>
      <div className="today-panel">
        {selectedButton === "week" &&
          daily.map((day) => {
            return <Card title={day.title} temp={day.temp} icon={day.icon} />;
          })}
        {selectedButton === "Today" &&
          hourly.map((day) => {
            return <Card title={day.title} temp={day.temp} icon={day.icon} />;
          })}
      </div>
    </div>
  );
};

export default TodayPanel;
