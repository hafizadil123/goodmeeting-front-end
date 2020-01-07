/* eslint-disable indent */
/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../images/logo.png';
import mobile from '../../images/mobile-logo.png';

const Header = () => (
  <header>
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          <img src={logo} className="desktop-logo" />
          <img className="mobile-logo" src={mobile} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{boxShadow: 'none'}}>
          <ul className="navbar-nav m-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                How it works
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Demo
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto right-btn">
            <Link to="/register" className="btn btn-danger btn-md btn-red">
              Register Now
            </Link>
            <Link className="login-link" to="/login">
              Login
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  </header>
);

export default Header;
