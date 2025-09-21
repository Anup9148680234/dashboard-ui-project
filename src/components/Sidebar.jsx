import React, { useContext } from "react";
import "../css/components/SideBar.css";
import DefaultIcon from "../assets/icons/ChartPieSlice.png";
import DefaultDarkIcon from "../assets/icons/ChartPieSlice-dark.png";
import EcommerceIcon from "../assets/icons/ShoppingBagOpen.png";
import EcommerceIconDark from "../assets/icons/ShoppingBagOpen-dark.png";
import ProjectsIcon from "../assets/icons/FolderNotch.png";
import ProjectsIconDark from "../assets/icons/FolderNotch-dark.png";
import OnlineCourseIcon from "../assets/icons/BookOpen.png";
import OnlineCourseIconDark from "../assets/icons/BookOpen-dark.png";
import UserProfileIcon from "../assets/icons/IdentificationBadge.png";
import UserProfileIconDark from "../assets/icons/IdentificationBadge-dark.png";
import AccountIcon from "../assets/icons/IdentificationCard.png";
import AccountIconDark from "../assets/icons/IdentificationCard-dark.png";
import CorporateIcon from "../assets/icons/UsersThree.png";
import CorporateIconDark from "../assets/icons/UsersThree-dark.png";
import BlogIcon from "../assets/icons/Notebook.png";
import BlogIconDark from "../assets/icons/Notebook-dark.png";
import SocialIcon from "../assets/icons/ChatsTeardrop.png";
import SocialIconDark from "../assets/icons/ChatsTeardrop-dark.png";
import DotIcon from "../assets/icons/Dot.png";
import DotIconDark from "../assets/icons/Dot-dark.png";

import ArrowLineRightLight from "../assets/icons/ArrowLineRight.png";
import ArrowLineRightDark from "../assets/icons/ArrowLineRight-dark.png";
import { ThemeContext } from "./ThemeContext";
import SwitchableIcon from "./SwitchableIcon";

function SideBar() {
  const { theme } = useContext(ThemeContext);

  return (
    <nav className="sidebar-container">
      <div className="sidebar-logo">
        <div className="logo-circle"></div>
        <span className="logo-title">ByeWind</span>
      </div>

      <div className="sidebar-section">
        <div className="sidebar-section-title_box">
          <h4 className="sidebar-section-title">Favorites</h4>
          <h4 className="sidebar-section-title">Recently</h4>
        </div>
        <ul className="sidebar-links">
          <li className="sidebar-link">
            <SwitchableIcon lightSrc={DotIcon} darkSrc={DotIconDark} /> Overview
          </li>
          <li className="sidebar-link">
            <SwitchableIcon lightSrc={DotIcon} darkSrc={DotIconDark} />
            Projects
          </li>
        </ul>
      </div>

      <div className="sidebar-section">
        <h4 className="sidebar-section-title">Dashboards</h4>
        <ul className="sidebar-links">
          <li className="sidebar-link">
            <SwitchableIcon
              lightSrc={ArrowLineRightLight}
              darkSrc={ArrowLineRightDark}
            />
            <SwitchableIcon lightSrc={DefaultIcon} darkSrc={DefaultDarkIcon} />{" "}
            Default
          </li>
          <li className="sidebar-link">
            <SwitchableIcon
              lightSrc={ArrowLineRightLight}
              darkSrc={ArrowLineRightDark}
            />
            <SwitchableIcon lightSrc={EcommerceIcon} darkSrc={EcommerceIconDark} />
            eCommerce
          </li>
          <li className="sidebar-link">
            <SwitchableIcon
              lightSrc={ArrowLineRightLight}
              darkSrc={ArrowLineRightDark}
            />
            <SwitchableIcon lightSrc={ProjectsIcon} darkSrc={ProjectsIconDark} />
            Projects
          </li>
          <li className="sidebar-link">
            <SwitchableIcon
              lightSrc={ArrowLineRightLight}
              darkSrc={ArrowLineRightDark}
            />
            <SwitchableIcon
              lightSrc={OnlineCourseIcon}
              darkSrc={OnlineCourseIconDark}
            />
            Online Courses
          </li>
        </ul>
      </div>

      <div className="sidebar-section">
        <h4 className="sidebar-section-title">Pages</h4>

        <div className="sidebar-subsection-title">
          <SwitchableIcon
            lightSrc={ArrowLineRightLight}
            darkSrc={ArrowLineRightDark}
            alt="Arrow icon rotated down"
            className="sidebar-arrow rotated-down"
          />
          <SwitchableIcon
            lightSrc={UserProfileIcon}
            darkSrc={UserProfileIconDark}
            alt="User Profile Icon"
          />
          <span>User Profile</span>
        </div>

        <ul className="sidebar-links sidebar-sublist">
          <li className="sidebar-link">Overview</li>
          <li className="sidebar-link">Projects</li>
          <li className="sidebar-link">Campaigns</li>
          <li className="sidebar-link">Documents</li>
          <li className="sidebar-link">Followers</li>
        </ul>

        <ul className="sidebar-links">
          <li className="sidebar-link">
            <SwitchableIcon
              lightSrc={ArrowLineRightLight}
              darkSrc={ArrowLineRightDark}
            />
            <SwitchableIcon lightSrc={AccountIcon} darkSrc={AccountIconDark} />
            Account
          </li>
          <li className="sidebar-link">
            <SwitchableIcon
              lightSrc={ArrowLineRightLight}
              darkSrc={ArrowLineRightDark}
            />
            <SwitchableIcon lightSrc={CorporateIcon} darkSrc={CorporateIconDark} />
            Corporate
          </li>
          <li className="sidebar-link">
            <SwitchableIcon
              lightSrc={ArrowLineRightLight}
              darkSrc={ArrowLineRightDark}
            />
            <SwitchableIcon lightSrc={BlogIcon} darkSrc={BlogIconDark} />
            Blog
          </li>
          <li className="sidebar-link">
            <SwitchableIcon
              lightSrc={ArrowLineRightLight}
              darkSrc={ArrowLineRightDark}
            />
            <SwitchableIcon lightSrc={SocialIcon} darkSrc={SocialIconDark} />
            Social
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default SideBar;
