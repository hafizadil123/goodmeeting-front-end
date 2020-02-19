import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Formik, Form, Field } from 'formik';
import userImage from '../../../assets/images/userIcon.png';
import { BASE_URL, BASE_IMAGE_URL } from '../../../utils/constants';
import Header from '../../NavBar';
import LeftSide from '../LeftBar';
import { ProfileSchema } from '../../Register/schema';
const MyAccount = ({ history }) => {
  const [loading, setLoading] = useState(false);
  const [imageSet, setImage] = useState(null);
  const [profile, setProfile] = useState(null);
  useEffect(() => {
    axios
      .get(`${BASE_URL}get-profile`, {
        params: {
          userId: localStorage.getItem('userId'),
        },
        crossdomain: true,
      })
      .then(response => setProfile(response && response.data.user))
      .catch(() => {})
      .then(() => {
        // always executed
      });
  }, []);
  function updateProfile(userInfo, actions) {
    setLoading(true);
    const { name, newPassword, avatar, oldPassword } = userInfo;
    const formData = new FormData();
    formData.append('name', name || localStorage.getItem('name'));
    formData.append('email', localStorage.getItem('email'));
    formData.append('oldPassword', oldPassword);
    formData.append('newPassword', newPassword);
    formData.append('avatar', avatar);
    axios
      .post(
        `${BASE_URL}update-profile/?userId=${localStorage.getItem('userId')}`,
        formData,
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      )
      .then(response => {
        const { message, success } = response && response.data;
        if (success) {
          toast.success(message);
          setImage(null);
          setProfile(response && response.data.user);
        } else {
          toast.error(message);
        }
        setLoading(false);
      })
      .catch(err => {
        const { data } = err.response;
        setLoading(false);
        toast.error(data.message);
      })
      .then(() => {
        setLoading(false);
      });
    // userLoginRequest('auth/login', { email, password }, history);
  }
  return (
    <>
      <Header isShow history={history} />
      <LeftSide />
      {/* ============================================================== */}
      {/* Page wrapper  */}
      {/* ============================================================== */}
      <div className="page-wrapper">
        {/* ============================================================== */}
        {/* Container fluid  */}
        {/* ============================================================== */}
        <div className="container-fluid">
          {/* ============================================================== */}
          {/* Bread crumb and right sidebar toggle */}
          {/* ============================================================== */}
          <div className="row page-titles filters">
            <div className="col-lg-6 col-md-4 col-12 align-self-center">
              <h3 className="text-themecolor m-b-0 m-t-0">My Accounts</h3>
            </div>
          </div>
          {/* ============================================================== */}
          {/* End Bread crumb and right sidebar toggle */}
          {/* ============================================================== */}
          {/* ============================================================== */}
          {/* Start Page Content */}
          {/* ============================================================== */}
          <div className="row myaccount">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <h3>My Profile</h3>
                  <Formik
                    initialValues={{
                      name: '',
                      email: '',
                      oldPassword: '',
                      newPassword: '',
                      confirmPassword: '',
                    }}
                    validationSchema={ProfileSchema}
                    onSubmit={(values, actions) => {
                      const resultValues = {
                        ...values,
                        avatar: imageSet,
                      };
                      updateProfile(resultValues, actions);
                    }}
                  >
                    {({ errors, touched, isSubmitting }) => (
                      <Form disabled={isSubmitting} noValidate>
                        <label className="custom-file-upload">
                          <input
                            type="file"
                            id="myfile"
                            name="myfile"
                            accept=".jpg, .jpeg, .png"
                            multiple
                            onChange={event => setImage(event.target.files[0])}
                          />
                          <div>
                            <img
                              id="blah"
                              src={
                                profile && profile.avatar
                                  ? `${BASE_IMAGE_URL}${profile.avatar}`
                                  : userImage
                              }
                              alt="user"
                            />
                          </div>
                          <span className="upload-txt">Edit Profile Image</span>
                          <span className="choose">Choose</span>
                          <label>{imageSet ? imageSet.name : ''}</label>
                        </label>
                        <div className="d-flex">
                          <Field
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder={
                              (profile && profile.fullName) ||
                              localStorage.getItem('name')
                            }
                            autoComplete="off"
                          />
                          <Field
                            name="email"
                            type="text"
                            className="form-control"
                            placeholder="Email"
                            autoComplete="off"
                            value={
                              (profile && profile.email) ||
                              localStorage.getItem('email')
                            }
                            readOnly
                          />
                        </div>
                        {errors.name && touched.name ? (
                          <p
                            className="validationErrorMessage"
                            style={{ marginLeft: '11px' }}
                          >
                            {errors.name}
                          </p>
                        ) : null}
                        <div className="changepass">
                          <h3>Change Password</h3>
                          <div className="d-flex">
                            <Field
                              type="password"
                              name="oldPassword"
                              className="form-control"
                              placeholder="Enter Old Password"
                              autoComplete="off"
                            />
                          </div>
                          {errors.oldPassword && touched.oldPassword ? (
                            <p
                              className="validationErrorMessage"
                              style={{ marginLeft: '11px' }}
                            >
                              {errors.oldPassword}
                            </p>
                          ) : null}
                          <div className="d-flex">
                            <Field
                              type="password"
                              name="newPassword"
                              className="form-control"
                              placeholder="Enter New Password"
                              autoComplete="off"
                            />
                            <Field
                              type="password"
                              name="confirmPassword"
                              className="form-control"
                              placeholder="Confirm New Password"
                              autoComplete="off"
                            />
                          </div>
                          {errors.confirmPassword && touched.confirmPassword ? (
                            <p
                              className="validationErrorMessage"
                              style={{ marginLeft: '11px' }}
                            >
                              {errors.confirmPassword}
                            </p>
                          ) : null}
                        </div>
                        <div className="col-sm-12 text-center">
                          {!loading ? (
                            <button
                              type="submit"
                              id="submit"
                              className="btn btn-outline btn-md btn-demo mb-20"
                            >
                              Update
                            </button>
                          ) : (
                            <button className="btn btn-outline btn-md btn-demo mb-20">
                              <i className="fa fa-refresh fa-spin" />
                              Loading
                            </button>
                          )}
                        </div>
                      </Form>
                    )}
                  </Formik>
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

export default MyAccount;
