import React from 'react';
import shareImage from '../../../assets/images/share-symbol.png';
import LeftSide from '../LeftBar';
import Header from '../../NavBar';
const MeetingStats = () => (
  <>
    <Header isShow />
    {/* ============================================================== */}
    {/* Page wrapper  */}
    {/* ============================================================== */}
    <LeftSide />
    <div className="page-wrapper">
      {/* ============================================================== */}
      {/* Container fluid  */}
      {/* ============================================================== */}
      <div className="container-fluid">
        {/* ============================================================== */}
        {/* Bread crumb and right sidebar toggle */}
        {/* ============================================================== */}
        <div className="row page-titles filters">
          <div className="col-lg-5 col-md-7 col-sm-7 col-12 align-self-center">
            <h3 className="text-themecolor m-b-0 m-t-0">Meeting Details</h3>
          </div>
          <div className="col-lg-1 offset-lg-5 col-md-1 offset-md-2 col-6 align-self-center myshare">
            <img src={shareImage} alt="share-img" />
          </div>
          <div className="col-lg-1 col-md-2 col-sm-6 col-6">
            <button className="btn pull-right btn-danger " type="button">
              Export
            </button>
          </div>
        </div>
        <div className="row page-titles filters">
          <div className="col-lg-12">
            <h5 className="text-themecolor m-b-0 m-t-0">
              Invitation: good meeting event @ Wed Oct 30, 2019 1:30pm - 2:30pm
              (PKT) (havea@goodmeeting.today)
            </h5>
          </div>
        </div>
        {/* ============================================================== */}
        {/* End Bread crumb and right sidebar toggle */}
        {/* ============================================================== */}
        {/* ============================================================== */}
        {/* Start Page Content */}
        {/* ============================================================== */}
        <div className="row meeting-stats">
          <div className="col-md-12">
            <ul className="nav nav-tabs" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active show"
                  data-toggle="tab"
                  href="#home"
                  role="tab"
                  aria-selected="true"
                >
                  <span className>STATS</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  onClick="g_meeting()"
                  data-toggle="tab"
                  href="#profile"
                  role="tab"
                  aria-selected="false"
                >
                  <span className>FEEDBACK</span>
                </a>
              </li>
            </ul>
            <div className="tab-content tabcontent-border">
              <div className="tab-pane active show" id="home" role="tabpanel">
                <div className="home-wrap p-20">
                  <div className="row">
                    <div className="col-md-3">
                      <p>date &amp; time</p>
                      <h4 className="date">April 17, 2019</h4>
                      <span className="time">14:07 IST</span>
                    </div>
                    <div className="col-md-3">
                      <p>Members</p>
                      <h4>12</h4>
                    </div>
                    <div className="col-md-3">
                      <p>feedback</p>
                      <h4 className="blue">10</h4>
                    </div>
                    <div className="col-md-3">
                      <p>no response</p>
                      <h4 className="grey">02</h4>
                    </div>
                  </div>
                  <hr />
                </div>
                <div className="home-wrap2 p-20">
                  <div className="row">
                    <div className="col-md-6 left-line">
                      <p className="text-uppercase">Meeting score</p>
                      <div className="row">
                        <div className="col-lg-6 col-12">
                          <div className="fz-mscore">
                            <div className="m-score">
                              <h3>84</h3>
                            </div>
                            <small className="text-uppercase">
                              This is a<br /> GOOd meeting
                            </small>
                          </div>
                        </div>
                        <div className="col-lg-6 col-12">
                          <p className="m-review">0 - 50 = Bad Meeting</p>
                          <p className="m-review">50 - 75 = Okay Meeting</p>
                          <p className="m-review">75 - 100 = Good Meeting</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <p className="text-uppercase">Round up</p>
                      <div className="row">
                        <div className="col-lg-4 col-12">
                          <canvas id="howmeet1" height={250}>
                            {' '}
                          </canvas>
                        </div>
                        <div className="col-lg-7 col-12">
                          <div className="col">
                            {/* <p class="m-review legend1">Good Meeting - 3 (10%)</p>
                                                  <p class="m-review legend2">Not a Good Meeting - 7 (10%)</p>
                                                  <p class="m-review legend3">No Response - 7 (10%)</p> */}
                            <div id="js-legend" className="chart-legend" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane g-meeting p-20"
                id="profile"
                role="tabpanel"
              >
                <div className="row">
                  <div className="col-lg-12 mb-4">
                    <div className="row">
                      <div className="col-md-12">
                        <p className="quest">
                          {' '}
                          Q1. How well prepared was the host for the meeting?
                          (Did it start on time, was there an agenda etc){' '}
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="row align-items-center ">
                          <div className="a">
                            <div id="js-legend3" className="chart-legend" />
                          </div>
                          <div className="doughnut2 a">
                            <canvas id="doughnut2" height={155}>
                              {' '}
                            </canvas>
                          </div>
                          <div className="myreview a">
                            <p className="m-review option">
                              There was no preparation: 2(100%)
                            </p>
                            <p className="m-review option">
                              There was very little preparation: 0(0%)
                            </p>
                            <p className="m-review option">
                              There was very little preparation: 0(0%)
                            </p>
                            <p className="m-review option">
                              There was very little preparation: 0(0%)
                            </p>
                            <p className="m-review option">
                              There was very little preparation: 0(0%)
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 mb-4">
                    <div className="row">
                      <div className="col-md-12">
                        <p className="quest">
                          {' '}
                          Q1. How well prepared was the host for the meeting?
                          (Did it start on time, was there an agenda etc){' '}
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="row align-items-center ">
                          <div className="a">
                            <div id="js-legend4" className="chart-legend" />
                          </div>
                          <div className="doughnut3 a">
                            <canvas id="doughnut3" height={155}>
                              {' '}
                            </canvas>
                          </div>
                          <div className="myreview a">
                            <p className="m-review option">
                              There was no preparation: 2(100%)
                            </p>
                            <p className="m-review option">
                              There was very little preparation: 0(0%)
                            </p>
                            <p className="m-review option">
                              There was very little preparation: 0(0%)
                            </p>
                            <p className="m-review option">
                              There was very little preparation: 0(0%)
                            </p>
                            <p className="m-review option">
                              There was very little preparation: 0(0%)
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ============================================================== */}
      {/* End PAge Content */}
      {/* ============================================================== */}
    </div>
    {/* ============================================================== */}
    {/* End Container fluid  */}
    {/* ============================================================== */}
    {/* ============================================================== */}
    {/* End Page wrapper  */}
    {/* ============================================================== */}
  </>
);

export default MeetingStats;
