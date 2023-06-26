import React from "react";
import "./max.css";
import {
  BsFillArrowDownCircleFill,
  BsFillArrowUpCircleFill,
} from "react-icons/bs";

const TempCard = ({ name, value1, value2 }) => {
  return (
    <div className="rise">
      <p className="p">{name}</p>
      <div className="rise-info">
        <div className="rise-icon1">
          <BsFillArrowUpCircleFill />
        </div>
        <h2>{`${value1}°`}</h2>
      </div>
      <div className="rise-info">
        <div className="rise-icon2">
          <BsFillArrowDownCircleFill />
        </div>
        <h2>{`${value2}°`}</h2>
      </div>
    </div>
  );
};

export default TempCard;
