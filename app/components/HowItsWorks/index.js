/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import meeting1 from '../../images/meeting1.png';
import stated from '../../images/started.png';
import Meeting from '../../images/meeting.png';
import Feedback from '../../images/feedback.png';
import Crunch from '../../images/crunch.png';
import Header from '../Header';
import Footer from '../Footer';
const HowItsWorks = () => (
  <>
    <Header />
    <div>
      <section className="section1 box-art">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div style={{ textAlign: 'center' }}>
                <h1 className="heading1">
                  How it works: <span className="blue">4 simple steps</span>
                </h1>
                <Link to="#" className="btn-link">
                  havea@goodmeeting.today
                </Link>
                <p>
                  Create an account. Keep this in CC and Voila, we will do
                  everything to keep your
                  <br /> meetings checked. Log back in to receive feedback and
                  stats, all at one place.
                </p>
              </div>
              <img
                src={meeting1}
                className="img-fluid how-work-img"
                alt="banner"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="section2 steps">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="left-div first-step">
                <img src={stated} alt="started" />
                <h2>Create an account</h2>
                <p>
                  Sign up for free,
                  <br /> it takes less than 2 minutes.
                </p>
                <Link
                  to="/register"
                  className="btn btn-outline btn-md btn-line"
                >
                  Get Started Now
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="right-div">
                <img src={Meeting} alt="business" />
                <h2>Start a new meeting</h2>
                <p>
                  Keep <strong>“havea@goodmeeting.today”</strong>
                  <br /> in CC on meeting invites
                </p>
                <Link
                  to="/register"
                  className="btn btn-outline btn-md btn-line"
                >
                  Get Started Now
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="left-div last-step">
                <img src={Feedback} alt="clipboard" />
                <h2>Gathering feedback</h2>
                <p>
                  Customised emails will be sent to your
                  <br /> meeting participants asking them to
                  <br /> fill out a brief survey
                </p>
                <Link
                  to="/register"
                  className="btn btn-outline btn-md btn-line"
                >
                  Start Trial
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="right-div work4">
                <img src={Crunch} />
                <h2>It’s crunching time</h2>
                <p>
                  We analyse the data from the feedback into
                  <br /> graphs for you to view on your dashboard.
                  <br /> You will also receive a meeting score
                </p>
                <Link
                  to="/register"
                  className="btn btn-outline btn-md btn-line"
                >
                  Get Started Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section6">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p className="blue">Let’s Get Started</p>
              <h2>Get A Personalised Experience With Us</h2>
              <Link
                to="#"
                className="btn btn-md btn-primary font-weight-normal btn-blue"
              >
                REQUEST A DEMO
              </Link>
              <Link
                to="#"
                className="btn btn-outline btn-md btn-line font-weight-normal"
              >
                GET STARTED
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer />
  </>
);

export default HowItsWorks;
