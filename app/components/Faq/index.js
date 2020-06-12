/* eslint-disable indent */
/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import RegisterHeader from '../Header';
import RegisterFooter from '../Footer';
import downangle from '../../images/downangle.png';

const Faq = () =>

<div>
<RegisterHeader />
<section className="faq">
  <div className="container">
    <div className="row">
      <div className="col-sm-12">
        <h1>FAQs</h1>
        <div className="accordion" id="faqs">
          <div className="card">
            <div className="card-header"  data-toggle="collapse" data-target="#faq1" aria-expanded="true" aria-controls="faq1">
              <h2 className="mb-0">
                  Is the feedback anonymous?
                  <img src={downangle} className="" />
              </h2>

            </div>

            <div id="faq1" className="collapse show"  data-parent="#faqs">
              <div className="card-body">
                All feedback is anonymous; the organiser cannot know who left specific reviews.
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header collapsed"  data-toggle="collapse" data-target="#faq2" aria-expanded="false" aria-controls="faq2">
              <h2 className="mb-0">
                  Can I customise the questions?
                  <img src={downangle} className="" />
              </h2>
            </div>

            <div id="faq2" className="collapse"  data-parent="#faqs">
              <div className="card-body">
                Working on it currently, <Link to='/register'>register</Link> to be the first to know once it is live.
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header collapsed"  data-toggle="collapse" data-target="#faq3" aria-expanded="false" aria-controls="faq3">
              <h2 className="mb-0">
                  How long after the meeting does the feedback email get sent to participants?
                  <img src={downangle} className="" />
              </h2>
            </div>

            <div id="faq3" className="collapse"  data-parent="#faqs">
              <div className="card-body">
                Typically, one hour after the meeting is scheduled to end.
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header collapsed"  data-toggle="collapse" data-target="#faq4" aria-expanded="false" aria-controls="faq4">
              <h2 className="mb-0">
                  When can I expect to receive feedback on my dashboard after a meeting?
                  <img src={downangle} className="" />
              </h2>
            </div>

            <div id="faq4" className="collapse"  data-parent="#faqs">
              <div className="card-body">
                Feedback emails are sent to attendees on the very same day. Once they provide feedback your dashboard will be updated.
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header collapsed"  data-toggle="collapse" data-target="#faq5" aria-expanded="false" aria-controls="faq5">
              <h2 className="mb-0">
                  How long does feedback questionnaire take?
                  <img src={downangle} className="" />
              </h2>
            </div>

            <div id="faq5" className="collapse"  data-parent="#faqs">
              <div className="card-body">
                Less than 2 minutes
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header collapsed"  data-toggle="collapse" data-target="#faq6" aria-expanded="false" aria-controls="faq6">
              <h2 className="mb-0">
                  Will I get spammed with emails?
                  <img src={downangle} className="" />
              </h2>
            </div>

            <div id="faq6" className="collapse"  data-parent="#faqs">
              <div className="card-body">
                Not at all, we all hate nothing more than a cluttered inbox so we only send one email.
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header collapsed"  data-toggle="collapse" data-target="#faq7" aria-expanded="false" aria-controls="faq7">
              <h2 className="mb-0">
                  Anything not answered?
                  <img src={downangle} className="" />
              </h2>
            </div>

            <div id="faq7" className="collapse"  data-parent="#faqs">
              <div className="card-body">
                Email us on <a href="mailto:havea@goodmeeting.today">havea@goodmeeting.today</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<RegisterFooter />
</div>

;

export default Faq;
