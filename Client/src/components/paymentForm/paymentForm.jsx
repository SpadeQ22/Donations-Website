import "./paymentForm.css";

import {useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import * as receiptController from "../../middleware/receipt.service"
import * as campaignController from "../../middleware/campaign.service"
import validator from 'validator';

import { useCookies } from "react-cookie";

const PaymentForm = () => {
  const naviagte = useNavigate();
  const [cookies, setCookie] = useCookies(['user']);
  const [campaignId, setCampaignId] = useState();
  const [amount, setAmount] = useState(0);
  const [campaigns, setCampaigns] = useState([]);
  const [focused1, setFocused1] = useState(false);
  const [focused2, setFocused2] = useState(false);
  const [focused3, setFocused3] = useState(false);
  const [focused4, setFocused4] = useState(false);
  const [focused5, setFocused5] = useState(false);
  const [focused6, setFocused6] = useState(false);
  const [focused7, setFocused7] = useState(false);


  useEffect(()=>{
    campaignController.getAllCampaigns().then(response => {
        console.log(response.data)
        setCampaigns(response.data);
    })
  }, [])

  const onChangeCampaign = (e)=>{
    setCampaignId(e.target.value);
  }
  const onChangeAmount = (e)=>{
    setAmount(e.target.value);
  } 
  
  const onSubmit = (e)=>{
    e.preventDefault();
    receiptController.addReceipt(amount, campaignId, cookies.user.token, cookies.user._id).then(response => {
        console.log(response);
        if(response.status === "success"){
          window.alert("Payment is Successful");
          naviagte("/");
        } else {
          window.alert("Error Occured During Payment: " + response.errMsg);
        }
    })
  }
  const handleFocus1 = (e) => {
    setFocused1(true);
  };
  const handleFocus2 = (e) => {
    setFocused2(true);
  };
  const handleFocus3 = (e) => {
    setFocused3(true);
  };
  const handleFocus4 = (e) => {
    setFocused4(true);
  };
  const handleFocus5 = (e) => {
    setFocused5(true);
  };
  const handleFocus6 = (e) => {
    setFocused6(true);
  };
  const handleFocus7 = (e) => {
    setFocused7(true);
  };
  const handleCC = (e)=>{
    if(!validator.isCreditCard(e.target.value)){
      e.target.setCustomValidity("Invalid")
    } else {
      e.target.setCustomValidity("")
    }
  }
  const handleExp = (e)=>{
    if(!validator.isAfter((new Date("01/"+e.target.value)).toDateString())){
      e.target.setCustomValidity("Invalid")
    } else {
      e.target.setCustomValidity("")
    }
  }



  return (
    <div class="paymentForm">
      <section class="p-4 p-md-5 mainSection">
        <div class="row d-flex justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-5">
            <div class="card rounded-3">
              <div class="card-body p-4">
                <div class="text-center mb-4">
                  <h3>Payment</h3>
                </div>
                <div class="flex-row mb-4 payment-logos">
                  <img
                    class="img-fluid logo"
                    src="https://img.icons8.com/color/48/000000/mastercard-logo.png"
                  />
                  <img
                    class="img-fluid logo"
                    src="https://img.icons8.com/color/48/000000/visa.png"
                  />
                </div>
                <form onSubmit={onSubmit}>
                  <label class="form-label" for="formControlLgXsd">
                    Cardholder's Name
                  </label>
                  <div class="form-outline mb-4">
                    <input
                      type="text"
                      id="formControlLgXsd"
                      class="form-control form-control-lg inputField"
                      placeholder="Anna Doe"
                      required="true"
                      onBlur={handleFocus6}
                      focused={focused6.toString()}
                    />
                    <span className="errorMsg">Required!!</span>
                  </div>

                  <div class="row mb-4">
                    <div class="col-7">
                      <div class="form-outline">
                        <label class="form-label" for="formControlLgXM">
                          Card Number
                        </label>
                        <input
                          type="tel"
                          id="formControlLgXM"
                          class="form-control form-control-lg inputField"
                          placeholder="1234 5678 1234 5678"
                          inputmode="numeric" pattern="[0-9\s]{13,19}" autocomplete="cc-number" maxlength="19"
                          onChange={handleCC}
                          onBlur={handleFocus1}
                          focused={focused1.toString()}
                          required="true"
                        />
                        <span className="errorMsg">Invalid Card Number</span>
                      </div>
                    </div>
                    <div class="col-3">
                      <div class="form-outline">
                        <label class="form-label" for="formControlLgExpk">
                          Expire
                        </label>
                        <input
                          type="month"
                          id="formControlLgExpk"
                          class="form-control form-control-lg inputField"
                          placeholder="MM/YYYY"
                          onChange={handleExp}
                          onBlur={handleFocus2}
                          focused={focused2.toString()}
                          maxLength="7"
                          required="true"
                        />
                        <span className="errorMsg">Invalid Expiry Date</span>
                      </div>
                    </div>
                    <div class="col-2">
                      <div class="form-outline">
                        <label class="form-label" for="formControlLgcvv">
                          CVV
                        </label>
                        <input
                          type="password"
                          id="formControlLgcvv"
                          class="form-control form-control-lg inputField"
                          placeholder="CVV"
                          required="true"
                          maxLength="3"
                          onBlur={handleFocus7}
                          focused={focused7.toString()}
                        />
                        <span className="errorMsg">Required!!</span>

                      </div>
                    </div>
                  </div>
                  <label class="form-label" for="formControlLgXsd">
                    Billing Address
                  </label>
                  <div class="form-outline mb-4">
                    <input
                      type="text"
                      id="formControlLgXsd"
                      class="form-control form-control-lg inputField" 
                      placeholder="21 John Wick St"
                      required="true"
                      onBlur={handleFocus3}
                      focused={focused3.toString()}
                    />
                    <span className="errorMsg">Required!!</span>
                  </div>
                  <div class="row mb-4">
                    <div class="col-7">
                    <div class="form-outline">
                        <label class="form-label" for="formControlLgcvv">
                          Campaign
                        </label>
                        <select
                          id="formControlLgcvv"
                          class="form-control form-control-lg"
                          placeholder="Campaign"
                          required="true"
                          onBlur={handleFocus4}
                          focused={focused4.toString()}
                          onChange={onChangeCampaign}>
                            {campaigns.map((camp, ind) =>
                              <option value={camp._id}>{camp.campaignTitle}</option>
                            )}
                        </select>
                        <span className="errorMsg">Required!!</span>
                      </div>
                    </div>
                    <div class="col-5">
                    <div class="form-outline">
                        <label class="form-label" for="formControlLgcvv">
                          Amount
                        </label>
                        <input
                          type="Number"
                          id="formControlLgcvv"
                          class="form-control form-control-lg"
                          required="true"
                          placeholder="Amount"
                          onChange={onChangeAmount}
                          onBlur={handleFocus5}
                          focused={focused5.toString()}
                          defaultValue="1"
                          min="1"
                        />
                        <span className="errorMsg">Required!!</span>
                      </div>
                    </div>
                  </div>
                  
                  <button class="btn btn-success btn-lg btn-block">
                    Pay Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaymentForm;
