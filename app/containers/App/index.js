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
import Footer from '../../components/Footer';

function App() {
  return (
    <React.Fragment>
      <Helmet titleTemplate="%s - sportsbook" defaultTitle="sportsbook">
        <meta name="description" content="sportsbook" />
      </Helmet>
      <Routes />
      <ToastContainer autoClose={5000} />
      {window.location.pathname === '/' && <Footer />}
      <GlobalStyle />
    </React.Fragment>
  );
}

export default withRouter(App);
