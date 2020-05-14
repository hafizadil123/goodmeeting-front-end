/* eslint-disable indent */
/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../../../../utils/constants';
import LeftSide from '../LeftBar';
import controlImage from '../../../../assets/images/controls.png';
import Header from '../../NavBar';
const AdminMeeting = () => {
  const [ meetingStats, setMeetingStats ] = useState({});
  const [meetings, setMeetings] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
		axios
			.get(`http://localhost:4567/admin/get-meetings-card-data/`, {
				headers: {
					authorization: localStorage.getItem('accessToken')
				}
			})
			.then((response) => setMeetingStats(response && response.data.meetings))
			.catch(() => {})
			.then(() => {
			});
	}, []);
  useEffect(() => {
    axios
      .get(`http://localhost:4567/admin/get-meetings/`, {
        headers: {
          authorization: localStorage.getItem('accessToken'),
        },
        crossdomain: true,
      })
      .then(response => setMeetings(response && response.data.meetings))
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
        <div className="container-fluid">
        <div className="row">
						<div className="col-md-6 col-lg-3 col-xlg-3">
							<div className="card card-inverse card-info">
								<div className="box bg-info text-center">
									<h6 className="text-white">
										Meetings this Week
										<br />
									</h6>
									{/* <i className="fa fa-sort-desc down-red" /> */}
									<h1 className="font-light text-white">{meetingStats.thisWeekMeetings || 0}</h1>
								</div>
							</div>
						</div>

            <div className="col-md-6 col-lg-3 col-xlg-3">
							<div className="card card-inverse card-info">
								<div className="box bg-info text-center">
									<h6 className="text-white">
										Total Meetings
										<br />
									</h6>
									{/* <i className="fa fa-sort-desc down-red" /> */}
									<h1 className="font-light text-white">{meetingStats.totalMeetings || 0}</h1>
								</div>
							</div>
						</div>


            <div className="col-md-6 col-lg-3 col-xlg-3">
							<div className="card card-inverse card-info">
								<div className="box bg-info text-center">
									<h6 className="text-white">
										Total Invitees
										<br />
									</h6>
									{/* <i className="fa fa-sort-desc down-red" /> */}
									<h1 className="font-light text-white">{meetingStats.totalInvitees || 0}</h1>
								</div>
							</div>
						</div>


            <div className="col-md-6 col-lg-3 col-xlg-3">
							<div className="card card-inverse card-info">
								<div className="box bg-info text-center">
									<h6 className="text-white">
										Total Feedbacks
										<br />
									</h6>
									{/* <i className="fa fa-sort-desc down-red" /> */}
									<h1 className="font-light text-white">{meetingStats.totalFeedbacks || 0}</h1>
								</div>
							</div>
						</div>
					</div>
          <div className="row page-titles filters">
            <div className="col-lg-6 col-md-4 col-12 align-self-center">
              <h3 className="text-themecolor m-b-0 m-t-0">Meetings</h3>
            </div>
            {/* <div className="col-lg-2 col-md-3 col-6">
              <div className="input-group mb-2">
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <img src={controlImage} alt="control-img" />
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
            </div> */}
            {/* <div className="col-lg-2 col-md-3 col-6">
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
            </div> */}
            <div className="col-lg-2 col-md-2">
              {/* <button class="btn pull-right btn-danger">Export</button> */}
              {/* <div className="exports">
                <button
                  type="button"
                  className="btn pull-right btn-danger dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Export
                </button>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">
                    Export as Word
                  </a>
                  <a className="dropdown-item" href="#">
                    Export as CSV
                  </a>
                  <a className="dropdown-item" href="#">
                    Export as PDF
                  </a>
                </div>
              </div> */}
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
                          <th>Organizer</th>
                          <th>Invitees</th>
                          <th>Feedbacks</th>
                          <th className="b2">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {meetings && Array.isArray(meetings) && !loading ? (
                          meetings.map(item => {
                            const [subject] = item.subject;
                            const id = item._id;
                            return (
                              <tr key={id}>
                                <td>{subject}</td>
                                <td>
                                  {(item.dateEnd &&
                                    item.dateEnd
                                      .split(',')
                                      .splice(1, 3)
                                      .toString()
                                      .replace(',', ' ')
                                      .split(',')[0]) ||
                                    'Not-Available'}
                                  <br />
                                  <span>
                                    {(item.dateEnd &&
                                      item.dateEnd
                                        .split(',')
                                        .splice(1, 3)
                                        .toString()
                                        .replace(',', ' ')
                                        .split(',')[1]) ||
                                      'Not-Available'}
                                  </span>
                                </td>
                                <td>{item.organizer}</td>
                                <td>{item.inviteesCount}</td>
                                <td>{item.feedbacksCount}</td>
                                <td>
                                  <Link to={`/admin/meeting-stats/${id}`}>
                                    View Details &gt;
                                  </Link>
                                </td>
                              </tr>
                            );
                          })
                        ) : (
                          <div className="loader">
                            <Loader
                              type="Audio"
                              color="#00BFFF"
                              height={100}
                              width={100}
                            />
                          </div>
                        )}
                      </tbody>
                      <tfoot>
                        <tr>
                          <td colSpan={5}>
                            <div className="text-right">
                              <ul className="pagination pagination-split m-t-30">
                                {' '}
                              </ul>
                            </div>
                          </td>
                        </tr>
                      </tfoot>
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

export default AdminMeeting;
