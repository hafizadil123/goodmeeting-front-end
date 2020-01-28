/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import BusinessImage from '../../assets/images/business.png';
import ClipBoardImage from '../../assets/images/clipboard.png';
import workBannerImage from '../../assets/images/work-banner.png';
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
                  How it works: <span className="blue">3 simple steps</span>
                </h1>
                <Link to="#" className="btn-link">
                  lets-havea@goodmeeting.today
                </Link>
                <p>
                  Create an account. Keep this in CC and Voila, we will do
                  everything to keep your
                  <br /> meetings checked. Log back in to receive feedback and
                  stats, all at one place.
                </p>
              </div>
              <img src={workBannerImage} className="img-fluid" alt="banner" />
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section2 steps">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="left-div first-step">
                <img src={BusinessImage} alt="started" />
                <h2>
                  Get started with
                  <br /> a FREE* account
                </h2>
                <p>Sign up and choose a plan for yourself.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="right-div">
                <img src={BusinessImage} alt="business" />
                <h2>
                  We will take care of
                  <br /> the feedback mails
                </h2>
                <p>
                  Customised mails will be sent to the
                  <br /> members of the meetings from the hosts
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="left-div last-step">
                <img src={ClipBoardImage} alt="clipboard" />
                <h2>It’s crunching time!!</h2>
                <p>
                  Data from the feedback collected are shown
                  <br /> on your dashboard in form of graphs to make
                  <br /> it easier to analyse for you… and guess what?
                  <br /> You even get a meeting score.
                </p>
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
