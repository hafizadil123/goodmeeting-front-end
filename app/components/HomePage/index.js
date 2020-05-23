/* eslint-disable react/prop-types */
/* eslint-disable indent */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import MainMeeting from '../../images/main-meeting.png';
import outlook from '../../images/outlook.png';
import stated from '../../images/started.png';
import Meeting from '../../images/meeting.png';
import Feedback from '../../images/feedback.png';
import Crunch from '../../images/crunch.png';
import gmail from '../../images/gmail.png';
import fig1 from '../../images/fig1.svg';
import fig2 from '../../images/fig2.svg';
import ands from '../../images/and.svg';
import downarrow from '../../images/downarrow.svg';
import slide1 from '../../images/slide1.png';
import slide2 from '../../images/slide2.png';
import slide3 from '../../images/slide3.png';
import testi1 from '../../images/testi1.png';
import quote from '../../images/quote.png';

import RegisterHeader from '../Header';

const mainslider = {
	dots: true,
	arrows: false,
	infinite: true,
	speed: 1000,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 3000,
	pauseOnHover: true,
	easing: 'linear'
};
const testimonialslider = {
	dots: true,
	arrows: false,
	infinite: true,
	speed: 1000,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 3000,
	pauseOnHover: true,
	easing: 'linear'
};


const HomePage = ({ history }) => {
	useEffect(() => {
		if (localStorage.getItem('accessToken') && localStorage.getItem('role') === 'admin') {
			history.push('/admin/dashboard');
		} else if (localStorage.getItem('accessToken') && localStorage.getItem('role') === 'user') {
			history.push('/dashboard');
		}
	}, []);
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div>
			<RegisterHeader />
			<section className="section1 box-art">
				<div className="container">
					<div className="row">
						<div className="col-md-6">
							<h1 className="heading1">A Good Meeting starts off with</h1>
							<Link to="/" className="btn-link">
								havea@goodmeeting.today
							</Link>
							<p>
								It’s simple; create an account and keep us in cc. We will then do the rest to give you
								feedback on your meetings, just log back in to receive your statistics.
							</p>
							<Link to="/register" className="btn btn-md btn-primary btn-blue">
								Get Started for Free!{' '}
							</Link>
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
							<h2 className="">
								Unproductive meetings waste both money and time for employees and organisations
							</h2>
							<h3>To put these in figures…</h3>
						</div>
					</div>
					<div className="row align-items-center justify-content-center figs">
						<div className="col-sm-4">
							<img src={fig1} className="d-block m-auto" />
							<p>
								It costs the United States<br /> <span className="red">$37 billion/year*</span>
							</p>
						</div>
						<div className="col-sm-3">
							<img src={ands} className="d-block m-auto and" />
						</div>
						<div className="col-sm-4">
							<img src={fig2} className="d-block m-auto" />
							<p>
								In 2008 it took <span className="red">15%</span> of<br /> an organization’s Collective
								Time*
							</p>
						</div>
						<div className="col-sm-12">
							<p>
								Despite the amount of resources in both time and money,<br /> executives consider more
								than <span className="red">67%</span> of those meetings to be{' '}
								<span className="red">failures</span>*
							</p>
						</div>
						<div className="downarrow">
							<img src={downarrow} className="d-block m-auto" />
						</div>
						<div className="col-sm-12">
							<h2>That’s where we come in</h2>
							<p>
								<span className="blue">GoodMeeting</span> are tackling the relentless issue of
								inefficient, unproductive and unnecessary meetings<br /> through a two-step process that
								provides feedback on the conferences you hold<br /> as well as allowing you to
								critically evaluate those you participate in.
							</p>
							<h3>All through a simple, and easy to use platform.</h3>
							<h2>How it works in 4 steps..</h2>
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
								<h2>Create an account</h2>
								<p>
									Sign up for free,<br /> it takes less than 2 minutes.
								</p>
								<Link to="/register" className="btn btn-outline btn-md btn-line">
									Get Started Now
								</Link>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12">
							<div className="right-div">
								<img src={Meeting} />
								<h2>Start a new meeting</h2>
								<p>
									Keep <strong>“havea@goodmeeting.today”</strong>
									<br /> in CC on meeting invites
								</p>
								<Link to="/register" className="btn btn-outline btn-md btn-line">
									Get Started Now
								</Link>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12">
							<div className="left-div">
								<img src={Feedback} />
								<h2>Gathering feedback</h2>
								<p>
									Customised emails will be sent to your<br /> meeting participants asking them to<br />{' '}
									fill out a brief survey
								</p>
								<Link to="/register" className="btn btn-outline btn-md btn-line">
									Start Trial
								</Link>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12">
							<div className="right-div">
								<img src={Crunch} />
								<h2>It’s crunching time</h2>
								<p>
									We analyse the data from the feedback into<br /> graphs for you to view on your
									dashboard.<br /> You will also receive a meeting score
								</p>
								<Link to="/register" className="btn btn-outline btn-md btn-line">
									Get Started Now
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="section3">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<h2 className="text-capitalize" style={{ color: 'white' }}>
								This is how it would look when you are all set for the meeting.
							</h2>

							<Slider {...mainslider}>
								<div>
									<img src={slide3} className="" />
								</div>
								<div>
									<img src={slide1} className="" />
								</div>
								<div>
									<img src={slide2} className="" />
								</div>
							</Slider>
						</div>
					</div>
				</div>
			</section>
			<section className="section4">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<h2 className="text-capitalize">Testimonials</h2>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12">
							<Slider {...testimonialslider}>
								<div>
									<div className="testiwrap">
										<div className="testiimg">
											<img src={testi1} className="" />
											<p className="testiname">MILAN BOTICA</p>
											<p className="testidesg">Senior UX designer</p>
										</div>
										<div className="testicontent">
											<img src={quote} className="left-q" />
											<p>
												The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax
												quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz,
												vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab
												quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens.
											</p>
											<img src={quote} className="right-q" />
										</div>
									</div>
								</div>

								<div>
									<div className="testiwrap">
										<div className="testiimg">
											<img src={testi1} className="" />
											<p className="testiname">MILAN </p>
											<p className="testidesg">Senior UX</p>
										</div>
										<div className="testicontent">
											<img src={quote} className="left-q" />
											<p>
												The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax
												quiz prog. Junk MTV quiz graced by fox whelps.
											</p>
											<img src={quote} className="right-q" />
										</div>
									</div>
								</div>
							</Slider>
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
              <Link className="nav-link active" id="pills-yearly-tab" data-toggle="pill" href="#pills-yearly" role="tab" aria-controls="pills-yearly" aria-selected="true">Yearly</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" id="pills-yearly-tab" data-toggle="pill" href="#pills-monthly" role="tab" aria-controls="pills-monthly" aria-selected="false">Monthly</Link>
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
                      <Link to="/" className="btn btn-outline btn-md btn-line font-weight-normal">Get Started</Link>
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
                      <Link to="/" className="btn btn-md btn-primary font-weight-normal btn-blue">BUY PLAN</Link>
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
                      <Link to="/" className="btn btn-outline btn-md btn-line font-weight-normal">Learn More</Link>
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
							<p className="blue" href="javascript:void(0);">
								Let’s Get Started
							</p>
							<h2 className="text-capitalize">
								Sign up with us today and get all the answers you need!!
							</h2>
							{/* <Link data-toggle="modal" data-target="#request-demo" className="btn btn-md btn-primary font-weight-normal btn-blue">REQUEST A DEMO</Link> */}
							<Link to="/contact-us" className="btn btn-md btn-primary font-weight-normal btn-blue">
								REQUEST A DEMO
							</Link>
							<Link to="/register" className="btn btn-outline btn-md btn-line font-weight-normal">
								GET STARTED
							</Link>
						</div>
					</div>
				</div>
			</section>
			<div
				id="request-demo"
				className="modal fade edit-user request-demo"
				tabIndex={-1}
				role="dialog"
				aria-labelledby="myModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog modal-xl modal-dialog-centered">
					<div className="modal-content">
						<button type="button" className="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">×</span>
						</button>
						<div className="modal-body">
							<h4>
								Get a Demo of <span className="blue-c">GoodMeeting</span> Today
							</h4>
							<form className="m-t-40">
								<div className="row">
									<div className="col-md-6 col-12">
										<div className="form-group">
											<input
												type="text"
												className="form-control col-sm-8 offset-md-3 col-12"
												placeholder="First Name"
											/>
										</div>
									</div>
									<div className="col-md-6 col-12">
										<div className="form-group">
											<input
												type="text"
												className="form-control col-sm-8 col-12"
												placeholder="Last Name"
											/>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-md-6 col-12">
										<div className="form-group">
											<input
												type="text"
												className="form-control col-sm-8 offset-md-3 col-12"
												placeholder="Company"
											/>
										</div>
									</div>
									<div className="col-md-6 col-12">
										<div className="form-group">
											<input
												type="text"
												className="form-control col-sm-8 col-12"
												placeholder="Job Title"
											/>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-md-6 col-12">
										<div className="form-group">
											<input
												type="email"
												className="form-control col-sm-8 offset-md-3 col-12"
												placeholder="Email"
											/>
										</div>
									</div>
									<div className="col-md-6 col-12">
										<div className="form-group">
											<input
												type="tel"
												className="form-control col-sm-8 col-12"
												placeholder="Phone"
											/>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-md-6 col-12">
										<div className="form-group">
											<input
												type="text"
												className="form-control col-sm-8 offset-md-3 col-12"
												placeholder="Company Size"
											/>
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
										<button type="button" className="btn btn-block btn-danger">
											Get Your Free Demo
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
