/* eslint-disable no-shadow */
/* eslint-disable prettier/prettier */
/* eslint-disable no-nested-ternary */
/* eslint-disable eqeqeq */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import axios from 'axios';
import Slider from 'react-rangeslider';
import { BASE_URL } from '../../../utils/constants';
import { createFeedbacks } from '../../../utils/requests';
import logoImage from '../../../assets/images/logo.png';
// To include the default styles
import 'react-rangeslider/lib/index.css';

const FeedbackForm = ({ history }) => {
  const [page, setPage] = useState(0);
  const [v0, setV0] = useState(1);
  const [v1, setV1] = useState(1);
  const [v2, setV2] = useState(1);
  const [v3, setV3] = useState(1);
  const [isDisabled, setDisabled] = useState(true);
  const [isFeedback, setFeedback] = useState(true);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [asnwerId, setAnswerId] = useState(0);
  const [answer, setAnswer] = useState([]);
  const [allQuestions, setQuestion] = useState([]);
  const isGoodMeeting = history.location.search
    .split('&')[0]
    .replace('?isGood=', '');
  let organizer = history.location.search.split('&')[2].replace('name=', '');
  organizer = decodeURI(organizer);
 
  useEffect(() => {
    const {
      location: { search },
    } = history;
    const queryParams = search.substring(1).split('&');
    const queryData = queryParams.map(item => item.split('=')[1]);
    // eslint-disable-next-line no-unused-vars
    const [isGood, meetingId, inviteName, inviteeId] = queryData;
    axios
      .post(`${BASE_URL}create-feedback-checks`, {
        meetingId,
        inviteeId,
      })
      .then(response => {
        if (response.status === 200) {
          setFeedback(false);
        }
      })
      .catch(error => {
        if (error.response.status === 400) {
          setFeedback(true);
          setFeedbackMessage(error.response.data.message);
          toast.error(error.response.data.message);
        }
      })
      .then(() => {
        // always executed
      });
  }, []);

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
                  <Link to='/'>
                    <img src={logoImage} alt="logo-img" />
                  </Link>
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
                    {isFeedback
                      ? feedbackMessage
                      : isGoodMeeting == 1
                        ? 'Looks like you had a good meeting.'
                        : 'Looks like you did not have a good meeting.'}
                  </h1>
                  {isFeedback ? null : (
                    <p>
                      {isGoodMeeting == 1
                        ? `Great, looks like you had a good meeting! Please answer the next four questions to give us a deeper insight on your meeting.`
                        : `We're sorry to hear that, but please give us some feedback
                      so that ${organizer} can plan to have a Good Meeting in future.
                      It will only take a couple of minutes`}{' '}
                    </p>
                  )}
                  {isFeedback ? null : (
                    <button
                      type="button"
                      className="nextButton"
                      style={{ marginTop: '50px' }}
                      onClick={onOpenFeedbacForm}
                    >
                      Start
                    </button>
                  )}
                </div>
              </div>
            </div>
          </section>
        ) : null}
        {page != 0 ? (
          <section className="feedback-first-page feedback-start">
            <div className="container">
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
                          <section >
                            <h6 style={{ marginBottom: '4%' }}>
                              Just a couple of questions which will help us to
                              have a better meeting. Lets start here:
                            </h6>

                            <>
                              <h1>
                                {allQuestions && allQuestions[0].question}
                              </h1>

                              {/* <ul className="radios">
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
                              </ul> */}
                              {/* <input 
                                className="progress-range"
                                id="typeinp" 
                                type="range" 
                                min="1" max="10" 
                                value={v0} 
                                onChange={(e)=> {
                                  setV0(e.target.value);
                                  handleButtonDisble(allQuestions[0].answers[v0 - 1].id);
                                }}
                                step="1"/> */}
                              <Slider
                                className="progress-slider"
                                value={v0}
                                min={1}
                                max={10}
                                step={1}
                                onChange={(v0)=> {
                                  setV0(v0);
                                  handleButtonDisble(allQuestions[0].answers[v0 - 1].id);
                                }}
                              />
                                <div className="pvalues">
                                  <span>1</span>
                                  <span>2</span>
                                  <span>3</span>
                                  <span>4</span>
                                  <span>5</span>
                                  <span>6</span>
                                  <span>7</span>
                                  <span>8</span>
                                  <span>9</span>
                                  <span>10</span>
                                </div>
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
                            {/* <ul className="radios">
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
                            </ul> */}
                            <Slider
                              className="progress-slider"
                              value={v1}
                              min={1}
                              max={10}
                              step={1}
                              onChange={(v1)=> {
                                setV1(v1);
                                handleButtonDisble(allQuestions[1].answers[v1 - 1].id);
                              }}
                            />
                            <div className="pvalues">
                              <span>1</span>
                              <span>2</span>
                              <span>3</span>
                              <span>4</span>
                              <span>5</span>
                              <span>6</span>
                              <span>7</span>
                              <span>8</span>
                              <span>9</span>
                              <span>10</span>
                            </div>
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
                            {/* <ul className="radios">
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
                            </ul> */}
                            <Slider
                              className="progress-slider"
                              value={v2}
                              min={1}
                              max={10}
                              step={1}
                              onChange={(v2)=> {
                                setV2(v2);
                                handleButtonDisble(allQuestions[2].answers[v2 - 1].id);
                              }}
                            />
                            <div className="pvalues">
                              <span>1</span>
                              <span>2</span>
                              <span>3</span>
                              <span>4</span>
                              <span>5</span>
                              <span>6</span>
                              <span>7</span>
                              <span>8</span>
                              <span>9</span>
                              <span>10</span>
                            </div>
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
                              <h1>
                                {allQuestions && allQuestions[3].question}
                              </h1>
                              {/* <ul className="radios">
                                {allQuestions[3].answers.map(el => (
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
                              </ul> */}
                              <Slider
                                className="progress-slider"
                                value={v3}
                                min={1}
                                max={10}
                                step={1}
                                onChange={(v3)=> {
                                  setV3(v3);
                                  handleButtonDisble(allQuestions[3].answers[v3 - 1].id);
                                }}
                              />
                              <div className="pvalues">
                                <span>1</span>
                                <span>2</span>
                                <span>3</span>
                                <span>4</span>
                                <span>5</span>
                                <span>6</span>
                                <span>7</span>
                                <span>8</span>
                                <span>9</span>
                                <span>10</span>
                              </div>
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
        ) : null}
      </div>
    </div>
  );
};

FeedbackForm.propTypes = {
  history: propTypes.object,
};
export default FeedbackForm;
