/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from '../../assets/images/logo.png';
import mobileLogo from '../../assets/images/mobile-logo.png';
import searchImage from '../../assets/images/search.png';
import userImage from '../../assets/images/userIcon.png';
const NavBar = ({ isShow }) =>
  isShow ? (
    <div className="fix-header fix-sidebar card-no-border">
      {/* ============================================================== */}
      {/* Main wrapper - style you can find in pages.scss */}
      {/* ============================================================== */}
      <div id="main-wrapper">
        {/* ============================================================== */}
        {/* Topbar header - style you can find in pages.scss */}
        {/* ============================================================== */}
        <header className="topbar">
          <nav className="navbar top-navbar navbar-expand-md navbar-light">
            {/* ============================================================== */}
            {/* Logo */}
            {/* ============================================================== */}
            <div className="navbar-header">
              <a className="navbar-brand" href="/">
                {/* Logo icon */}
                <b>
                  {/* You can put here icon as well // <i class="wi wi-sunset"></i> // */}
                  {/* Dark Logo icon */}
                  <img src={logo} alt="logo" className="dark-logo" />
                  <img src={mobileLogo} alt="logo" className="mobile-logo" />
                </b>
                {/* End Logo icon */}
              </a>
            </div>
            {/* ============================================================== */}
            {/* End Logo */}
            {/* ============================================================== */}
            <div className="navbar-collapse">
              {/* ============================================================== */}
              {/* toggle and nav items */}
              {/* ============================================================== */}
              <ul className="navbar-nav mr-auto my-toggle mt-md-0 ">
                {/* This is  */}
                <li className="nav-item">
                  {' '}
                  <a
                    className="nav-link nav-toggler hidden-md-up text-muted waves-effect waves-dark"
                    href="javascript:void(0)"
                  >
                    <i className="ti-menu" />
                  </a>{' '}
                </li>
                <li className="nav-item">
                  {' '}
                  <a
                    className="nav-link sidebartoggler hidden-sm-down text-muted waves-effect waves-dark"
                    href="javascript:void(0)"
                  >
                    <i className="icon-arrow-left-circle" />
                  </a>{' '}
                </li>
              </ul>
              {/* ============================================================== */}
              {/* User profile and search */}
              {/* ============================================================== */}
              <ul className="mysearch">
                <li className="nav-item">
                  <form className="app-search">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                    />{' '}
                    <a className="srh-btn">
                      <img src={searchImage} />
                    </a>{' '}
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
                        <a href="#">
                          <i className="mdi mdi-account-box" /> Your Account
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="mdi mdi-wrench" /> Setting
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="mdi mdi-file-document-box" /> Billing
                        </a>
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
          </nav>
        </header>
        {/* ============================================================== */}
        {/* End Topbar header */}
        {/* ============================================================== */}
        {/* ============================================================== */}
        {/* Left Sidebar - style you can find in sidebar.scss  */}
        {/* ============================================================== */}
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
        {/* ============================================================== */}
        {/* End Right sidebar */}
        {/* ============================================================== */}
      </div>
    </div>
  ) : null;

NavBar.propTypes = {
  isShow: PropTypes.bool,
};
NavBar.default = {
  isShow: true,
};
export default NavBar;
