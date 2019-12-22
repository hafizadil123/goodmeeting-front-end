/* eslint-disable no-plusplus */
/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import { createFeedbacks, getQuestionsAnswers } from '../../../utils/requests';
import logoImage from '../../../assets/images/logo.png';
import hsbcLogo from '../../../assets/images/hsbclogo.png';

const FeedbackForm = ({ history }) => {
  const [page, setPage] = useState(0);
  const [asnwerId, setAnswerId] = useState(0);
  const [answer, setAnswer] = useState([]);
  useEffect(() => {
     const questionsAnswers = getQuestionsAnswers('get-questions');
     console.log('All questions Answers', questionsAnswers);
  }, [])
  const onUpdatePage = (e, value) => {
    e.preventDefault();
    const feedbackMapping = {
      questionId: page,
      answerId: value,
    };
    const updatedArray = answer.push(feedbackMapping);
    setAnswer([...answer, updatedArray]);
    page !== 4 ? setPage(page + 1) : '';
    if (answer.length >= 7) {
      const [, first, , second, , third] = answer;
      for (let i = 0; i < answer.length; i++) {
        if (
          answer[i] === first ||
          answer[i] === second ||
          answer[i] === third
        ) {
          answer.splice(i, 1);
        }
      }
      onApiCallForFeedback(answer);
    }
  };
  const onOpenFeedbacForm = () => {
    setPage(page + 1);
  };
  const onApiCallForFeedback = answers => {
    console.log('All Feedback', answers);
    const {
      location: { search },
    } = history;
    const queryParams = search.substring(1).split('&');
    const queryData = queryParams.map(item => item.split('=')[1]);
    const [isGood, meetingId, inviteName, inviteeId] = queryData;
    const feedbackRequest = {
      isGood,
      meetingId,
      inviteeId,
      inviteName,
      feedbackResults: answers,
    };
    createFeedbacks('/create-feedback', feedbackRequest, history);
    console.log('locations', feedbackRequest);
  };
  return (
    <div>
      <div>
        <section className="feedback">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="logo">
                  <img src={logoImage} alt="logo-img" />
                </div>
              </div>
              <div className="col">
                <Link to="/" className="btn btn-dark btn-md btn-black">
                  EXIT
                </Link>
              </div>
            </div>
          </div>
        </section>
        {page === 0 ? (
          <section className="feedback-first-page">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <img src={hsbcLogo} className="hsbclogo" alt="hsbclogo-img" />
                  <h1 className="heading1">
                    Looks like you had a good meeting.
                  </h1>
                  <p>
                    Fantastic, we love good meetings! But we don’t want to rest
                    on our laurels, tell us what was good and what was great so
                    we can carry on having good meetings. It won’t take long:
                  </p>
                  <button
                    type="button"
                    className="nextButton"
                    style={{ marginTop: '50px' }}
                    onClick={onOpenFeedbacForm}
                  >
                    Start
                  </button>
                </div>
              </div>
            </div>
          </section>
        ) : null}
        <section className="feedback-first-page feedback-start">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className>
                  <div className="wizard-content ">
                    <form
                      action="#"
                      className="tab-wizard wizard-circle wizard"
                    >
                      {/* Step 1 */}
                      <h6 />
                      {page === 1 ? (
                        <section>
                          <h6 style={{ marginBottom: '4%' }}>
                            Just a couple of questions which will help us to
                            have a better meeting. Lets start here:
                          </h6>
                          <h1>
                            How well prepared was the host for the meeting? (Did
                            it start on time, was there an agenda etc)
                          </h1>
                          <ul className="radios">
                            <li>
                              <label>
                                <input
                                  type="radio"
                                  name="size"
                                  onChange={() => setAnswerId(1)}
                                />
                                <span>There was no preparation</span>
                              </label>
                            </li>
                            <li>
                              <label>
                                <input
                                  type="radio"
                                  name="size"
                                  onChange={() => setAnswerId(2)}
                                />
                                <span>There was very little preparation</span>
                              </label>
                            </li>
                            <li>
                              <label>
                                <input
                                  type="radio"
                                  name="size"
                                  onChange={() => setAnswerId(3)}
                                />
                                <span>There was some preparation</span>
                              </label>
                            </li>
                            <li>
                              <label>
                                <input
                                  type="radio"
                                  name="size"
                                  onChange={() => setAnswerId(4)}
                                />
                                <span>There was good preparation</span>
                              </label>
                            </li>
                            <li>
                              <label>
                                <input
                                  type="radio"
                                  name="size"
                                  onChange={() => setAnswerId(5)}
                                />
                                <span>The preparation was fantastic</span>
                              </label>
                            </li>
                          </ul>
                          <button
                            type="button"
                            className="nextButton"
                            onClick={e => onUpdatePage(e, asnwerId)}
                          >
                            {' '}
                            Next
                          </button>
                          {/* tabList dots  */}
                        </section>
                      ) : null}
                      {/* Step 2 */}
                      <h6 />
                      {page === 2 ? (
                        <section>
                          <h1>Were you really needed for this meeting?</h1>
                          <ul className="radios">
                            <li>
                              <label>
                                <input
                                  type="radio"
                                  name="size"
                                  onChange={() => setAnswerId(1)}
                                />
                                <span>No, it was totally irrelevant to me</span>
                              </label>
                            </li>
                            <li>
                              <label>
                                <input
                                  type="radio"
                                  name="size"
                                  onChange={() => setAnswerId(2)}
                                />
                                <span>
                                  I wasn’t essential but it was useful
                                </span>
                              </label>
                            </li>
                            <li>
                              <label>
                                <input
                                  type="radio"
                                  name="size"
                                  onChange={() => setAnswerId(3)}
                                />
                                <span>
                                  Yes, this meeting was totally relevant to me
                                </span>
                              </label>
                            </li>
                          </ul>
                          <button
                            type="button"
                            className="nextButton"
                            onClick={e => onUpdatePage(e, asnwerId)}
                          >
                            {' '}
                            Next
                          </button>
                        </section>
                      ) : null}
                      {/* Step 3 */}
                      <h6 />
                      {page === 3 ? (
                        <section>
                          <h1>
                            We know meetings can drag on, we all want quick
                            efficient meetings. Did this meeting take longer
                            than it needed to?
                          </h1>
                          <ul className="radios">
                            <li>
                              <label>
                                <input
                                  type="radio"
                                  name="size"
                                  onChange={() => setAnswerId(1)}
                                />
                                <span>Yes, it was much too long</span>
                              </label>
                            </li>
                            <li>
                              <label>
                                <input
                                  type="radio"
                                  name="size"
                                  onChange={() => setAnswerId(2)}
                                />
                                <span>It took longer that it needed to</span>
                              </label>
                            </li>
                            <li>
                              <label>
                                <input
                                  type="radio"
                                  name="size"
                                  onChange={() => setAnswerId(3)}
                                />
                                <span>It was OK, if a little long</span>
                              </label>
                            </li>
                            <li>
                              <label>
                                <input
                                  type="radio"
                                  name="size"
                                  onChange={() => setAnswerId(4)}
                                />
                                <span>it was efficient enough</span>
                              </label>
                            </li>
                            <li>
                              <label>
                                <input
                                  type="radio"
                                  name="size"
                                  onChange={() => setAnswerId(5)}
                                />
                                <span>
                                  It was super quick and we did what was neededy
                                </span>
                              </label>
                            </li>
                          </ul>
                          <button
                            type="button"
                            className="nextButton"
                            onClick={e => onUpdatePage(e, asnwerId)}
                          >
                            {' '}
                            Next
                          </button>
                        </section>
                      ) : null}
                      {/* Step 4 */}
                      <h6 />
                      {page === 4 ? (
                        <section>
                          <section>
                            <h1>
                              Did you stay on topic or did the meeting veer off
                              course?
                            </h1>
                            <ul className="radios">
                              <li>
                                <label>
                                  <input
                                    type="radio"
                                    name="size"
                                    onChange={() => setAnswerId(1)}
                                  />
                                  <span>Yes, it totally changed direction</span>
                                </label>
                              </li>
                              <li>
                                <label>
                                  <input
                                    type="radio"
                                    name="size"
                                    onChange={() => setAnswerId(2)}
                                  />
                                  <span>It started ok, but then changed</span>
                                </label>
                              </li>
                              <li>
                                <label>
                                  <input
                                    type="radio"
                                    name="size"
                                    onChange={() => setAnswerId(3)}
                                  />
                                  <span>
                                    it was ok - we covered some of what we
                                    needed to
                                  </span>
                                </label>
                              </li>
                              <li>
                                <label>
                                  <input
                                    type="radio"
                                    name="size"
                                    onChange={() => setAnswerId(4)}
                                  />
                                  <span>
                                    we covered what we needed to, with some
                                    diversion
                                  </span>
                                </label>
                              </li>
                              <li>
                                <label>
                                  <input
                                    type="radio"
                                    name="size"
                                    onChange={() => setAnswerId(5)}
                                  />
                                  <span>We stayed totally on the subject.</span>
                                </label>
                              </li>
                            </ul>
                            <button
                              type="button"
                              className="nextButton"
                              onClick={e => onUpdatePage(e, asnwerId)}
                            >
                              {' '}
                              Submit
                            </button>
                          </section>
                        </section>
                      ) : null}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

FeedbackForm.propTypes = {
  history: propTypes.object,
};
export default FeedbackForm;
