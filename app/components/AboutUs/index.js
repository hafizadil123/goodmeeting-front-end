/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from 'react';
import aboutImg from '../../assets/images/aboutimg.svg';
import RegisterHeader from '../Header';
import Footer from '../Footer';
const AboutUs = ({ history }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <RegisterHeader />
      <section className="section1 about box-art">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="heading1">About Us</h1>
              <div className="term-wrap">
                <p>
                  We can all agree that we have been in one too many meetings
                  that could've been an email. This problem plagues the
                  workplace; and it doesn't discriminate against corporate
                  hierarchy, industry or location. Our founders are testament of
                  this. What else would bring a developer in Pakistan, a UX/UI
                  designer in India, a technology consultant and a finance
                  expert in England? Saeed, Abhishek, Anthony and Paul have all
                  teamed up to tackle this relentless obstacle of inefficient,
                  unproductive and unnecessary meetings. Good Meeting defeats
                  this through a two-step process that provides feedback on
                  conferences you hold as well as allowing you to critically
                  evaluate those you are a participant in. This ability to
                  assess meeting productivity in turn ensures corporate
                  productivity.
                </p>
                <img src={aboutImg} className="img-fluid" alt="aboutImg" />
              </div>
            </div>
          </div>
        </div>
        {/* <div className="team">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="team-wrap">
                  <img src={team1} className="img-fluid" alt="team1" />
                  <h6>Jose Willis</h6>
                  <p>Cofounder</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="team-wrap">
                  <img src={team2} className="img-fluid" alt="team2" />
                  <h6>Joe Clarks</h6>
                  <p>Cofounder</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="team-wrap">
                  <img src={team3} className="img-fluid" alt="team3" />
                  <h6>Danielle Gibson</h6>
                  <p>Cofounder</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="team-wrap">
                  <img src={team4} className="img-fluid" alt="team4" />
                  <h6>Roger Lim</h6>
                  <p>Cofounder</p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </section>
      <Footer />
    </>
  );
};
export default AboutUs;
