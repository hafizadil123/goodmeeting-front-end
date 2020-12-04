/* eslint-disable no-unused-vars */
/* eslint-disable indent */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { Formik, Form, Field } from 'formik';
import Loader from 'react-loader-spinner';
import LeftSide from '../LeftBar';
import BarChart from './BarChart';
import LineChart from './LineChart';
// import shareSymbolImage from '../../../assets/images/share-symbol.png';
// import controlImage from '../../../assets/images/controls.png';
import { BASE_URL } from '../../../utils/constants';
// import { filterSchema } from './schema';
import Header from '../../NavBar';
const Stats = () => {
  const [userStats, setUserStats] = useState({});
  const [allQuestions, setQuestion] = useState([]);
  const [scores, setScores] = useState([]);
  const [eachMeetings, setEachMeetings] = useState([]);
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`${BASE_URL}get-summary/`, {
        params: {
          userId: localStorage.getItem('userId'),
          from,
          to,
        },
        crossdomain: true,
      })
      .then(response => setUserStats(response && response.data))
      .catch(() => {})
      .then(() => {
        setLoading(false);
      });
  }, [from, to]);
  useEffect(() => {
    axios
      .get(`${BASE_URL}get-stats-by-user-id`, {
        params: {
          userId: localStorage.getItem('userId'),
          from,
          to,
        },
        crossdomain: true,
      })
      .then(response => setQuestion(response && response.data))
      .catch(() => {})
      .then(() => {
        setLoading(false);
      });
  }, [from, to]);
  useEffect(() => {
    axios
      .post(`${BASE_URL}get-user-bar-stats/${localStorage.getItem('userId')}`, {
        from,
        to,
      })
      .then(response => {
        // eslint-disable-next-line no-shadow
        const { scores } = response && response.data;
        setScores(scores);
        const xaxis = scores.map((score, index) => index + 1);
        setEachMeetings(xaxis);
      })
      .catch(() => {})
      .then(() => {
        setLoading(false);
      });
  }, [from, to]);

  const applyFilter = e => {
    e.preventDefault();
  };
  return (
    <>
      <Header isShow />
      <LeftSide />
      <div className="page-wrapper">
        <from onSubmit={applyFilter}>
          <div className="form-group">
            <input
              onChange={e => setFrom(e.target.value)}
              type="date"
              name="from"
              placeholder="mm/dd/yyyy"
            />
          </div>
          <div className="form-group">
            <input
              onChange={e => setTo(e.target.value)}
              type="date"
              name="to"
              placeholder="mm/dd/yyyy"
            />
          </div>

          <button
            id="btn-search"
            type="submit"
            className="btn btn-outline btn-md btn-demo mb-20"
          >
            Apply
          </button>
        </from>
        {/* )}
        </Formik> */}
        {/* ============================================================== */}
        {/* Container fluid  */}
        {/* ============================================================== */}
        <div className="container-fluid">
          {/* ============================================================== */}
          {/* Bread crumb and right sidebar toggle */}
          {/* ============================================================== */}
          <div className="row page-titles filters">
            <div className="col-lg-5 col-md-2 col-6 align-self-center">
              <h3 className="text-themecolor m-b-0 m-t-0">Stats</h3>
            </div>
          </div>
          <div className="row">
            {/* Column */}
            <div className="col-md-6 col-lg-3 col-xlg-3">
              <div className="card card-inverse card-info">
                <div className="box bg-info text-center">
                  <h6 className="text-white">
                    Total
                    <br /> Meetings
                  </h6>
                  {/* <i className="fa fa-sort-desc down-red" /> */}
                  <h1 className="font-light text-white">
                    {' '}
                    {userStats.allMeetings || 0}
                  </h1>
                </div>
              </div>
            </div>
            {/* Column */}
            <div className="col-md-6 col-lg-3 col-xlg-3">
              <div className="card card-primary card-inverse">
                <div className="box bg-info text-center">
                  <h6 className="text-white">
                    Total
                    <br /> Feedbacks
                  </h6>
                  {/* <i className="fa fa-sort-desc down-red" /> */}
                  <h1 className="font-light text-white">
                    {' '}
                    {userStats.allFeedback || 0}
                  </h1>
                </div>
              </div>
            </div>
            {/* Column */}
            <div className="col-md-6 col-lg-3 col-xlg-3">
              <div className="card card-inverse card-success">
                <div className="box bg-info text-center">
                  <h6 className="text-white">
                    No
                    <br /> Response
                  </h6>
                  {/* <i className="fa fa-sort-desc down-red" /> */}
                  <h1 className="font-light text-white">
                    {' '}
                    {userStats.noResponse || 0}
                  </h1>
                </div>
              </div>
            </div>
            {/* Column */}
            <div className="col-md-6 col-lg-3 col-xlg-3">
              <div className="card card-inverse card-warning">
                <div className="box bg-info text-center">
                  <h6 className="text-white">
                    Avg Meeting
                    <br /> Score
                  </h6>
                  {/* <i className="fa fa-caret-up up-green" /> */}
                  <h1 className="font-light text-white">
                    {' '}
                    {Number(userStats.avgScore).toFixed(0) || 0}
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="row page-titles filters">
            <div className="col-lg-4 col-md-6 col-8 align-self-center">
              <h3 className="text-themecolor m-b-0 m-t-0">
                Overall Statistics
              </h3>
            </div>
          </div>
          <div className="row feedback-summary">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <BarChart scores={scores} eachMeetings={eachMeetings} />
                </div>
              </div>
            </div>
          </div>
          <div className="row page-titles filters">
            <div className="col-lg-4 col-md-6 col-8 align-self-center">
              <h3 className="text-themecolor m-b-0 m-t-0">Details</h3>
            </div>
          </div>
          <div className="row feedback-summary">
            {/* column */}
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  {!loading && allQuestions ? (
                    allQuestions.map(item => (
                      <>
                        <div className="row">
                          <div className="col-md-12">
                            <p className="quest">{item.question}</p>
                          </div>
                        </div>
                        <div className="row response">
                          <div className="col-md-12">
                            <LineChart answers={item.answers} />
                            {/* {item.answers && item.answers.length > 0
                              ? item.answers.map(answerItem => (
                                  <ul className="fz-response">
                                    <li>
                                      <p>Response:</p>
                                      <span>
                                        {answerItem.answer} -{' '}
                                        {answerItem.count
                                          ? answerItem.count
                                          : 0}{' '}
                                        {answerItem.count
                                          ? `(${answerItem.percentage.toFixed(
                                              2,
                                            )}%)`
                                          : '(0%)'}
                                      </span>
                                    </li>
                                  </ul>
                                ))
                              : null} */}
                          </div>
                        </div>
                      </>
                    ))
                  ) : (
                    <div className="stats-loader">
                      <Loader
                        type="Audio"
                        color="#00BFFF"
                        height={100}
                        width={100}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;
