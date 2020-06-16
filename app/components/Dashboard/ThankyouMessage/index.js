/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';

const ThankYouMessage = () => (
  <>
    <div>
      <section className="feedback">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="logo">
                <img src={logo} className />
              </div>
            </div>
            <div className="col">
              <Link to="/" className="btn btn-dark btn-md btn-black">
                EXIT
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="feedback-first-page">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {/* <img src={hsbclogo} className="hsbclogo" /> */}
              <h1 className="heading1">
                Thank you for your feedback and for helping us have better
                meetings everyday.
              </h1>
              <p>We will improve and hope to have GoodMeetings Everyday.</p>
              <Link to="/" className="btn btn-dark btn-md btn-black">
                Close
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  </>
);

export default ThankYouMessage;
