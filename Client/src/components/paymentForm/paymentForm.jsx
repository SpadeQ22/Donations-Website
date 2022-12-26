import "./paymentForm.css";

const PaymentForm = () => {
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
                <form action="">
                  <label class="form-label" for="formControlLgXsd">
                    Cardholder's Name
                  </label>
                  <div class="form-outline mb-4">
                    <input
                      type="text"
                      id="formControlLgXsd"
                      class="form-control form-control-lg"
                      placeholder="Anna Doe"
                    />
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
                          class="form-control form-control-lg"
                          placeholder="1234 5678 1234 5678"
                          inputmode="numeric" pattern="[0-9\s]{13,19}" autocomplete="cc-number" maxlength="19"
                        />
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
                          class="form-control form-control-lg"
                          placeholder="MM/YYYY"
                          min="12/2019"
                        />
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
                          class="form-control form-control-lg"
                          placeholder="CVV"
                        />
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
                      class="form-control form-control-lg"
                      placeholder="21 John Wick St"
                    />
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
                          placeholder="Campaign">
                            <option>Campaign</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
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
                          placeholder="Amount"
                        />
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
