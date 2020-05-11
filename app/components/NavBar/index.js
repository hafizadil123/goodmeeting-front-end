/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import logo from '../../assets/images/logo.png';
import mobileLogo from '../../assets/images/mobile-logo.png';
import searchImage from '../../assets/images/search.png';
import { BASE_URL, BASE_IMAGE_URL } from '../../utils/constants';
import userImage from '../../assets/images/userIcon.png';
import { logout } from '../../utils/requests';

const NavBar = ({ isShow, history }) => {
  const [showNotification, setShowNotification] = useState(false);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    axios
      .get(`${BASE_URL}get-profile`, {
        params: {
          userId: localStorage.getItem('userId'),
        },
        crossdomain: true,
      })
      .then(response => setProfile(response && response.data.user))
      .catch(() => {})
      .then(() => {
        // always executed
      });
  }, []);
  return isShow ? (

    <div className="fix-header fix-sidebar card-no-border">
      {/* ============================================================== */}
      {/* Main wrapper - style you can find in pages.scss */}
      {/* ============================================================== */}
      <div id="main-wrapper">
        {/* ============================================================== */}
        {/* Topbar header - style you can find in pages.scss */}
        {/* ============================================================== */}
        <header className="topbar">
          <nav className="navbar fixed-top top-navbar navbar-expand-md navbar-light">
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
              {/* <ul className="mysearch">
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
              </ul> */}
              <ul className="navbar-nav my-lg-0">
                {/* <li
                  className="nav-item page-titles"
                  onClick={() => setShowNotification(!showNotification)}
                >
                  <span className="noti right-side-toggle">0</span>
                </li> */}
                <li className="nav-item dropdown blur-ondrop">
                  <a
                    className="nav-link dropdown-toggle text-muted waves-effect waves-dark"
                    href
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {profile && profile.avatar ? (
                      <img
                        src={`${BASE_IMAGE_URL}${profile.avatar}` || userImage}
                        alt="profile-pic"
                        className={`${
                          profile && profile.avatar
                            ? 'userImageHeader'
                            : 'dark-logo'
                        }`}
                      />
                    ) : (
                      <img
                        src={userImage}
                        alt="user profile"
                        className="serImageHeader"
                      />
                    )}
                  </a>
                  <div className="dropdown-menu dropdown-menu-right animated flipInY">
                    <ul className="dropdown-user">
                      <li>
                        <Link to="/profile">
                          <i className="mdi mdi-account-box" /> Your Account
                        </Link>
                      </li>
                      {/* <li>
                        <a href="#">
                          <i className="mdi mdi-wrench" /> Setting
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="mdi mdi-file-document-box" /> Billing
                        </a>
                      </li> */}
                      <li role="separator" className="divider" />
                      <li className="logout">
                        <Link to="#" onClick={e => logout(history)}>
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
        {showNotification ? (
          <div className="right-sidebar">
            <div className="slimscrollright">
              <div className="rpanel-title">
                {' '}
                Notifications{' '}
                <span>
                  <i
                    className="ti-close right-side-toggle"
                    onClick={() => setShowNotification(!showNotification)}
                  />
                </span>{' '}
              </div>
              <div className="r-panel-body">
                <ul className="m-t-20 chatonline">
                  <li>
                    <a href="javascript:void(0)">
                      <img
                        src="../assets/images/assignment.png"
                        alt
                        className
                      />
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
                      <img
                        src="../assets/images/assignment.png"
                        alt
                        className
                      />
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
                      <img
                        src="../assets/images/assignment.png"
                        alt
                        className
                      />
                      <span>
                        <p>Johanna submitted her feedback form</p>{' '}
                        <small className="text-muted">4 mins ago</small>
                      </span>
                    </a>
                  </li>
                  <li className="unread-noti">
                    <a href="javascript:void(0)">
                      <img
                        src="../assets/images/assignment.png"
                        alt
                        className
                      />
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
              )
            </div>
          </div>
        ) : null}
        {/* ============================================================== */}
        {/* End Right sidebar */}
        {/* ============================================================== */}
      </div>
    </div>
  ) : null;
};

NavBar.propTypes = {
  isShow: PropTypes.bool,
};
NavBar.default = {
  isShow: true,
};
export default NavBar;
