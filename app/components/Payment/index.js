/* eslint-disable prettier/prettier */
/* eslint-disable indent */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import mastercard from '../../images/mastercard.png';
import check from '../../images/check-b.png';
import paypal from '../../images/paypal.png';
import visa from '../../images/visa.png';
import creditCard from '../../images/credit-card.png';
import Header from '../NavBar';;


const Payment = () => {
  const [name, setName] = useState('saeed');
  return (
<div>
  <Header isShow />
  <section className="payment">
    <div className="container">
      <div className="row">
        <div className="col-md-6 order-sm-last order-last order-md-first order-lg-first">
          <h2 className>Enter Your Payment Details</h2>
          <ul className="tabs">
            <li className="tab-link current" data-tab="tab-1">
              <img src={mastercard} />
              <img src={check} className="check-b" />
            </li>
            <li className="tab-link" data-tab="tab-2">
              <img src={visa} />
              <img src={check} className="check-b" />
            </li>
            <li className="tab-link" data-tab="tab-3">
              <img src={paypal} />
              <img src={check} className="check-b" />
            </li>
          </ul>
          <div id="tab-1" className="tab-content current">
            <form>
              <div className="form-group">
                <input type="text" className="form-control" id placeholder="Name on card master" />
              </div>
              <div className="form-group">
                <input type="text" className="form-control" id placeholder="Card Number" />
              </div>
              <div className="form-row">
                <div className="form-group col-md-4 col-sm-6 col-6">
                  <input type="text" className="form-control" id placeholder="Month" />
                </div>
                <div className="form-group col-md-4 col-sm-6 col-6">
                  <input type="text" className="form-control" id placeholder="Year" />
                </div>
                <div className="form-group col-md-4 col-sm-6 col-6">
                  <div className="input-group mb-2">
                    <input type="text" className="form-control" id placeholder="CVV" />
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <img src={creditCard} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div id="tab-2" className="tab-content">
            <form>
              <div className="form-group">
                <input type="text" className="form-control" id placeholder="Name on card visa" />
              </div>
              <div className="form-group">
                <input type="text" className="form-control" id placeholder="Card Number" />
              </div>
              <div className="form-row">
                <div className="form-group col-md-4 col-sm-6 col-6">
                  <input type="text" className="form-control" id placeholder="Month" />
                </div>
                <div className="form-group col-md-4 col-sm-6 col-6">
                  <input type="text" className="form-control" id placeholder="Year" />
                </div>
                <div className="form-group col-md-4 col-sm-6 col-6">
                  <div className="input-group mb-2">
                    <input type="text" className="form-control" id placeholder="CVV" />
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <img src={creditCard} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div id="tab-3" className="tab-content">
            <form>
              <div className="form-group">
                <input type="text" className="form-control" id placeholder="Name on card paypal" />
              </div>
              <div className="form-group">
                <input type="text" className="form-control" id placeholder="Card Number" />
              </div>
              <div className="form-row">
                <div className="form-group col-md-4 col-sm-6 col-6">
                  <input type="text" className="form-control" id placeholder="Month" />
                </div>
                <div className="form-group col-md-4 col-sm-6 col-6">
                  <input type="text" className="form-control" id placeholder="Year" />
                </div>
                <div className="form-group col-md-4 col-sm-6 col-6">
                  <div className="input-group mb-2">
                    <input type="text" className="form-control" id placeholder="CVV" />
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <img src={creditCard} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-6">
          <h2 className="plan-txt">Plan &amp; Inclusion</h2>
          <div className="payment-box">
            <h2 className="text-left">Business Plan</h2>
            <ul>
              <li>Custom Templates</li>
              <li>Store unlimited meetings data</li>
              <li>Complete access to our Template Library</li>
              <li>24/7 expedited email support</li>
            </ul>
            <hr />
            <div className="total-amount">
              <p>Total Amount:</p>
              <p>$17.99</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="section6 next-back">
    <div className="container">
      <Link to="#" className="btn btn-md pt-1 pb-2 btn-red font-weight-normal float-right">Confirm &amp; Pay</Link>
      <Link to="#" className="btn btn-outline pt-2 btn-md btn-line font-weight-normal float-left">&lt; BACK</Link>
    </div>
  </section>
</div>

  );
};

export default Payment;
