import React from "react";
import "./Highlight.css";

const HighlightCard = ({ name, value }) => {
  return (
    <div className="highlight">
      <p className="p">{name}</p>
      <div className="highlight-info">{value}</div>
    </div>
  );
};

export default HighlightCard;
