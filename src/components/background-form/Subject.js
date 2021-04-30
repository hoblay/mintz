import React from 'react';

const Subject = () => {
  return (
    <div>
      <h2>Subject</h2>
      <p>
        Donec leo libero, bibendum quis nisi a, viverra dignissim lectus.
        Aliquam porta risus vel rhoncus vehicula. Aliquam porta risus vel
        rhoncus vehicula. Aliquam porta risus vel rhoncus vehicula.{' '}
      </p>

      <div className="card p-4">
        <h4 className="mb-4">Candidate Identity</h4>

        <div className="row">
          <div className="col-12 col-md-4">
            <label>
              First Name
              <span className="text-danger">*</span>
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-12 col-md-4">
            <label>
              Middle Name
              <span className="text-danger">*</span>
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-12 col-md-4">
            <label>
              Last Name
              <span className="text-danger">*</span>
            </label>
            <input type="text" className="form-control" />
          </div>
        </div>

        <div className="row">
          <div className="col-12 py-3">
            <label className="d-block">
              Do you currently or have you previously gone under another name?{' '}
              <span className="text-danger">*</span>
            </label>
            <div className="form-check d-inline-block me-3">
              <input
                type="radio"
                className="form-check-input"
                id="defaultUnchecked"
                name="defaultExampleRadios"
              />
              <label className="form-check-label" for="defaultUnchecked">
                Yes
              </label>
            </div>
            <div className="form-check d-inline-block">
              <input
                type="radio"
                className="form-check-input"
                id="defaultUnchecked"
                name="defaultExampleRadios"
              />
              <label className="form-check-label" for="defaultUnchecked">
                No
              </label>
            </div>
          </div>
        </div>

        <div class="row date-of-birth">
          <div class="col-4 py-3">
            <label>
              Date of birth <span className="text-danger">*</span>
            </label>
            <input
              placeholder="YYYY-MM-DD"
              className="form-control d-block mt-0"
            />
          </div>
          <div class="col-1 py-3">
            <label>
              Age <span className="text-danger">*</span>
            </label>
            <input placeholder="YY" className="form-control d-block mt-0" />
          </div>
        </div>

        <div className="row">
          <div class="col-4 py-3">
            <label>
              Birth Place <span className="text-danger">*</span>
            </label>
            <input
              placeholder="City/Country"
              className="form-control d-block mt-0"
            />
          </div>
          <div className="col-4 py-3">
            <label className="d-block">
              Gender <span className="text-danger">*</span>
            </label>
            <select class="form-select" aria-label="Default select example">
              <option value="1">Male</option>
              <option value="2">Female</option>
            </select>
          </div>
        </div>
      </div>
      <hr />
      <div className="card p-4">
        <h4 className="mb-4">Current Residencial Address</h4>

        <div className="row col-12">
          <div className=" col-md-2">
            <label>
              Civic Number
              <span className="text-danger">*</span>
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-md-4">
            <label>
              Street Name
              <span className="text-danger">*</span>
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-md-2">
            <label>
              Apt/Suite
              <span className="text-danger">*</span>
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-md-4">
            <label>
              Postal/Zip Code
              <span className="text-danger">*</span>
            </label>
            <input type="text" className="form-control" />
          </div>
        </div>
        <div className="row col-12 mt-4">
          <div className="col-md-4">
            <label>
              City
              <span className="text-danger">*</span>
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-md-4">
            <label>
              Country
              <span className="text-danger">*</span>
            </label>
            <select class="form-select" aria-label="Default select example">
              <option value="1">Select</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
            </select>
          </div>
          <div className="col-md-4">
            <label>
              Province/State
              <span className="text-danger">*</span>
            </label>
            <select class="form-select" aria-label="Default select example">
              <option value="1">Select</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
            </select>
          </div>
        </div>
        <div className="row col-12 mt-4">
          <div className="col-md-4">
            <label>
              Date of Residency
              <span className="text-danger">*</span>
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-md-8 py-3">
            <label className="d-block">
              Have you lived at your current address for the last 7 years?{' '}
            </label>
            <div className="form-check d-inline-block me-3">
              <input
                type="radio"
                className="form-check-input"
                id="defaultUnchecked"
                name="defaultExampleRadios"
              />
              <label className="form-check-label" for="defaultUnchecked">
                Yes
              </label>
            </div>
            <div className="form-check d-inline-block">
              <input
                type="radio"
                className="form-check-input"
                id="defaultUnchecked"
                name="defaultExampleRadios"
              />
              <label className="form-check-label" for="defaultUnchecked">
                No
              </label>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="card p-4">
        <h4 className="mb-4">Additional Information</h4>
        <div className="row col-12">
          <div className="col-md-8">
            <label>
              What is the position you are applying for?
              <span className="text-danger">*</span>
            </label>
            <input type="text" className="form-control" />
          </div>
        </div>
        <div className="row col-12 mt-4">
          <div className=" col-md-4">
            <label>
              Phone Number
              <span className="text-danger">*</span>
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-md-4">
            <label>
              Phone Type
              <span className="text-danger">*</span>
            </label>
            <select class="form-select" aria-label="Default select example">
              <option value="1">Select</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
            </select>
          </div>
          <div className="col-md-4">
            <label>
              Email Address
              <span className="text-danger">*</span>
            </label>
            <input type="text" className="form-control" />
          </div>
        </div>
        <div className="row col-4 mt-4 p-2">
          <button className="btn btn-primary btn-block w-100 text-uppercase py-3">
            ADD A COMMENT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subject;
