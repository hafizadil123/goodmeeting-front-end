/* eslint-disable indent */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable prettier/prettier */
import React,{ useEffect } from 'react';
import play from '../../images/play.png';
import MainMeeting from '../../images/main-meeting.png';
import stated from '../../images/started.png';
import Meeting from '../../images/meeting.png';
import Feedback from '../../images/feedback.png';
import Board from '../../images/board.png';
import tick from '../../images/tick-grey.png';
import business from '../../images/business.png';
import blue from '../../images/tick-blue.png';
import premium from '../../images/premium.png';
import gmail from '../../images/gmail.png';
import outlook from '../../images/outlook.png';
import dash from '../../images/dash.png';
import RegisterHeader from '../Header';
const HomePage = ({history}) => {
  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      history.push('/dashboard');
    }
  }, []);
  return (
  <div>
    <RegisterHeader />
  <section className="section1 box-art">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h1 className="heading1">A Good Meeting starts off with</h1>
          <a href="#" className="btn-link">havea@goodmeeting.today</a>
          <p>Create an account. Keep this in CC and Voila, we will do everything to keep your<br /> meetings checked. Log back in to receive feedback and stats, all at one place.</p>
          <a href="#" className="btn btn-md btn-primary btn-blue">Get Started for Free! </a>
          <div className="gmail">
          <small>Supports</small>
            <ul>
              <li>
              <img src={gmail} className="" />
              <small className="gtxt">Gmail</small>
              </li>
              <li>
              <img src={outlook} className="" />
               <small className="gtxt">Outlook</small>
              </li>
            </ul>
          </div> 

        </div>
        <div className="col-md-6">
          <img src={MainMeeting} className="persons3" />
        </div>
        <div className="col-md-12 myabout">
          <p className="blue">About Good Meeting</p>
          <h2 className="text-capitalize">Simplify the process of getting feedback<br /> from your meeting audience</h2>
        </div>

      </div>
    </div>
  </section>
  <section className="section2">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="left-div">
            <img src={stated} />
            <h2>Get started with a FREE* Account</h2>
            <p>It takes less than 2 minutes to onboard<br /> and kick off.</p>
            <a href="#" className="btn btn-outline btn-md btn-line">Get Started Now</a>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="right-div">
            <img src={Meeting} />
            <h2>Start a new meeting</h2>
            <p>Just don’t forget to keep<br /> “havea@goodmeeting.today” in CC<br /> and we will start crunching numbers for you.</p>
            <a href="#" className="btn btn-outline btn-md btn-line">Get Started Now</a>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="left-div">
            <img src={Feedback} />
            <h2>Get the feedback</h2>
            <p>We will assess the meeting score for<br /> you and let’s see if you can beat your<br /> own personal best.</p>
            <a href="#" className="btn btn-outline btn-md btn-line">Start Trial</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="section3">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2 className="text-capitalize" style={{color: 'white'}}>This is how it would look when you are all set for the meeting.</h2>
          <img src={dash} className="" />
        </div>
      </div>
    </div>
  </section>
  <section className="section4">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <p className="blue">Ground Breaking Stats</p>
          <h2 className="text-capitalize">While Making the things visually ananlyzable and cruching data into graphs<br /> for you, we didn’t realise the digit counter was increasing for us too.</h2>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-3">
          <div className="counter">
            <h1>3</h1>
            <p className="counter-cap">Years of Journey</p>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam nonumy eirmod tempor</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="counter">
            <h1>517</h1>
            <p className="counter-cap">Clients</p>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam nonumy eirmod tempor</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="counter">
            <h1>34</h1>
            <p className="counter-cap">Team Members</p>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam nonumy eirmod tempor</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* <section className="section5">
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <p className="blue">Pricing Plans for All</p>
          <h2>Choose a Plan that works for you</h2>
          <ul className="nav nav-pills" id="pills-tab" role="tablist">
            <li className="nav-item">
              <a className="nav-link active" id="pills-yearly-tab" data-toggle="pill" href="#pills-yearly" role="tab" aria-controls="pills-yearly" aria-selected="true">Yearly</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="pills-yearly-tab" data-toggle="pill" href="#pills-monthly" role="tab" aria-controls="pills-monthly" aria-selected="false">Monthly</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="tab-content" id="pills-tabContent">
            <div className="tab-pane fade show active" id="pills-yearly" role="tabpanel" aria-labelledby="pills-yearly-tab">
              <div className="row"> */}
                {/* Free Tier */}
                {/* <div className="col-lg-4 col-md-4 p-0">
                  <div className="card mb-5 mb-lg-0 pricings">
                    <div className="card-body">
                      <img src={stated} className="pricing-icon" />
                      <h5 className="card-title title1 text-center">Starter</h5>
                      <h5 className="card-title title2 text-uppercase text-center">FREE</h5>
                      <a href="#" className="btn btn-outline btn-md btn-line font-weight-normal">Get Started</a>
                      <hr />
                      <ul className="fa-ul">
                        <li className="text-muted"><span className="fa-li"><img src={tick} /></span>GMT watermark in the email</li>
                        <li className="text-muted"><span className="fa-li"><img src={tick} /></span>Holding the data of last 15 meetings</li>
                        <li className="text-muted"><span className="fa-li"><img src={tick} /></span>1 free template</li>
                        <li className="text-muted"><span className="fa-li"><img src={tick} /></span>24/7 priority email support</li>
                      </ul>
                    </div>
                  </div>
                </div> */}
                {/* Free Tier */}
                {/* <div className="col-lg-4 col-md-4 p-0">
                  <div className="card mb-5 mb-lg-0 pricings mid-price">
                    <div className="card-body">
                      <img src={business} className="pricing-icon" />
                      <h5 className="card-title title1 text-center">Business</h5>
                      <h5 className="card-title title2 text-uppercase text-center">$17.99</h5>
                      <a href="#" className="btn btn-md btn-primary font-weight-normal btn-blue">BUY PLAN</a>
                      <hr />
                      <ul className="fa-ul">
                        <li className><span className="fa-li"><img src={blue} /></span>Custom Templates</li>
                        <li className><span className="fa-li"><img src={blue} /></span>Store unlimited meetings data</li>
                        <li className><span className="fa-li"><img src={blue} /></span>Complete access to our Template Library</li>
                        <li className><span className="fa-li"><img src={blue} /></span>White labelled emails</li>
                        <li className><span className="fa-li"><img src={blue} /></span>24/7 expedited email support</li>
                      </ul>
                    </div>
                  </div>
                </div> */}
                {/* Free Tier */}
                {/* <div className="col-lg-4 col-md-4 p-0">
                  <div className="card mb-5 mb-lg-0 pricings">
                    <div className="card-body">
                      <img src={premium} className="pricing-icon" />
                      <h5 className="card-title title1 text-center">Premium</h5>
                      <h5 className="card-title title2 text-uppercase text-center">$39.99</h5>
                      <a href="#" className="btn btn-outline btn-md btn-line font-weight-normal">Learn More</a>
                      <hr />
                      <ul className="fa-ul">
                        <li className><span className="fa-li"><img src={tick} /></span>Multilevel access for mid &amp; large enterprises.</li>
                        <li className><span className="fa-li"><img src={tick} /></span>Unlimited meeting data storage.</li>
                        <li className><span className="fa-li"><img src={tick} /></span>Complete access to template library.</li>
                        <li className><span className="fa-li"><img src={tick} /></span>Custom templates</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="pills-monthly" role="tabpanel" aria-labelledby="pills-monthly-tab">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> */}
  <section className="section6">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <p className="blue" href="javascript:void(0);">Let’s Get Started</p>
          <h2 className="text-capitalize">Sign up with us today and get all the answers you need!!</h2>
          <a data-toggle="modal" data-target="#request-demo" className="btn btn-md btn-primary font-weight-normal btn-blue">REQUEST A DEMO</a>
          <a href="#" className="btn btn-outline btn-md btn-line font-weight-normal">GET STARTED</a>
        </div>
      </div>
    </div>
  </section>
  <div id="request-demo" className="modal fade edit-user request-demo" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-xl modal-dialog-centered">
      <div className="modal-content">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
        <div className="modal-body">
          <h4>Get a Demo of <span className="blue-c">GoodMeeting</span> Today</h4>
          <form className="m-t-40">
            <div className="row">
              <div className="col-md-6 col-12">
                <div className="form-group">
                  <input type="text" className="form-control col-sm-8 offset-md-3 col-12" placeholder="First Name" />
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="form-group">
                  <input type="text" className="form-control col-sm-8 col-12" placeholder="Last Name" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-12">
                <div className="form-group">
                  <input type="text" className="form-control col-sm-8 offset-md-3 col-12" placeholder="Company" />
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="form-group">
                  <input type="text" className="form-control col-sm-8 col-12" placeholder="Job Title" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-12">
                <div className="form-group">
                  <input type="email" className="form-control col-sm-8 offset-md-3 col-12" placeholder="Email" />
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="form-group">
                  <input type="tel" className="form-control col-sm-8 col-12" placeholder="Phone" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-12">
                <div className="form-group">
                  <input type="text" className="form-control col-sm-8 offset-md-3 col-12" placeholder="Company Size" />
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="form-group">
                  <select className="custom-select col-sm-8 col-12" id>
                    <option selected>Access</option>
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row justify-content-center m-t-40">
              <div className="col-sm-5 col-8">
                <button type="button" className="btn btn-block btn-danger">Get Your Free Demo</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

   )};

export default HomePage;
