
import "../css/components/RightBar.css";
import SwitchableIcon from "./SwitchableIcon";
import BugIcon from "../assets/icons/BugIcon.png";
import UserIcon from "../assets/icons/UserIcon.png";
import BroadcastIcon from "../assets/icons/Broadcast.png";
import Profile from "../assets/icons/profile1.png";

function RightBar() {
  return (
    <div className="rightbar-content">
      <section className="rightbar-section">
        <h3 className="rightbar-section-title">Notifications</h3>
        <ul className="rightbar-list">
          <li className="rightbar-list-item">
            <span className="rightbar-list-item-icon">
              <SwitchableIcon lightSrc={BugIcon} darkSrc={BugIcon} />
            </span>
            <div className="rightbar-list-item-text">
              <p>You have a bug that needs...</p>
              <small>Just now</small>
            </div>
          </li>
          <li className="rightbar-list-item">
            <span className="rightbar-list-item-icon">
              <SwitchableIcon lightSrc={UserIcon} darkSrc={UserIcon} />
            </span>
            <div className="rightbar-list-item-text">
              <p>New user registered</p>
              <small>59 minutes ago</small>
            </div>
          </li>
          <li className="rightbar-list-item">
            <span className="rightbar-list-item-icon">
              <SwitchableIcon lightSrc={BugIcon} darkSrc={BugIcon} />
            </span>
            <div className="rightbar-list-item-text">
              <p>You have a bug that needs...</p>
              <small>12 hours ago</small>
            </div>
          </li>
          <li className="rightbar-list-item">
            <span className="rightbar-list-item-icon">
              <SwitchableIcon lightSrc={BroadcastIcon} darkSrc={BroadcastIcon} />
            </span>
            <div className="rightbar-list-item-text">
              <p>Andi Lane subscribed to you</p>
              <small>Today, 11:59 AM</small>
            </div>
          </li>
        </ul>
      </section>

      <section className="rightbar-section">
        <h3 className="rightbar-section-title">Activities</h3>
        <ul className="rightbar-list">
          <li className="rightbar-list-item">
            <SwitchableIcon
              className="rightbar-avatar"
              lightSrc={Profile}
              darkSrc={Profile}
            />
            <div className="rightbar-list-item-text">
              <p>You have a bug that needs...</p>
              <small>Just now</small>
            </div>
          </li>

          <li className="rightbar-list-item">
            <SwitchableIcon
              className="rightbar-avatar"
              lightSrc={Profile}
              darkSrc={Profile}
            />
            <div className="rightbar-list-item-text">
              <p>Released a new version</p>
              <small>59 minutes ago</small>
            </div>
          </li>
          <li className="rightbar-list-item">
            <SwitchableIcon
              className="rightbar-avatar"
              lightSrc={Profile}
              darkSrc={Profile}
            />
            <div className="rightbar-list-item-text">
              <p>Submitted a bug</p>
              <small>12 hours ago</small>
            </div>
          </li>
          <li className="rightbar-list-item">
            <SwitchableIcon
              className="rightbar-avatar"
              lightSrc={Profile}
              darkSrc={Profile}
            />
            <div className="rightbar-list-item-text">
              <p>Modified A data in Page X</p>
              <small>Today, 11:59 AM</small>
            </div>
          </li>
          <li className="rightbar-list-item">
            <SwitchableIcon
              className="rightbar-avatar"
              lightSrc={Profile}
              darkSrc={Profile}
            />
            <div className="rightbar-list-item-text">
              <p>Deleted a page in Project X</p>
              <small>Feb 2, 2023</small>
            </div>
          </li>
        </ul>
      </section>

      <section className="rightbar-section">
        <h3 className="rightbar-section-title">Contacts</h3>
        <ul className="rightbar-list contacts">
          <li className="rightbar-list-item">
            <SwitchableIcon
              className="rightbar-contact-avatar"
              lightSrc={Profile}
              darkSrc={Profile}
            />
            <div className="rightbar-list-item-text">
              <p>Natali Craig</p>
            </div>
          </li>
          <li className="rightbar-list-item">
            <SwitchableIcon
              className="rightbar-contact-avatar"
              lightSrc={Profile}
              darkSrc={Profile}
            />
            <div className="rightbar-list-item-text">
              <p>Drew Cano</p>
            </div>
          </li>
          <li className="rightbar-list-item">
            <SwitchableIcon
              className="rightbar-contact-avatar"
              lightSrc={Profile}
              darkSrc={Profile}
            />
            <div className="rightbar-list-item-text">
              <p>Orlando Diggs</p>
            </div>
          </li>
          <li className="rightbar-list-item">
            <SwitchableIcon
              className="rightbar-contact-avatar"
              lightSrc={Profile}
              darkSrc={Profile}
            />
            <div className="rightbar-list-item-text">
              <p>Andi Lane</p>
            </div>
          </li>
          <li className="rightbar-list-item">
            <SwitchableIcon
              className="rightbar-contact-avatar"
              lightSrc={Profile}
              darkSrc={Profile}
            />
            <div className="rightbar-list-item-text">
              <p>Kate Morrison</p>
            </div>
          </li>
          <li className="rightbar-list-item">
            <SwitchableIcon
              className="rightbar-contact-avatar"
              lightSrc={Profile}
              darkSrc={Profile}
            />
            <div className="rightbar-list-item-text">
              <p>Koray Okumus</p>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default RightBar;
