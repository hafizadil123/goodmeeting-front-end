/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import formImage from '../../images/form-image2.png';
import logoWhite from '../../images/logo-white.png';
import { BASE_URL } from '../../utils/constants';
import { SignupSchema } from './schema';

const Register = ({ history }) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      history.push('/dashboard');
    } else {
      localStorage.clear();
    }
  }, []);
  function createUser(userInfo) {
    setLoading(true);
    const { fullName, email, password } = userInfo;
    axios
      .post(`${BASE_URL}users`, { fullName, email, password })
      .then(response => {
        const { message, token, userId, name, userEmail } =
          response && response.data;
        toast.success(message);
        localStorage.setItem('accessToken', token);
        localStorage.setItem('userId', userId);
        localStorage.setItem('name', name);
        localStorage.setItem('email', userEmail);
        history.push('/dashboard');
        setLoading(false);
      })
      .catch(() => {
        toast.error('something wents wrong!');
        setLoading(false);
        history.push('/register');
      })
      .then(() => {
        setLoading(false);
      });
  }
  return (
    <section className="section-forget register-account">
      <div className="container-fluid p-0">
        <div className="row no-gutters">
          <div className="col-md-7">
            <div className="bg-blue login-con">
              <Link to="/">
                <img src={logoWhite} className="logo-white" alt="logo" />
              </Link>
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
              <h1 className="main-title pb-f">Register Account</h1>
              <Formik
                initialValues={{
                  fullName: '',
                  email: '',
                  password: '',
                  confirmPassword: '',
                }}
                validationSchema={SignupSchema}
                onSubmit={values => {
                  createUser(values);
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
                        type="text"
                        name="fullName"
                        className={
                          errors.fullName && touched.fullName
                            ? 'form-control validation addCross'
                            : 'form-control'
                        }
                        placeholder="Justin Green"
                      />
                      {errors.fullName && touched.fullName ? (
                        <p className="validationErrorMessage">
                          {errors.fullName}
                        </p>
                      ) : null}
                    </div>
                    <div className="form-group">
                      <Field
                        type="email"
                        name="email"
                        className={
                          errors.email && touched.email
                            ? 'form-control validation addCross'
                            : 'form-control'
                        }
                        placeholder="justin.g@email.com"
                      />
                      {errors.email && touched.email ? (
                        <p className="validationErrorMessage">{errors.email}</p>
                      ) : null}
                    </div>

                    <div className="form-group">
                      <Field
                        type="password"
                        name="password"
                        className={
                          errors.password && touched.password
                            ? 'form-control validation addCross'
                            : 'form-control'
                        }
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
                        className={
                          errors.confirmPassword && touched.confirmPassword
                            ? 'form-control validation addCross'
                            : 'form-control'
                        }
                        name="confirmPassword"
                        placeholder="Confirm Password"
                      />
                      {errors.confirmPassword && touched.confirmPassword ? (
                        <p className="validationErrorMessage">
                          {errors.confirmPassword}
                        </p>
                      ) : null}
                    </div>
                    {!loading ? (
                      <button
                        id="btn-search"
                        type="submit"
                        className="btn-outline btn-md btn-demo btn-reg"
                      >
                        Register
                      </button>
                    ) : (
                      <button className="btn btn-outline btn-md btn-demo mb-20">
                        <i className="fa fa-refresh fa-spin" />
                        Loading
                      </button>
                    )}
                    <Link to="/" className="accont">
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

Register.propTypes = {
  history: PropTypes.object,
};

export default Register;
