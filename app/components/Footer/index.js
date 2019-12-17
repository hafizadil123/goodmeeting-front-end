/* eslint-disable indent */
/* eslint-disable prettier/prettier */
import React from 'react';

function Footer() {
  return (
  <footer>
  <div className="container">
    <div className="row">
      <div className="col-md-5">
        <div className="widget1">
          <h3>GoodMeeting Today</h3>
          <p className="mt-2">Copyright 2019. GoodMeeting.today</p><br />
          <p>4397 Spruce Dr, Mayo,<br /> Maryland 21106</p><br />
          <p><a href>contact@goodmeeting.today</a></p>
          <p className="mt-2"><a href>(557) 775 - 8411</a></p>
        </div>
      </div>      
      <div className="col-md-2">
        <div className="widget2">
          <h3>Products</h3>
          <ul>
            <li><a href>Features</a></li>
            <li><a href>Pricing</a></li>
            <li><a href>How it Works</a></li>
            <li><a href>Request a Demo</a></li>
          </ul>
        </div>
      </div>
      <div className="col-md-2">
        <div className="widget3">
          <h3>Support</h3>
          <ul>    
            <li><a href>Blog</a></li>
            <li><a href>FAQs</a></li>
            <li><a href>Support</a></li>
          </ul>
        </div>
      </div>
      <div className="col-md-3">
        <div className="widget4">
          <h3>Company</h3>
          <ul>    
            <li><a href>About</a></li>
            <li><a href>Privacy Policy</a></li>
            <li><a href>Terms</a></li>
            <li><a href>Contact Us</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</footer>

  );
}

export default Footer;
