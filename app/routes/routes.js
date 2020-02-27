import React, { Suspense } from 'react';
import Loader from 'react-loader-spinner';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../components/HomePage';
import Register from '../components/Register';
import NotFoundPage from '../components/404';
import Pricing from '../components/Pricing';
import Payment from '../components/Payment';
import Dashboard from '../components/Dashboard';
import Meeting from '../components/Dashboard/Meeting';
import Stats from '../components/Dashboard/Stats';
import Login from '../components/Login';
import ForgotPassword from '../components/ForgotPassword';
import UpdatePassword from '../components/UpdatePassword';
import PrivateRoute from './privateRoutes';
import FeedbackForm from '../components/Dashboard/Feedback1';
import MeetingStats from '../components/Dashboard/MeetingStats';
import ThankYouMessage from '../components/Dashboard/ThankyouMessage';
import HowItsWorks from '../components/HowItsWorks';
import AboutUs from '../components/AboutUs';
import Terms from '../components/TermsCondition';
import Contactus from '../components/ContactUs';
import MyAccount from '../components/Dashboard/MyAccount';
import PrivacyPolicy from '../components/PrivacyPolicy';
// Import Containers

const Routes = () => (
  <Suspense
    fallback={
      <Loader
        type="Audio"
        color="#00BFFF"
        height={100}
        width={100}
        className="loader"
      />
    }
  >
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/register" component={Register} />
      <PrivateRoute exact path="/pricing" component={Pricing} />
      <PrivateRoute exact path="/payment" component={Payment} />
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
      <PrivateRoute exact path="/meetings" component={Meeting} />
      <PrivateRoute exact path="/stats" component={Stats} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/forgot-password" component={ForgotPassword} />
      <Route exact path="/update-password" component={UpdatePassword} />
      <Route exact path="/feedback-form" component={FeedbackForm} />
      <PrivateRoute exact path="/meeting-stats/:id" component={MeetingStats} />
      <Route exact path="/thank-you" component={ThankYouMessage} />
      <Route exact path="/how-its-works" component={HowItsWorks} />
      <Route exact path="/about-us" component={AboutUs} />
      <Route exact path="/terms-condition" component={Terms} />
      <Route exact path="/contact-us" component={Contactus} />
      <PrivateRoute exact path="/profile" component={MyAccount} />
      <Route exact path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  </Suspense>
);

export default Routes;
