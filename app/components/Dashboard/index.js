/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
/* eslint-disable indent */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import ReactTooltip from 'react-tooltip';
import { Link } from 'react-router-dom';
import LeftSide from './LeftBar';
import { BASE_URL } from '../../utils/constants';
import Header from '../NavBar';
const Dashboard = ({ history }) => {
  const [userStats, setUserStats] = useState({});
  const [meetings, setMeetings] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (
      localStorage.getItem('accessToken') &&
      localStorage.getItem('role') === 'admin'
    ) {
      history.push('/admin/dashboard');
    } else if (
      localStorage.getItem('accessToken') &&
      localStorage.getItem('role') === 'user'
    ) {
      history.push('/dashboard');
    }
  }, []);

  useEffect(() => {
    axios
      .get(`${BASE_URL}get-feedback-stats/`, {
        params: {
          userId: localStorage.getItem('userId'),
        },
      })
      .then(response => setUserStats(response && response.data))
      .catch(() => {})
      .then(() => {
        setLoading(false);
      });
  }, []);
  useEffect(() => {
    axios
      .get(`${BASE_URL}get-meetings/`, {
        params: {
          userId: localStorage.getItem('userId'),
        },
      })
      .then(response => setMeetings(response && response.data))
      .catch(() => {})
      .then(() => {
        setLoading(false);
      });
  }, []);
  // useEffect(() => {
  //   axios
  //     .get(`${BASE_URL}get-meetings/`, {
  //       params: {
  //         userId: localStorage.getItem('userId'),
  //       },
  //     })
  //     .then(response => setMeetings(response && response.data))
  //     .catch(() => {})
  //     .then(() => {
  //       // always executed
  //     });
  // }, []);
  return (
    <>
      <Header isShow history={history} />
      <LeftSide />
      <div className="page-wrapper">
        {/* ============================================================== */}
        {/* Container fluid  */}
        {/* ============================================================== */}
        <div className="container-fluid">
          {/* ============================================================== */}
          {/* Bread crumb and right sidebar toggle */}
          {/* ============================================================== */}
          <div className="row page-titles">
            <div className="col-md-6 col-8 align-self-center">
              <h3 className="text-themecolor m-b-0 m-t-0">Dashboard</h3>
            </div>
            {/* <div className="col-md-6 col-4 align-self-center">
              <button
                className="btn pull-right btn-danger"
                type="button"
                onClick={() => {}}
              >
                Copy ID
              </button>
            </div> */}
          </div>
          {/* ============================================================== */}
          {/* End Bread crumb and right sidebar toggle */}
          {/* ============================================================== */}
          {/* ============================================================== */}
          {/* Start Page Content */}
          {/* ============================================================== */}
          <div className="row">
            <div className="col-md-6 col-lg-3 col-xlg-3">
              <div
                className="card card-inverse card-info"
                data-for="meetingThisWeek"
                data-tip="Lorem Ipsum is simply dummy text <br /> of the printing and typesetting industry."
              >
                <div className="box bg-info text-center">
                  <h6 className="text-white">
                    Meetings this Week
                    <br />
                  </h6>
                  {/* <i className="fa fa-sort-desc down-red" /> */}
                  <h1 className="font-light text-white">
                    {userStats.totalMeeting || 0}
                  </h1>
                </div>
                <ReactTooltip
                  // id="meetingThisWeek"
                  effect="solid"
                  border={true}
                  multiline={true}
                />
              </div>
            </div>

            <div className="col-md-6 col-lg-3 col-xlg-3">
              <div
                className="card card-primary card-inverse"
                data-for="positiveReview"
                data-tip="the amount of people who selected <br /> you hosted a good meeting."
              >
                <div className="box bg-info text-center">
                  <h6 className="text-white">
                    Positive
                    <br /> Reviews
                  </h6>
                  {/* <i className="fa fa-sort-desc down-red" /> */}
                  <h1 className="font-light text-white">
                    {userStats.positiveReviews || 0}
                  </h1>
                </div>
                <ReactTooltip
                  id="positiveReview"
                  effect="solid"
                  border={true}
                  multiline={true}
                />
              </div>
            </div>

            <div className="col-md-6 col-lg-3 col-xlg-3">
              <div
                className="card card-inverse card-success"
                data-for="negativeReview"
                data-tip="amount of people that stated there was <br /> room for improvement on your meeting."
              >
                <div className="box bg-info text-center">
                  <h6 className="text-white">
                    Negative
                    <br /> Reviews
                  </h6>
                  {/* <i className="fa fa-sort-desc down-red" /> */}
                  <h1 className="font-light text-white">
                    {userStats.negativeReviews || 0}
                  </h1>
                </div>
                <ReactTooltip
                  id="negativeReview"
                  effect="solid"
                  border={true}
                  multiline={true}
                />
              </div>
            </div>

            <div className="col-md-6 col-lg-3 col-xlg-3">
              <div
                className="card card-inverse card-warning"
                data-for="avgMeetingScore"
                data-tip="calculated out of 100 to give quantifiable <br /> insights into your overall meeting performance"
              >
                <div className="box bg-info text-center">
                  <h6 className="text-white">
                    Avg Meeting
                    <br /> Score
                  </h6>
                  {/* <i className="fa fa-caret-up up-green" /> */}
                  <h1 className="font-light text-white">
                    {userStats.avgScore || 0}
                  </h1>
                </div>
                <ReactTooltip
                  id="avgMeetingScore"
                  effect="solid"
                  border={true}
                  multiline={true}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row page-titles">
            <div className="col-md-6 col-8 align-self-center">
              <h3 className="text-themecolor m-b-0 m-t-0">Recent Meetings</h3>
            </div>
          </div>
          <div className="row recent-table">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <div className="table-responsive">
                    <table
                      className="table"
                      id="demo-foo-addrow"
                      data-page-size={10}
                    >
                      <thead>
                        <tr>
                          <th className="b1">Subject</th>
                          <th>Date &amp; Time</th>
                          <th>Members</th>
                          <th>Feedback</th>
                          <th className="b2">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {meetings && Array.isArray(meetings) && !loading ? (
                          meetings.map(item => {
                            const [subject] = item.meeting.subject;
                            const id = item.meeting._id;
                            return (
                              <tr key={id}>
                                <td>{subject}</td>
                                <td>
                                  {(item.meeting.dateStart &&
                                    item.meeting.dateStart
                                      .replace(', ', ' ')
                                      .split(',')[0]) ||
                                    'Not-Available'}
                                  <br />
                                  <span>
                                    {(item.meeting.dateStart &&
                                      item.meeting.dateStart
                                        .replace(', ', ' ')
                                        .split(',')[2]) ||
                                      'Not-Available'}
                                  </span>
                                </td>
                                <td>{item.members} </td>
                                <td>{item.feebackCount}</td>
                                <td>
                                  <Link to={`meeting-stats/${id}`}>
                                    View Details &gt;
                                  </Link>
                                </td>
                              </tr>
                            );
                          })
                        ) : (
                          <div className="loader text-center">
                            <Loader
                              type="Audio"
                              color="#00BFFF"
                              height={100}
                              width={100}
                            />
                          </div>
                        )}
                      </tbody>
                      {/* <tfoot>
                        <tr>
                          <td colSpan={5}>
                            <div className="text-right">
                              <ul className="pagination pagination-split m-t-30">
                                {' '}
                              </ul>
                            </div>
                          </td>
                        </tr>
                      </tfoot> */}
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
