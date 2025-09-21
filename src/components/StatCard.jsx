import React from "react";
import SwitchableIcon from "./SwitchableIcon";
import "../css/components/StatCard.css";

const StatCard = ({
  title,
  value,
  percentage,
  isPositive,
  className = "",
  arrowLightSrc,
  arrowDarkSrc,
}) => {
  const whiteArrow =
    className === "orders" || className === "revenue"
      ? arrowDarkSrc
      : arrowLightSrc;

  return (
    <div className={`summary-box ${className}`}>
      <p className="summary-box-title">{title}</p>
      <div className="summary-box-content-row">
        <h3 className="summary-box-value">{value}</h3>
        <p
          className={`summary-box-percentage`}
          aria-label={isPositive ? "increase" : "decrease"}
        >
          {isPositive ? "+" : "-"} {percentage}%
          <SwitchableIcon
            lightSrc={arrowLightSrc}
            darkSrc={whiteArrow}
            className="summary-percentage-icon"
          />
        </p>
      </div>
    </div>
  );
};

export default StatCard;
