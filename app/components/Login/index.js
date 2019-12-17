import React from 'react';
import { Formik, Form, Field } from 'formik';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import formImage from '../../assets/images/form-image1.png';
import logoImage from '../../assets/images/logo-white.png';
import { LoginShema } from '../Register/schema';
import { userLoginRequest } from '../../utils/requests';

const Login = ({ history }) => {
  function loginRequest(userInfo) {
    const { email, password } = userInfo;
    userLoginRequest(
      'http://www.mocky.io/v2/5df8edca300000f10988a092',
      { email, password },
      history,
    );
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
              <h1 className="main-title pb-f ">Login to Dashboard</h1>
              <Formik
                initialValues={{
                  email: '',
                  password: '',
                }}
                validationSchema={LoginShema}
                onSubmit={values => {
                  loginRequest(values);
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
                    <button
                      id="btn-search"
                      type="submit"
                      className="btn btn-outline btn-md btn-demo mb-20"
                    >
                      Login
                    </button>
                    <div className="login-stats">
                      <input type="checkbox" name="remember" />
                      <span className="remember">Remember me</span>
                      <Link to="/" className="f-pwd">
                        Forget Password
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

Login.propTypes = {
  history: PropTypes.object,
};
export default Login;
