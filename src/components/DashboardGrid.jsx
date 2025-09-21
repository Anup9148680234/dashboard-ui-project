import React from "react";
import StatCard from "./StatCard";
import "../css/components/DashboardGrid.css";
import upLight from "../assets/icons/ArrowRise.png";
import upDark from "../assets/icons/ArrowRise-dark.png";
import downLight from "../assets/icons/ArrowFall.png";
import downDark from "../assets/icons/ArrowFall-dark.png";

function DashboardGrid() {
  return (
    <div className="dashboard-grid-wrapper">
      <div className="dashboard-grid-container">
        <StatCard
          title="Customers"
          value="3,781"
          percentage={11.01}
          isPositive={true}
          arrowLightSrc={upLight}
          arrowDarkSrc={upDark}
          className="customers"
        />

        <StatCard
          title="Orders"
          value="1,219"
          percentage={0.03}
          isPositive={false}
          arrowLightSrc={downLight}
          arrowDarkSrc={downDark}
          className="orders"
        />

        <StatCard
          title="Revenue"
          value="$695"
          percentage={15.03}
          isPositive={true}
          arrowLightSrc={upLight}
          arrowDarkSrc={upDark}
          className="revenue"
        />

        <StatCard
          title="Growth"
          value="30.1%"
          percentage={6.08}
          isPositive={true}
          arrowLightSrc={upLight}
          arrowDarkSrc={upDark}
          className="growth"
        />
      </div>
    </div>
  );
}
export default DashboardGrid;
