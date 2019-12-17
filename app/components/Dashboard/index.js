import React from 'react';
import LeftSide from './LeftBar';
const Dashboard = () => (
  <>
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
          <div className="col-md-6 col-4 align-self-center">
            <button className="btn pull-right btn-danger">Copy ID</button>
          </div>
        </div>
        {/* ============================================================== */}
        {/* End Bread crumb and right sidebar toggle */}
        {/* ============================================================== */}
        {/* ============================================================== */}
        {/* Start Page Content */}
        {/* ============================================================== */}
        <div className="row">
          <div className="col-md-6 col-lg-3 col-xlg-3">
            <div className="card card-inverse card-info">
              <div className="box bg-info text-center">
                <h6 className="text-white">
                  Meetings this
                  <br /> Week
                </h6>
                <i className="fa fa-sort-desc down-red" />
                <h1 className="font-light text-white">17</h1>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 col-xlg-3">
            <div className="card card-primary card-inverse">
              <div className="box bg-info text-center">
                <h6 className="text-white">
                  Positive
                  <br /> Reviews
                </h6>
                <i className="fa fa-sort-desc down-red" />
                <h1 className="font-light text-white">14</h1>
              </div>
            </div>
          </div>

            <div className="col-md-6 col-lg-3 col-xlg-3">
              <div className="card card-inverse card-success">
                <div className="box bg-info text-center">
                  <h6 className="text-white">
                  Negative
                    <br /> Reviews
                  </h6>
                  <i className="fa fa-sort-desc down-red" />
                  <h1 className="font-light text-white">36</h1>
                </div>
              </div>
            </div>

              <div className="col-md-6 col-lg-3 col-xlg-3">
            <div className="card card-inverse card-warning">
                  <div className="box bg-info text-center">
                <h6 className="text-white">
                  Avg Meeting
                      <br /> Score
                    </h6>
                <i className="fa fa-caret-up up-green" />
                    <h1 className="font-light text-white">72</h1>
              </div>
                </div>
              </div>
            </div>
          </div>
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
                          <tr>
                            <td>asdDaily Standup Meeting…</td>
                            <td>
                          April 17, 2019
                          <br />
                              <span>12.10 PM</span>
                        </td>
                            <td>12</td>
                            <td>10</td>
                            <td>
                            <a href>View Details &gt;</a>
                            </td>
                          </tr>
                          <tr>
                            <td>Daily Standup Meeting…</td>
                            <td>
                          April 17, 2019
                          <br />
                              <span>12.10 PM</span>
                        </td>
                            <td>12</td>
                            <td>
                          10 <i className="fa fa-caret-up up-green" />
                            </td>
                            <td>
                              <a href>View Details &gt;</a>
                            </td>
                          </tr>
                          <tr>
                            <td>Daily Standup Meeting…</td>
                            <td>
                          April 17, 2019
                            <br />
                              <span>12.10 PM</span>
                            </td>
                            <td>12</td>
                            <td>8</td>
                            <td>
                              <a href>View Details &gt;</a>
                            </td>
                          </tr>
                      <tr>
                            <td>Daily Standup Meeting…</td>
                            <td>
                          April 17, 2019
                          <br />
                              <span>12.10 PM</span>
                            </td>
                            <td>12</td>
                            <td>8</td>
                            <td>
                              <a href>View Details &gt;</a>
                            </td>
                          </tr>
                      <tr>
                            <td>Daily Standup Meeting…</td>
                            <td>
                          April 17, 2019
                              <br />
                              <span>12.10 PM</span>
                            </td>
                            <td>12</td>
                            <td>
                          8 <i className="fa fa-caret-down down-red" />
                            </td>
                          <td>
                              <a href>View Details &gt;</a>
                        </td>
                          </tr>
                          <tr>
                            <td>Daily Standup Meeting…</td>
                            <td>
                          April 17, 2019
                              <br />
                              <span>12.10 PM</span>
                            </td>
                          <td>12</td>
                            <td>10</td>
                          <td>
                              <a href>View Details &gt;</a>
                          </td>
                          </tr>
                          <tr>
                            <td>asdDaily Standup Meeting…</td>
                            <td>
                          April 17, 2019
                              <br />
                              <span>12.10 PM</span>
                            </td>
                        <td>12</td>
                            <td>10</td>
                            <td>
                              <a href>View Details &gt;</a>
                            </td>
                          </tr>
                          <tr>
                            <td>Daily Standup Meeting…</td>
                            <td>
                          April 17, 2019
                              <br />
                              <span>12.10 PM</span>
                            </td>
                          <td>12</td>
                            <td>
                          10 <i className="fa fa-caret-up up-green" />
                            </td>
                            <td>
                              <a href>View Details &gt;</a>
                            </td>
                      </tr>
                          <tr>
                        <td>Daily Standup Meeting…</td>
                            <td>
                          April 17, 2019
                              <br />
                          <span>12.10 PM</span>
                            </td>
                            <td>12</td>
                            <td>8</td>
                            <td>
                              <a href>View Details &gt;</a>
                            </td>
                        </tr>
                          <tr>
                        <td>Daily Standup Meeting…</td>
                            <td>
                          April 17, 2019
                              <br />
                              <span>12.10 PM</span>
                            </td>
                            <td>12</td>
                            <td>8</td>
                            <td>
                              <a href>View Details &gt;</a>
                            </td>
                      </tr>
                          <tr>
                          <td>Daily Standup Meeting…</td>
                            <td>
                          April 17, 2019
                              <br />
                              <span>12.10 PM</span>
                            </td>
                            <td>12</td>
                        <td>
                          8 <i className="fa fa-caret-down down-red" />
                          </td>
                            <td>
                              <a href>View Details &gt;</a>
                            </td>
                      </tr>
                          <tr>
                            <td>Daily Standup Meeting…</td>
                            <td>
                          April 17, 2019
                              <br />
                              <span>12.10 PM</span>
                            </td>
                            <td>12</td>
                          <td>10</td>
                            <td>
                              <a href>View Details &gt;</a>
                            </td>
                          </tr>
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
  </>
);

export default Dashboard;
