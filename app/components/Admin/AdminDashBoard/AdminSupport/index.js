/* eslint-disable indent */
/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import { BASE_URL } from '../../../../utils/constants';
import LeftSide from '../LeftBar';
import controlImage from '../../../../assets/images/controls.png';
import Header from '../../NavBar';
import swal from 'sweetalert';


const AdminSupport = () => {
  const [contactUs, setContactUs] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`http://localhost:4567/admin/get-all-contact-us/`, {
        headers: {
          authorization: localStorage.getItem('accessToken'),
        },
        crossdomain: true,
      })
      .then(response => setContactUs(response && response.data.contactUs))
      .catch(() => {})
      .then(() => {
        setLoading(false);
      });
  }, []);

  async function  onChangeContactStatus(item) {
    const willChangeStatus = await swal({
      title: "Are you sure?",
      text: "Are you sure this ticket is resolved?",
      icon: "warning",
     // dangerMode: true,
     confirmButtonColor: '#000000',
     buttons: {
      cancel: true,
      confirm: {
        text: "Confirm",
        className: 'dialog-btn-color'
      },
    },
    });

    if(willChangeStatus){
      const contactId = item._id;
     try {
      const response = await axios.post(`http://localhost:4567/admin/change-contact-us-status/`,{contactId},{
        headers: {
        authorization: localStorage.getItem('accessToken'),
        'Content-Type': 'application/json'
      },
    });
      setContactUs(response && response.data.contactUs);
     } catch (error) {
       console.log(error);
     }
    }
    
   
  }

  

  return (
    <>
      <Header isShow />
      <LeftSide />
      <div className="page-wrapper">
        <div className="container-fluid">
          <div className="row page-titles filters">
            <div className="col-lg-6 col-md-4 col-12 align-self-center">
              <h3 className="text-themecolor m-b-0 m-t-0">Support Ticket</h3>
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
                          <th className="b1">Email</th>
                          <th>Name</th>
                          <th>Message</th>
                          <th>Date</th>
                          <th className="b2">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {contactUs && Array.isArray(contactUs) && !loading ? (
                          contactUs.map(item => {
                           // const [subject] = item.subject;
                            const id = item._id;
                            return (
                              <tr key={id}>
                                <td>{item.email}</td>
                                <td>{item.name}</td>
                                <td>{item.message}</td>
                                {/* <td>
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
                                </td> */}
                                <td>{moment(item.createdAt).format('LL')}</td>
                                <td>
                                <button className="btn btn-success" onClick={()=> onChangeContactStatus(item)}  disabled={item.status === 'resolved' ? true : false}>{item.status}</button>
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

export default AdminSupport;
