/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link } from 'react-router-dom';
import dashboardImageh from '../../../assets/images/dashboard.png';
import dashboardImage from '../../../assets/images/dashboard-b.png';
import manImage from '../../../assets/images/man.png';
import manBImage from '../../../assets/images/man-b.png';
import BarImage from '../../../assets/images/bar-graph.png';
import BarBImage from '../../../assets/images/bar-graph-b.png';
import financialImage from '../../../assets/images/financial.png';
import financialBImage from '../../../assets/images/financial-b.png';
import userImage from '../../../assets/images/user.png';
import userBImage from '../../../assets/images/user-b.png';
import cogwheelImage from '../../../assets/images/cogwheel.png';
import cogwheelBImage from '../../../assets/images/cogwheel-b.png';
import loopImage from '../../../assets/images/loop.png';
import logoutImage from '../../../assets/images/logout.png';
const logoutFunction = history => {
  localStorage.removeItem('accessToken');
  history.push('/login');
};
const LeftBar = ({ history }) => (
  <aside className="left-sidebar">
    {/* Sidebar scroll */}
    <div className="scroll-sidebar">
      {/* Sidebar navigation */}
      <nav className="sidebar-nav">
        <ul id="sidebarnav">
          <li>
            <Link
              to="/dashboard"
              className={`${
                window.location.pathname === '/dashboard' ? 'active' : ''
              }`}
              aria-expanded="false"
            >
              <img src={dashboardImageh} />
              <img src={dashboardImage} className="d-none" />
              <span className="hide-menu">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              to="/meetings"
              aria-expanded="false"
              className={`${
                window.location.pathname === '/meetings' ? 'active' : ''
              }`}
            >
              <img src={manImage} />
              <img src={manBImage} className="d-none" />
              <span className="hide-menu">Meetings</span>
            </Link>
          </li>
          <li>
            <Link
              to="/stats"
              aria-expanded="false"
              className={`${
                window.location.pathname === '/stats' ? 'active' : ''
              }`}
            >
              <img src={BarImage} />
              <img src={BarBImage} className="d-none" />
              <span className="hide-menu">Stats</span>
            </Link>
          </li>
          {/* <li>
            <a href={window.location.pathname} aria-expanded="false">
              <img src={financialImage} />
              <img src={financialBImage} className="d-none" />
              <span className="hide-menu">Feedback Form</span>
            </a>
          </li>
          <li>
            <a href={window.location.pathname} aria-expanded="false">
              <img src={userImage} />
              <img src={userBImage} className="d-none" />
              <span className="hide-menu">User Admin</span>
            </a>
          </li>
          <li>
            <a href={window.location.pathname} aria-expanded="false">
              <img src={cogwheelImage} />
              <img src={cogwheelBImage} className="d-none" />
              <span className="hide-menu">Settings</span>
            </a>
          </li> */}
        </ul>
        <p className="version">Version 1.0</p>
        {/* <ul id="sidebarnav" className="miscc">
          <li className="nav-small-cap" />
          <li className="nav-small-cap" />
          <li className="nav-small-cap" />
          <li>
            <a href={window.location.pathname} aria-expanded="false">
              <img src={loopImage} />
              <span className="hide-menu">Upgrade</span>
            </a>
          </li>
          <li>
            <Link
              to="#"
              aria-expanded="false"
              onClick={e => logoutFunction(history)}
            >
              <img src={logoutImage} />
              <span className="hide-menu">Logout</span>
            </Link>
          </li>
        </ul> */}
      </nav>
      {/* End Sidebar navigation */}
    </div>
    {/* End Sidebar scroll */}
  </aside>
);

export default LeftBar;
