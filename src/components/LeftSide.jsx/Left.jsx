import React from "react";
import "./Left.css";
import TodayPanel from "./TodayPanel";
import HighlightPanel from "./HighlightPanel";

const Left = ({ weatherData, setUnits, units }) => {
  if (!weatherData || !weatherData.currentWeather || !weatherData.forecast) {
    return null;
  }
  return (
    <div className="left">
      <div className="panel">
        <TodayPanel
          weatherData={weatherData}
          setUnits={setUnits}
          units={units}
        />
      </div>
      <h3>Today's Highlights</h3>
      <div>
        <HighlightPanel weatherData={weatherData} />
      </div>
    </div>
  );
};

export default Left;
