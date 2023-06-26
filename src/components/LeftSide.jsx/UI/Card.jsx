import React from "react";
import "./Card.css";
import { iconUrlFromCode } from "../../../Service/Weather";

const Card = ({ title, temp, icon }) => {
  return (
    <div className="card">
      <p>{title}</p>
      <div className="panel-icon">
        <img src={iconUrlFromCode(icon)} alt="" />
      </div>
      <p>{`${temp}°`}</p>
    </div>
  );
};

export default Card;
