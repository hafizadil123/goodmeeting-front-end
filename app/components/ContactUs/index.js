/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Formik, Form, Field } from 'formik';
import contactUsImage from '../../assets/images/contactimg.svg';
import { BASE_URL } from '../../utils/constants';
import RegisterHeader from '../Header';
import { ContactUsScheme } from '../Register/schema';
import Footer from '../Footer';

const ContactUs = ({ history }) => {
  const [loading, setLoading] = useState(false);
  function submitContactUs(userInfo, actions) {
    setLoading(true);
    const { email, name, message } = userInfo;
    axios
      .post(`${BASE_URL}contact-us`, { email, name, message })
      .then(response => {
        const { messageResponse } = response && response.data;
        toast.success(messageResponse);
        actions.resetForm({});
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
      <RegisterHeader />
      <section className="section1 contact box-art">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="heading1">Contact us</h1>
              <img
                src={contactUsImage}
                className="img-fluid"
                alt="contact us"
              />
            </div>
            <div className="col-md-6">
              <div className="contactform">
                <h6>Powering Meetings Worldwide</h6>
                <Formik
                  initialValues={{
                    name: '',
                    email: '',
                    message: '',
                  }}
                  validationSchema={ContactUsScheme}
                  onSubmit={(values, actions) => {
                    submitContactUs(values, actions);
                  }}
                >
                  {({ errors, touched, isSubmitting }) => (
                    <Form
                      disabled={isSubmitting}
                      noValidate
                      className="form-demo"
                    >
                      <div className="form-group">
                        <Field
                          type="text"
                          name="name"
                          placeholder="Name"
                          autoComplete="off"
                          className={
                            errors.name && touched.name
                              ? 'form-control validation addCross'
                              : 'form-control'
                          }
                        />
                        {errors.name && touched.name ? (
                          <p className="validationErrorMessage errorParagraph">
                            {errors.name}
                          </p>
                        ) : null}
                      </div>
                      <div className="form-group">
                        <Field
                          name="email"
                          className={
                            errors.email && touched.email
                              ? 'form-control validation addCross'
                              : 'form-control'
                          }
                          placeholder="Email"
                          autoComplete="off"
                        />
                        {errors.email && touched.email ? (
                          <p className="validationErrorMessage errorParagraph">
                            {errors.email}
                          </p>
                        ) : null}
                      </div>
                      <div className="form-group">
                        <Field
                          name="message"
                          component="textarea"
                          className={
                            errors.message && touched.message
                              ? 'form-control validation addCross'
                              : 'form-control'
                          }
                          rows={15}
                          placeholder="Message"
                          defaultValue=""
                        />
                        {errors.message && touched.message ? (
                          <p className="validationErrorMessage errorParagraph">
                            {errors.message}
                          </p>
                        ) : null}
                      </div>
                      <div className="form-group">
                        {!loading ? (
                          <button
                            href="#"
                            className="btn btn-outline btn-md btn-demo mb-20"
                          >
                            Send Message
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
      </section>
      <Footer />
    </>
  );
};

export default ContactUs;
