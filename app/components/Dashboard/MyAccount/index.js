import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Formik, Form, Field } from 'formik';
import userImage from '../../../assets/images/users/1.jpg';
import { BASE_URL } from '../../../utils/constants';
import Header from '../../NavBar';
import LeftSide from '../LeftBar';
import { ProfileSchema } from '../../Register/schema';
const MyAccount = ({ history }) => {
  const [loading, setLoading] = useState(false);
  function updateProfile(userInfo, actions) {
    setLoading(true);
    const { name, newPassword, avatar } = userInfo;
    axios
      .post(`${BASE_URL}update-profile`, {
        fullName: name,
        newPassword,
        avatar: avatar || userImage,
      })
      .then(response => {
        console.log(response);
        // const { messageResponse } = response && response.data;
        // toast.success(messageResponse);
        // actions.resetForm({});
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
                        console.log('values', values);
                      updateProfile(values, actions);
                    }}
                  >
                    {({ errors, touched, isSubmitting }) => (
                      <Form disabled={isSubmitting} noValidate>
                        <label className="custom-file-upload">
                          <input type="file" onChange="readURL(this);" />
                          <div>
                            <img id="blah" src={userImage} alt="user" />
                          </div>
                          <span className="upload-txt">Edit Profile Image</span>
                          <span className="choose">Choose</span>
                        </label>
                        <div className="d-flex">
                          <Field
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Name"
                            autoComplete="off"
                          />
                          <Field
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            value=""
                            autoComplete="off"
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
                              type="text"
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
                              type="text"
                              name="newPassword"
                              className="form-control"
                              placeholder="Enter New Password"
                              autoComplete="off"
                            />
                            <Field
                              type="text"
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
                              href="#"
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
