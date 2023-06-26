import React from "react";
import "./Rise.css";
import { BsSunriseFill, BsFillSunsetFill } from "react-icons/bs";

const Rise = ({ name, value1, value2 }) => {
  return (
    <div className="rise">
      <p className="p">{name}</p>
      <div className="info">
        <div className="rise-icon">
          <BsSunriseFill />
        </div>
        <h2>{value1}</h2>
      </div>
      <div className="info">
        <div className="rise-icon">
          <BsFillSunsetFill />
        </div>
        <h2>{value2}</h2>
      </div>
    </div>
  );
};

export default Rise;
