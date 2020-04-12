/* eslint-disable eqeqeq */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import axios from 'axios';
import { BASE_URL } from '../../../utils/constants';
import { createFeedbacks } from '../../../utils/requests';
import logoImage from '../../../assets/images/logo.png';
import hsbcLogo from '../../../assets/images/hsbclogo.png';

const FeedbackForm = ({ history }) => {
  const [page, setPage] = useState(0);
  const [isDisabled, setDisabled] = useState(true);
  const [asnwerId, setAnswerId] = useState(0);
  const [answer, setAnswer] = useState([]);
  const [allQuestions, setQuestion] = useState([]);
  const isGoodMeeting = history.location.search
    .split('&')[0]
    .replace('?isGood=', '');
  const organizer = history.location.search.split('&')[2].replace('email=', '');
  useEffect(() => {
    axios
      .get(`${BASE_URL}get-questions`)
      .then(response => setQuestion(response && response.data))
      .catch(() => {})
      .then(() => {
        // always executed
      });
  }, []);
  const handleButtonDisble = value => {
    setAnswerId(value);
    setDisabled(false);
  };
  const onUpdatePage = (e, value, questionId) => {
    e.preventDefault();
    setDisabled(!isDisabled);
    const feedbackMapping = {
      questionId,
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
    createFeedbacks('create-feedback', feedbackRequest, history);
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
                  {/* <img src={hsbcLogo} className="hsbclogo" alt="hsbclogo-img" /> */}
                  <h1 className="heading1">
                    {isGoodMeeting == 1
                      ? 'Looks like you had a good meeting'
                      : 'Looks like you did not have a good meeting'}{' '}
                    .
                  </h1>
                  <p>
                    {isGoodMeeting == 1
                      ? ` Fantastic, we love good meetings! But we don’t want to rest
                      on our laurels, tell us what was good and what was great so
                      we can carry on having good meetings. It won’t take long:`
                      : `We're sorry to hear that, but please give us some feedback 
                      so that ${organizer} can plan to have a Good Meeting in future. 
                      It will only take a couple of minutes`}{' '}
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

                          <>
                            <h1>{allQuestions && allQuestions[0].question}</h1>

                            <ul className="radios">
                              {allQuestions &&
                                allQuestions[0].answers.map(el => (
                                  <li>
                                    <label>
                                      <input
                                        type="radio"
                                        name="size"
                                        onChange={() =>
                                          handleButtonDisble(el.id)
                                        }
                                      />
                                      <span>{el.answer}</span>
                                    </label>
                                  </li>
                                ))}
                            </ul>

                            <button
                              type="button"
                              className={`${
                                isDisabled ? 'disableButton' : 'nextButton'
                              }`}
                              disabled={isDisabled}
                              onClick={e =>
                                onUpdatePage(e, asnwerId, allQuestions[0]._id)
                              }
                            >
                              {' '}
                              Next
                            </button>
                          </>
                        </section>
                      ) : null}
                      {/* Step 2 */}
                      <h6 />
                      {page === 2 ? (
                        <section>
                          <h1>{allQuestions && allQuestions[1].question}</h1>
                          <ul className="radios">
                            {allQuestions[1].answers.map(el => (
                              <li>
                                <label>
                                  <input
                                    type="radio"
                                    name="size"
                                    onChange={() => handleButtonDisble(el.id)}
                                  />
                                  <span>{el.answer}</span>
                                </label>
                              </li>
                            ))}
                          </ul>
                          <button
                            type="button"
                            className={`${
                              isDisabled ? 'disableButton' : 'nextButton'
                            }`}
                            disabled={isDisabled}
                            onClick={e =>
                              onUpdatePage(e, asnwerId, allQuestions[1]._id)
                            }
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
                          <h1>{allQuestions && allQuestions[2].question}</h1>
                          <ul className="radios">
                            {allQuestions[2].answers.map(el => (
                              <li>
                                <label>
                                  <input
                                    type="radio"
                                    name="size"
                                    onChange={() => handleButtonDisble(el.id)}
                                  />
                                  <span>{el.answer}</span>
                                </label>
                              </li>
                            ))}
                          </ul>
                          <button
                            type="button"
                            className={`${
                              isDisabled ? 'disableButton' : 'nextButton'
                            }`}
                            disabled={isDisabled}
                            onClick={e =>
                              onUpdatePage(e, asnwerId, allQuestions[2]._id)
                            }
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
                            <h1>{allQuestions && allQuestions[3].question}</h1>
                            <ul className="radios">
                              {allQuestions[3].answers.map(el => (
                                <li>
                                  <label>
                                    <input
                                      type="radio"
                                      name="size"
                                      onChange={() => handleButtonDisble(el.id)}
                                    />
                                    <span>{el.answer}</span>
                                  </label>
                                </li>
                              ))}
                            </ul>
                            <button
                              type="button"
                              className={`${
                                isDisabled ? 'disableButton' : 'nextButton'
                              }`}
                              disabled={isDisabled}
                              onClick={e =>
                                onUpdatePage(e, asnwerId, allQuestions[3]._id)
                              }
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
