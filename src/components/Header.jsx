import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import SwitchableIcon from "./SwitchableIcon";
import "../css/components/Header.css";
import siderBarIconLight from "../assets/icons/Sidebar.png";
import siderBarIconDark from "../assets/icons/Sidebar-dark.png";
import SearchIcon from "../assets/icons/Search.png";
import SearchIconDark from "../assets/icons/Search-dark.png";
import TextIcon from "../assets/icons/Text.png";
import TextIconDark from "../assets/icons/Text-dark.png";
import StarIconLight from "../assets/icons/Star.png";
import StarIconDark from "../assets/icons/Star-dark.png";
import BellLight from "../assets/icons/Bell-light.png";
import BellDark from "../assets/icons/Bell-dark.png";
import ClockIconLight from "../assets/icons/ClockCounterClockwise-light.png";
import ClockIconDark from "../assets/icons/ClockCounterClockwise.png";
import lightIcon from "../assets/icons/Sun.png";
import DarkIcon from "../assets/icons/Sun-dark.png";

function TopHeader({ toggleSidebar, toggleRightBar }) {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="header-container">
      <div className="header-left">
        <div>
          <button
            className="sidebar-toggle-btn"
            aria-label="Toggle Sidebar"
            onClick={toggleSidebar}
          >
            <SwitchableIcon
              lightSrc={siderBarIconLight}
              darkSrc={siderBarIconDark}
            />
          </button>
        </div>
        <div className="star-icon">
          <SwitchableIcon lightSrc={StarIconLight} darkSrc={StarIconDark} />
        </div>
        <div className="page-title">Dashboards</div>
        <div className="foward-slash">/</div>
        <div className="page-subtitle">Default</div>
      </div>

      <div className="header-right">
        <div className="search-box-wrapper">
          <SwitchableIcon
            lightSrc={SearchIcon}
            darkSrc={SearchIconDark}
            className="search-icon-left"
          />
          <input type="search" className="search-box" placeholder="Search" />
          <SwitchableIcon
            lightSrc={TextIcon}
            darkSrc={TextIconDark}
            className="search-icon-right"
          />
        </div>

        <button className="theme-toggle-btn" onClick={toggleTheme}>
          <SwitchableIcon lightSrc={lightIcon} darkSrc={DarkIcon} />
        </button>

        <button className="icon-btn" aria-label="Activities">
          <SwitchableIcon lightSrc={ClockIconLight} darkSrc={ClockIconDark} />
        </button>

        <button className="icon-btn" aria-label="Notifications">
          <SwitchableIcon lightSrc={BellLight} darkSrc={BellDark} />
        </button>
        <button className="icon-btn" onClick={toggleRightBar} aria-label="Notification-Toggle">
          <SwitchableIcon lightSrc={siderBarIconLight} darkSrc={siderBarIconDark} />
        </button>
      </div>
    </header>
  );
}

export default TopHeader;
