import React from 'react';
import { Formik, Form, Field } from 'formik';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import formImage from '../../assets/images/form-image1.png';
import logoImage from '../../assets/images/logo-white.png';
import { ForgotPasswordSchema } from '../Register/schema';
import { forgotPasswordRequest } from '../../utils/requests';

const ForgotPassword = ({ history }) => {
  function userForgotPasswordRequest(userInfo) {
    const { email } = userInfo;
    forgotPasswordRequest('users/forgot-password', { email }, history);
  }
  return (
    <section className="section-forget">
      <div className="container-fluid p-0">
        <div className="row no-gutters">
          <div className="col-md-7">
            <div className="bg-blue login-con">
              <img src={logoImage} className="logo-white" alt="logo-img" />
              <img
                src={formImage}
                className="img-form mx-auto d-block"
                alt="form-img"
              />
            </div>
          </div>
          <div className="col-md-5">
            <div className="form-main form-demo">
              <h1 className="main-title pb-f ">Reset Password</h1>
              <Formik
                initialValues={{
                  email: '',
                }}
                validationSchema={ForgotPasswordSchema}
                onSubmit={values => {
                  userForgotPasswordRequest(values);
                }}
              >
                {({ errors, touched, isSubmitting }) => (
                  <Form disabled={isSubmitting} noValidate>
                    <div className="form-group">
                      <Field
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                      />
                      {errors.email && touched.email ? (
                        <p className="validationErrorMessage">{errors.email}</p>
                      ) : null}
                    </div>
                    <button
                      id="btn-search"
                      type="submit"
                      className="btn btn-outline btn-md btn-demo mb-20"
                    >
                      Reset Password
                    </button>
                    <div className="login-stats">
                      <input type="checkbox" name="remember" />
                      <span className="remember">Remember me</span>
                      <Link to="/login" className="f-pwd">
                        login
                      </Link>
                      <Link to="/register" className="accont">
                        Don’t have an account yet?{' '}
                      </Link>
                      <Link to="/register" className="login">
                        Register
                      </Link>
                    </div>
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

ForgotPassword.propTypes = {
  history: PropTypes.object,
};
export default ForgotPassword;
