/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';
import mobileLogo from '../../../assets/images/mobile-logo.png';
import searchImage from '../../../assets/images/search.png';
import userImage from '../../../assets/images/userIcon.png';
const Header = () => (
  <>
    <header className="topbar">
      <nav className="navbar top-navbar navbar-expand-md navbar-light">
        {/* ============================================================== */}
        {/* Logo */}
        {/* ============================================================== */}
        <div className="navbar-header">
          <Link className="navbar-brand" href="./">
            {/* Logo icon */}
            <b>
              {/* You can put here icon as well // <i class="wi wi-sunset"></i> // */}
              {/* Dark Logo icon */}
              <img src={logo} alt="logo" className="dark-logo" />
              <img src={mobileLogo} alt="logo" className="mobile-logo" />
            </b>
            {/* End Logo icon */}
          </Link>
        </div>
        {/* ============================================================== */}
        {/* End Logo */}
        {/* ============================================================== */}
      </nav>
      <div className="navbar-collapse">
        {/* ============================================================== */}
        {/* toggle and nav items */}
        {/* ============================================================== */}
        <ul className="navbar-nav mr-auto my-toggle mt-md-0 ">
          {/* This is  */}
          <li className="nav-item">
            {' '}
            <Link
              className="nav-link nav-toggler hidden-md-up text-muted waves-effect waves-dark"
              to="/dashboard"
            >
              <i className="ti-menu" />
            </Link>{' '}
          </li>
          <li className="nav-item">
            {' '}
            <Link
              className="nav-link sidebartoggler hidden-sm-down text-muted waves-effect waves-dark"
              to="/dashboard"
            >
              <i className="icon-arrow-left-circle" />
            </Link>{' '}
          </li>
        </ul>
        <ul className="mysearch">
          <li className="nav-item">
            <form className="app-search">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
              />{' '}
              <Link className="srh-btn" to="/dashboard">
                <img src={searchImage} alt="search-dashboard-img" />
              </Link>{' '}
            </form>
          </li>
        </ul>
        <ul className="navbar-nav my-lg-0">
          <li className="nav-item page-titles">
            <span className="noti right-side-toggle">0</span>
          </li>
          <li className="nav-item dropdown blur-ondrop">
            <a
              className="nav-link dropdown-toggle text-muted waves-effect waves-dark"
              href
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img src={userImage} alt="user" className="profile-pic" />
            </a>
            <div className="dropdown-menu dropdown-menu-right animated flipInY">
              <ul className="dropdown-user">
                <li>
                  <Link to="/dashboard">
                    <i className="mdi mdi-account-box" /> Your Account
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard">
                    <i className="mdi mdi-wrench" /> Setting
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard">
                    <i className="mdi mdi-file-document-box" /> Billing
                  </Link>
                </li>
                <li role="separator" className="divider" />
                <li className="logout">
                  <Link to="/login">
                    <i className="fa fa-power-off" /> Logout
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </header>
    <div>
      <aside className="left-sidebar">
        {/* Sidebar scroll */}
        <div className="scroll-sidebar">
          {/* Sidebar navigation */}
          <nav className="sidebar-nav">
            <ul id="sidebarnav">
              <li>
                <a href="./" aria-expanded="false">
                  <img src="../assets/images/dashboard.png" />
                  <img
                    src="../assets/images/dashboard-b.png"
                    className="d-none"
                  />
                  <span className="hide-menu">Dashboard</span>
                </a>
              </li>
              <li>
                <a href="meeting.php" aria-expanded="false">
                  <img src="../assets/images/man.png" />
                  <img src="../assets/images/man-b.png" className="d-none" />
                  <span className="hide-menu">Meeting</span>
                </a>
              </li>
              <li>
                <a href="stats.php" aria-expanded="false">
                  <img src="../assets/images/bar-graph.png" />
                  <img
                    src="../assets/images/bar-graph-b.png"
                    className="d-none"
                  />
                  <span className="hide-menu">Stats</span>
                </a>
              </li>
              <li>
                <a href="feedback-form.php" aria-expanded="false">
                  <img src="../assets/images/financial.png" />
                  <img
                    src="../assets/images/financial-b.png"
                    className="d-none"
                  />
                  <span className="hide-menu">Feedback Form</span>
                </a>
              </li>
              <li>
                <a href="user-admin.php" aria-expanded="false">
                  <img src="../assets/images/user.png" />
                  <img src="../assets/images/user-b.png" className="d-none" />
                  <span className="hide-menu">User Admin</span>
                </a>
              </li>
              <li>
                <a href="setting.php" aria-expanded="false">
                  <img src="../assets/images/cogwheel.png" />
                  <img
                    src="../assets/images/cogwheel-b.png"
                    className="d-none"
                  />
                  <span className="hide-menu">Settings</span>
                </a>
              </li>
            </ul>
            <ul id="sidebarnav" className="miscc">
              <li className="nav-small-cap" />
              <li className="nav-small-cap" />
              <li className="nav-small-cap" />
              <li>
                <a href="#" aria-expanded="false">
                  <img src="../assets/images/loop.png" />
                  <span className="hide-menu">Upgrade</span>
                </a>
              </li>
              <li>
                <Link to="/login" aria-expanded="false">
                  <img src="../assets/images/logout.png" />
                  <span className="hide-menu">Logout</span>
                </Link>
              </li>
            </ul>
          </nav>
          {/* End Sidebar navigation */}
        </div>
        {/* End Sidebar scroll */}
      </aside>
      {/* ============================================================== */}
      {/* End Left Sidebar - style you can find in sidebar.scss  */}
      {/* ============================================================== */}
      {/* ============================================================== */}
      {/* Right sidebar */}
      {/* ============================================================== */}
      {/* .right-sidebar */}
      <div className="right-sidebar">
        <div className="slimscrollright">
          <div className="rpanel-title">
            {' '}
            Notifications{' '}
            <span>
              <i className="ti-close right-side-toggle" />
            </span>{' '}
          </div>
          <div className="r-panel-body">
            <ul className="m-t-20 chatonline">
              <li>
                <a href="javascript:void(0)">
                  <img src="../assets/images/assignment.png" alt className />
                  <span>
                    <p>Johanna submitted her feedback form</p>{' '}
                    <img
                      src="../assets/images/red-c.png"
                      alt
                      className="red-c"
                    />{' '}
                    <small className="text-muted">4 mins ago</small>
                  </span>
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <img src="../assets/images/assignment.png" alt className />
                  <span>
                    <p>Dennis submitted his feedback form</p>{' '}
                    <img
                      src="../assets/images/red-c.png"
                      alt
                      className="red-c"
                    />{' '}
                    <small className="text-muted">27 mins ago</small>
                  </span>
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <img src="../assets/images/calender.png" alt className />
                  <span>
                    <p>Daily Standup Today with Carter</p>{' '}
                    <img
                      src="../assets/images/red-c.png"
                      alt
                      className="red-c"
                    />{' '}
                    <small className="text-muted">2 hours ago</small>
                  </span>
                </a>
              </li>
              <li className="unread-noti">
                <a href="javascript:void(0)">
                  <img src="../assets/images/assignment.png" alt className />
                  <span>
                    <p>Johanna submitted her feedback form</p>{' '}
                    <small className="text-muted">4 mins ago</small>
                  </span>
                </a>
              </li>
              <li className="unread-noti">
                <a href="javascript:void(0)">
                  <img src="../assets/images/assignment.png" alt className />
                  <span>
                    <p>Dennis submitted his feedback form</p>{' '}
                    <small className="text-muted">27 mins ago</small>
                  </span>
                </a>
              </li>
              <li className="unread-noti">
                <a href="javascript:void(0)">
                  <img src="../assets/images/calender.png" alt className />
                  <span>
                    <p>Daily Standup Today with Carter</p>{' '}
                    <small className="text-muted">2 hours ago</small>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Header;
