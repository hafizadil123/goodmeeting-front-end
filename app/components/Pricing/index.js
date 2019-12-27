/* eslint-disable indent */
/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import Starter from '../../images/starter.png';
import tick from '../../images/tick-grey.png';
import member from '../../images/member.png';
import blue from '../../images/tick-blue.png';
import premium from '../../images/premium.png';
import NavBar from '../NavBar';
const Pricing = () => (
<>
  <NavBar isShow />
  <section className="section5 section1 pricing-page box-art">
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <h2 className="text-capitalize">plans that best serve your business needs</h2>
          <ul className="nav nav-pills" id="pills-tab" role="tablist">
            <li className="nav-item">
              <Link className="nav-link active" id="pills-yearly-tab" data-toggle="pill" to="#pills-yearly" role="tab" aria-controls="pills-yearly" aria-selected="true">Yearly</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" id="pills-yearly-tab" data-toggle="pill" to="#pills-monthly" role="tab" aria-controls="pills-monthly" aria-selected="false">Monthly</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="tab-content" id="pills-tabContent">
            <div className="tab-pane fade show active" id="pills-yearly" role="tabpanel" aria-labelledby="pills-yearly-tab">
              <div className="row">
                {/* Free Tier */}
                <div className="col-lg-4 col-md-4 p-0">
                  <div className="card mb-5 mb-lg-0 pricings">
                    <div className="card-body">
                      <img src={Starter} className="pricing-icon" />
                      <h5 className="card-title title1 text-center">Starter</h5>
                      <h5 className="card-title title2 text-uppercase text-center">FREE</h5>
                      <span className="btn-save">Save 20%</span>
                      <button onClick={()=>{}} className="btn btn-outline btn-md btn-line font-weight-normal plans-btn">Get Started</button>
                      <hr />
                      <ul className="fa-ul">
                        <li className="text-muted"><span className="fa-li"><img src={tick} /></span>GMT watermark in the email</li>
                        <li className="text-muted"><span className="fa-li"><img src={tick} /></span>Holding the data of last 15 meetings</li>
                        <li className="text-muted"><span className="fa-li"><img src={tick} /></span>1 free template</li>
                        <li className="text-muted"><span className="fa-li"><img src={tick} /></span>24/7 priority email support</li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Free Tier */}
                <div className="col-lg-4 col-md-4 p-0">
                  <div className="card mb-5 mb-lg-0 pricings mid-price">
                    <div className="card-body">
                      <img src={member} className="pricing-icon" />
                      <h5 className="card-title title1 text-center">coming soon</h5>
                      <h5 className="card-title title2 text-uppercase text-center">TBD</h5>
                      <span className="btn-save">TBD</span>
                      <Link to="#" className="btn btn-outline btn-md btn-line font-weight-normal plans-btn">Buy Plan</Link>
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
                </div>
                {/* Free Tier */}
                <div className="col-lg-4 col-md-4 p-0">
                  <div className="card mb-5 mb-lg-0 pricings">
                    <div className="card-body">
                      <img src={premium} className="pricing-icon" />
                      <h5 className="card-title title1 text-center">coming soon</h5>
                      <h5 className="card-title title2 text-uppercase text-center">TBD</h5>
                      <span className="btn-save">TBD</span>
                      <Link to="#" className="btn btn-outline btn-md btn-line font-weight-normal plans-btn">Learn More</Link>
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
  </section>
  <section className="section6">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <p className="blue">Let’s Get Started</p>
          <h2>Get A Personalised Experience With Us</h2>
          <Link to="/dashboard" className="btn btn-md btn-primary font-weight-normal btn-blue">REQUEST A DEMO</Link>
          <Link to="/payment" className="btn btn-outline btn-md btn-line font-weight-normal">GET STARTED</Link>
        </div>
      </div>
    </div>
  </section>
</>

);

export default Pricing;
