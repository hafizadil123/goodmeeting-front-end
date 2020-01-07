/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import { Doughnut } from '../../UI/charts';
import { BASE_URL } from '../../../utils/constants';
import shareImage from '../../../assets/images/share-symbol.png';
import LeftSide from '../LeftBar';
import Header from '../../NavBar';
import {data, doughnutOptions, doughnutOptions1, data1} from './constants'

const MeetingStats = ({ history }) => {
  const [meetingDetail, setMeetingDetail] = useState({});
  const [allQuestions, setQuestion] = useState([]);
  const [loading, setLoading] = useState(true);
  const {
    location: { pathname },
  } = history;
  const queryParam = pathname.split('/')[2];
  useEffect(() => {
    axios
      .get(`${BASE_URL}get-meeting-by-id/`, {
        params: {
          meetingId: queryParam,
        },
        crossdomain: true 
      })
      .then(response => setMeetingDetail(response && response.data))
      .catch(() => {})
      .then(() => {
        setLoading(false);
      });
  }, []);
  useEffect(() => {
    axios
      .get(`${BASE_URL}get-questions`, { crossdomain: true })
      .then(response => setQuestion(response && response.data))
      .catch(() => {})
      .then(() => {
        setLoading(false);
      });
  }, []);
  const {
    subject,
    members,
    dateEnd,
    totalFeedback,
    noResponse,
    avgMeetingScore,
    goodMeeting,
    badMeeting,
  } = meetingDetail && meetingDetail;
  // test();
  const getMeetingStatus = avg => {
    if (avg > 0 && avg <= 50) {
      return 'BAD Meeting';
    }
    if (avg > 50 && avg < 75) {
      return 'Okay Meeting';
    }
    return 'Good Meeting';
  };
  return (
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
              <h5 className="text-themecolor m-b-0 m-t-0">{subject}</h5>
            </div>
          </div>
          {/* ============================================================== */}
          {/* End Bread crumb and right sidebar toggle */}
          {/* ============================================================== */}
          {/* ============================================================== */}
          {/* Start Page Content */}
          {/* ============================================================== */}
          {/* <p id="positive" visibility="hidden" value={goodMeeting}>
            {goodMeeting}
          </p>
          <span id="negative" visibility="hidden" value={badMeeting}>
            {badMeeting}
          </span>
          <span id="no-response" visibility="hidden" value={noResponse}>
            {' '}
            {noResponse}
          </span> */}
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
                {!loading ? 
                  <div className="tab-pane active show" id="home" role="tabpanel">
                    <div className="home-wrap p-20">
                      <div className="row">
                        <div className="col-md-3">
                          <p>date &amp; time</p>
                          <h4 className="date"> {(dateEnd &&
                                    dateEnd
                                      .split(',').splice(1,3).toString().replace(',', ' ').split(',')[0]) ||
                                    'Not-Available'}</h4>
                          <span className="time"> {(dateEnd &&
                                      dateEnd
                                        .split(',').splice(1,3).toString().replace(',', ' ').split(',')[1])  ||
                                      'Not-Available'}</span>
                        </div>
                        <div className="col-md-3">
                          <p>Members</p>
                          <h4>{members}</h4>
                        </div>
                        <div className="col-md-3">
                          <p>feedback</p>
                          <h4 className="blue">{totalFeedback}</h4>
                        </div>
                        <div className="col-md-3">
                          <p>no response</p>
                          <h4 className="grey">{noResponse}</h4>
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
                                  <h3>{avgMeetingScore}</h3>
                                </div>
                                <small className="text-uppercase">
                               This is a<br />{' '}
                                  {getMeetingStatus(avgMeetingScore)}
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
                            <div className="col-lg-12 col-12 chart">
                              <Doughnut
                                data={data(goodMeeting, badMeeting, noResponse)} options={doughnutOptions}  width={400}
                                height={100}
                              />
                            
                            </div>
                          
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  : <div className="loader-detail">
                    <Loader
                      type="Audio"
                      color="#00BFFF"
                      height={100}
                      width={100}
                    />
                  </div>}
                <div
                  className="tab-pane g-meeting p-20"
                  id="profile"
                  role="tabpanel"
                >
                  <div className="row">
                    <div className="col-lg-12 mb-4">
                      {!loading && allQuestions && allQuestions.length > 0
                        ? allQuestions.map(item => (
                            <>
                              <div className="row">
                                <div className="col-md-12">
                                  <p className="quest"> {item.question} </p>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-md-12">
                                  <div className="row align-items-center ">
                                  
                                    <div className="doughnut3 a">
                                      <Doughnut
                                        data={data1(item.answers)} options={doughnutOptions1} 
                                      />
                                      
                                    </div>
                                    <div className="myreview">
                                      {item.answers && item.answers.length > 0
                                        ? item.answers.map(answerItem => (
                                          <p className="m-review option">
                                            {answerItem.answer}: {answerItem.count ? answerItem.count : 0}-{answerItem.count ? `(${(answerItem.count/ item.answers.length)*100})%` : '(0%)'}
                                          </p>
                                        ))
                                        : null}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </>
                        ))
                        :  <div className="loader">
                          <Loader
                            type="Audio"
                            color="#00BFFF"
                            height={100}
                            width={100}
                          />
                        </div>}
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
};

export default MeetingStats;
