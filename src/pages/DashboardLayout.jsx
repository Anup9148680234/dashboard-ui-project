import React, { useState } from "react";
import "../css/pages/DashboardLayout.css";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import RightBar from "../components/RightBar";

function MainDashboard() {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [rightPanelVisible, setRightPanelVisible] = useState(true);

  const handleSidebarToggle = () => setSidebarVisible(!sidebarVisible);
  const handleRightPanelToggle = () => setRightPanelVisible(!rightPanelVisible);

  return (
    <div className="dashboard-layout">
      <div
        className={`dashboard-layout-sidebar ${
          sidebarVisible ? "open" : "closed"
        }`}
      >
        <Sidebar />
      </div>

      <div className="dashboard-layout-content-area">
        <Header
          toggleSidebar={handleSidebarToggle}
          toggleRightBar={handleRightPanelToggle}
        />
        <main className="dashboard-layout-main-content">
          <Outlet />
        </main>
      </div>

      <div
        className={`dashboard-layout-rightbar ${
          rightPanelVisible ? "open" : "closed"
        }`}
      >
        <RightBar />
      </div>
    </div>
  );
}

export default MainDashboard;