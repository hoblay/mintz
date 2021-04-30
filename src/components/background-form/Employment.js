import React, { useState, useEffect } from 'react';

/**
 * @author
 * @function Employment
 **/

const Employment = () => {
  const [fetching, setFetching] = useState(false);

  const [form, setForm] = useState(false);

  useEffect(() => {
    setFetching(true);
  });

  return (
    <div>
      <h2>Employment</h2>
      <p>
        Donec leo libero, bibendum quis nisi a, viverra dignissim lectus.
        Aliquam porta risus vel rhoncus vehicula. Aliquam porta risus vel
        rhoncus vehicula. Aliquam porta risus vel rhoncus vehicula.{' '}
      </p>
      <div className="card p-4">
        <h4 className="mb-4">Current Status</h4>
        <div className="row">
          <div className="col-md-6">
            <button
              className="btn btn-primary btn-block w-100 text-uppercase py-3"
              onClick={() => setForm(true)}
            >
              I am currently employed
            </button>
          </div>
          <div className="col-md-6">
            <button
              className="btn btn-secondary btn-block w-100 text-uppercase py-3"
              onClick={() => setForm(false)}
            >
              I am currently unemployed
            </button>
          </div>
        </div>
      </div>
      <hr />
      <div className={`card p-4 mt-4 ${!form && 'd-none'}`}>
        <h4 className="mb-4">Current Employment</h4>

        <div className="row col-12">
          <div className=" col-md-8">
            <label>
              Employer or Company Name
              <span className="text-danger">*</span>
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-md-4">
            <label>
              Supervisor Name
              <span className="text-danger">*</span>
            </label>
            <input type="text" className="form-control" />
          </div>
        </div>
        <div className="row col-12 mt-4">
          <div className="col-md-4">
            <label>
              Your Position
              <span className="text-danger">*</span>
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-md-4">
            <label>
              Start Date (YYYY-MM)
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
              Phone Number
              <span className="text-danger">*</span>
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-md-2">
            <label>
              Ext
              <span className="text-danger">*</span>
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-md-6 py-3">
            <label className="d-block">
              May we contact your current employer?{' '}
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
        <div className="row col-4 mt-4 p-2">
          <button className="btn btn-primary btn-block w-100 text-uppercase py-3">
            ADD A COMMENT
          </button>
        </div>
      </div>
      <hr />
      <div className="card p-4 mt-4">
        <h4 className="mb-4">Previous Employment</h4>

        <div className="row col-12">
          <div className=" col-md-8">
            <label>
              Employer or Company Name
              <span className="text-danger">*</span>
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-md-4">
            <label>
              Supervisor Name
              <span className="text-danger">*</span>
            </label>
            <input type="text" className="form-control" />
          </div>
        </div>
        <div className="row col-12 mt-4">
          <div className="col-md-4">
            <label>
              Your Position
              <span className="text-danger">*</span>
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-md-4">
            <label>
              Start Date (YYYY-MM)
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
              Phone Number
              <span className="text-danger">*</span>
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-md-2">
            <label>
              Ext
              <span className="text-danger">*</span>
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-md-6 py-3">
            <label className="d-block">
              May we contact your current employer?{' '}
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
        <div className="row col-4 mt-4 p-2">
          <button className="btn btn-primary btn-block w-100 text-uppercase py-3">
            ADD A COMMENT
          </button>
        </div>
      </div>
      <div className="row mt-4 mb-4">
        <div className="col-md-6">
          <button
            className="btn btn-secondary btn-block w-100 text-uppercase py-3"
            onClick={() => setForm(true)}
          >
            Add previous employment
          </button>
        </div>
        <div className="col-md-6">
          <button className="btn btn-secondary btn-block w-100 text-uppercase py-3">
            Add unemployment period
          </button>
        </div>
      </div>
    </div>
  );
};

export default Employment;
