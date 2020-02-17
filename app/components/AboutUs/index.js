import React from 'react';
import team1 from '../../assets/images/team1.png';
import team2 from '../../assets/images/team2.png';
import team3 from '../../assets/images/team3.png';
import team4 from '../../assets/images/team4.png';
import aboutImg from '../../assets/images/aboutimg.svg';
import RegisterHeader from '../Header';
import Footer from '../Footer';
const AboutUs = ({history}) => (
  <>
    <RegisterHeader />
    <section className="section1 about box-art">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="heading1">About Us</h1>
            <div className="term-wrap">
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur
              </p>
              <img src={aboutImg} className="img-fluid" alt="aboutImg" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h1 className="heading1">Who We Are</h1>
            <div className="term-wrap">
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="team">
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
      </div>
    </section>
    <Footer />
  </>
);

export default AboutUs;
