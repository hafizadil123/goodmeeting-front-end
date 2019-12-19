import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import formImage from '../../images/form-image2.png';
import logoWhite from '../../images/logo-white.png';
import { updatePasswordRequest } from '../../utils/requests';
import { UpdatePasswordSchema } from '../Register/schema';

const UpdatePassword = ({ history }) => {
  function updatePassword(userInfo) {
    const {
      location: { search },
    } = history;
    const queryParam = search.substr(8);
    const { password } = userInfo;
    updatePasswordRequest(
      `users/update-password?userId=${queryParam}`,
      { password },
      history,
    );
  }
  return (
    <section className="section-forget register-account">
      <div className="container-fluid p-0">
        <div className="row no-gutters">
          <div className="col-md-7">
            <div className="bg-blue login-con">
              <img src={logoWhite} className="logo-white" alt="logo" />
              <div className="text-reg">
                <h6 className="text-white strt">Get started now</h6>
                <p className="text-white regi">
                  Simplify the process of getting feedback from your meeting
                </p>
              </div>
              <img
                src={formImage}
                className="img-form mx-auto d-block"
                alt="logo"
              />
            </div>
          </div>
          <div className="col-md-5">
            <div className="form-main form-demo">
              <h1 className="main-title pb-f">Update Password</h1>
              <Formik
                initialValues={{
                  password: '',
                  confirmPassword: '',
                }}
                validationSchema={UpdatePasswordSchema}
                onSubmit={values => {
                  updatePassword(values);
                }}
              >
                {({ errors, touched, isSubmitting }) => (
                  <Form
                    className="needs-validation"
                    noValidate
                    disabled={isSubmitting}
                  >
                    <div className="form-group">
                      <Field
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Password"
                      />
                      {errors.password && touched.password ? (
                        <p className="validationErrorMessage">
                          {errors.password}
                        </p>
                      ) : null}
                    </div>
                    <div className="form-group">
                      <Field
                        type="password"
                        className="form-control"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                      />
                      {errors.confirmPassword && touched.confirmPassword ? (
                        <p className="validationErrorMessage">
                          {errors.confirmPassword}
                        </p>
                      ) : null}
                    </div>

                    <button
                      id="btn-search"
                      type="submit"
                      className="btn-outline btn-md btn-demo btn-reg"
                    >
                      Update Password
                    </button>
                    <Link to="/register" className="accont">
                      Already have an account?{' '}
                    </Link>
                    <Link to="/login" className="login">
                      Login
                    </Link>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

UpdatePassword.propTypes = {
  history: PropTypes.object,
};

export default UpdatePassword;
