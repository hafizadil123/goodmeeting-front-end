/* eslint-disable indent */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import LeftSide from '../LeftBar';
import shareSymbolImage from '../../../assets/images/share-symbol.png';
import controlImage from '../../../assets/images/controls.png';
import { BASE_URL } from '../../../utils/constants';
import Header from '../../NavBar';
const Stats = () => {
  const [userStats, setUserStats] = useState({});
  const [allQuestions, setQuestion] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`${BASE_URL}get-summary/`, {
        params: {
          userId: localStorage.getItem('userId'),
        },
        crossdomain: true,
      })
      .then(response => setUserStats(response && response.data))
      .catch(() => {})
      .then(() => {
        setLoading(false);
      });
  }, []);
  useEffect(() => {
    axios
      .get(`${BASE_URL}get-stats-by-user-id`, {
        params: {
          userId: localStorage.getItem('userId'),
        },
        crossdomain: true,
      })
      .then(response => setQuestion(response && response.data))
      .catch(() => {})
      .then(() => {
        setLoading(false);
      });
  }, []);
  return (
    <>
      <Header isShow />
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
            <div className="col-lg-5 col-md-2 col-6 align-self-center">
              <h3 className="text-themecolor m-b-0 m-t-0">Stats</h3>
            </div>
            <div className="col-lg-3 col-md-6 offset-md-1 col-6">
              <select
                id="sortingField"
                className="custom-select form-control input-sm col-md-6 pull-right "
              >
                <option>Last Year</option>
                <option>Age</option>
                <option>Address</option>
                <option>Country</option>
                <option>Married</option>
              </select>
            </div>
            <div className="col-lg-1 offset-lg-1 col-md-1 col-6 align-self-center">
              <img className src={shareSymbolImage} alt="share-img" />
            </div>
            <div className="col-lg-1 col-md-2 col-sm-6 col-6">
              <button type="button" className="btn pull-right btn-danger ">
                Export
              </button>
            </div>
          </div>
          <div className="row">
            {/* Column */}
            <div className="col-md-6 col-lg-3 col-xlg-3">
              <div className="card card-inverse card-info">
                <div className="box bg-info text-center">
                  <h6 className="text-white">
                    Total
                    <br /> Meeting
                  </h6>
                  <i className="fa fa-sort-desc down-red" />
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
                  <i className="fa fa-sort-desc down-red" />
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
                  <i className="fa fa-sort-desc down-red" />
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
                  <i className="fa fa-caret-up up-green" />
                  <h1 className="font-light text-white">
                    {' '}
                    {Number(userStats.avgScore).toFixed(1) || 0}
                  </h1>
                </div>
              </div>
            </div>
          </div>
          {/* ============================================================== */}
          {/* End Bread crumb and right sidebar toggle */}
          {/* ============================================================== */}
          {/* ============================================================== */}
          {/* Start Page Content */}
          {/* ============================================================== */}
          <div className="row page-titles filters">
            <div className="col-lg-4 col-md-6 col-8 align-self-center">
              <h3 className="text-themecolor m-b-0 m-t-0">Feedback Summary</h3>
            </div>
            <div className="col-lg-2 offset-lg-4 col-md-3 col-6">
              <div className="input-group mb-2">
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <img src={controlImage} alt="share-img" />
                  </div>
                </div>
                <select
                  id="sortingField"
                  className="custom-select form-control input-sm"
                >
                  <option>Filter</option>
                  <option>Age</option>
                  <option>Address</option>
                  <option>Country</option>
                  <option>Married</option>
                </select>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-6">
              <select
                id="sortingField"
                className="custom-select form-control input-sm"
              >
                <option>Sort By</option>
                <option>Age</option>
                <option>Address</option>
                <option>Country</option>
                <option>Married</option>
              </select>
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
                            {item.answers && item.answers.length > 0
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
                              : null}
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
