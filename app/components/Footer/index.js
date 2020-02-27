/* eslint-disable indent */
/* eslint-disable prettier/prettier */
import React from 'react';
import logo from '../../images/footerlogo.png';
import { Link } from 'react-router-dom';
function Footer() {
  return (
  <footer>
  <div className="container">
    <div className="row">
      <div className="col-md-4">
        <div className="widget1">
          <img src={logo} className="footerlogo" />
          <p className="mt-2">Copyright 2019. GoodMeeting.today</p><br />
        </div>
      </div>
      <div className="col-md-4">
        <div className="widget2">
          <h3>Connect with us</h3>
          <p>4397 Spruce Dr, Mayo,<br /> Maryland 21106</p><br />
          <p><a href>contact@goodmeeting.today</a></p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="widget4">
          <h3>Links</h3>
          <ul>
            <li><Link to="/about-us">About</Link></li>
            <li><a href>Privacy Policy</a></li>
            <li><Link to="/terms-condition">Terms</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</footer>

  );
}

export default Footer;
