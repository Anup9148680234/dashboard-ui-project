import React from "react";
import "../css/components/Dashboard.css";
import DashboardGrid from "./DashboardGrid";
import RevenueChart from "./RevenueChart";
import MapChart from "./MapChart";
import ProductRow from "./ProductRow";
import SalesChart from "./SalesChart";
import ProjectionCharts from "./ProjectionCharts";

function Dashboard() {
  return (
    <div className="dashboard-flex-container-wrapper">
      <h1 className="dashboard-page-title">eCommerce</h1>

      <div className="dashboard-flex-container">
        <div className="dashboard-grid-wrapper">
          <DashboardGrid />
        </div>
        <div className="bar-graph-wrapper">
          <ProjectionCharts />
        </div>

        <div className="box-row-two box-two-left">
          <RevenueChart />
        </div>
        <div className="box-row-two box-two-right">
          <MapChart />
        </div>

        <div className="box-row-three box-three-left">
          <ProductRow />
        </div>
        <div className="box-row-three box-three-right">
          <SalesChart />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
