/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { withRouter } from 'react-router';
import { ToastContainer } from 'react-toastify';
import GlobalStyle from '../../global-styles';
import Routes from '../../routes/routes';
import Header from '../../components/NavBar';
import RegisterHeader from '../../components/Header';
import Footer from '../../components/Footer';

function App() {
  return (
    <React.Fragment>
      <Helmet titleTemplate="%s - sportsbook" defaultTitle="sportsbook">
        <meta name="description" content="sportsbook" />
      </Helmet>
      {window.location.pathname === '/' && <RegisterHeader />}
      {window.location.pathname !== '/register' &&
        window.location.pathname !== '/login' &&
        window.location.pathname !== '/' && <Header />}
      <Routes />
      <ToastContainer autoClose={5000} />
      <Footer />
      <GlobalStyle />
    </React.Fragment>
  );
}

export default withRouter(App);
