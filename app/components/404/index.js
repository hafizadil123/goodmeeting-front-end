import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../../assets/images/logo.png';
import notFoundImage from '../../assets/images/pic404.svg';
const NotfoundPage = () => (
  <section className="page404">
    <div className="container" style={{ paddingTop: '3%' }}>
      <div className="row">
        <div className="col-md-12">
          <img src={logoImage} className="logo" alt="logo-img" />
        </div>
      </div>
      <div className="content-404">
        <div className="row align-items-center">
          <div className="col-md-5">
            <img
              src={notFoundImage}
              className="img-fluid"
              alt="not-found-img"
            />
          </div>
          <div className="col-md-6 offset-md-1">
            <h1>Sorry! Page not found.</h1>
            <p>
              Unfortunately the page you are looking for has been moved or
              deleted.
            </p>
            <Link
              className="btn btn-md btn-primary font-weight-normal btn-blue text-uppercase"
              to="/"
            >
              go to home page
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default NotfoundPage;
