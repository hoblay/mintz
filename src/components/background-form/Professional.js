import React, { useState, useEffect } from 'react';

/**
 * @author
 * @function Professional
 **/

const Professional = () => {
  const [fetching, setFetching] = useState(false);
  const [form, setForm] = useState(false);
  const [accreditations, setAccreditations] = useState([1]);

  const [index, setIndex] = useState(1);

  useEffect(() => {
    setFetching(true);
  });

  return (
    <div>
      <h2>Professional Accreditation / Trade Certification</h2>
      <p>
        Donec leo libero, bibendum quis nisi a, viverra dignissim lectus.
        Aliquam porta risus vel rhoncus vehicula. Aliquam porta risus vel
        rhoncus vehicula. Aliquam porta risus vel rhoncus vehicula.{' '}
      </p>

      <div className={`card p-4 ${form && 'd-none'}`}>
        <h4 className="mb-4">Current Status</h4>
        <div className="d-flex flex-column w-50 mx-auto">
          <button
            className="btn btn-primary mb-3 text-uppercase p-3"
            onClick={() => setForm(true)}
          >
            Yes, i do
          </button>
          <button
            className="btn btn-secondary text-uppercase mb-3 p-3"
            onClick={() => setForm(false)}
          >
            No, i don't
          </button>
        </div>
      </div>

      <div className={`card p-4 ${!form && 'd-none'}`}>
        <h4 className="mb-4">Current Status</h4>
        <div className="row">
          <div className="col-md-6">
            <button
              className="btn btn-primary btn-block w-100 text-uppercase py-3"
              onClick={() => setForm(true)}
            >
              Yes, i do
            </button>
          </div>
          <div className="col-md-6">
            <button
              className={`btn btn-secondary btn-block w-100 text-uppercase py-3 ${
                form && 'opt'
              }`}
              onClick={() => setForm(false)}
            >
              No, i don't
            </button>
          </div>
        </div>
      </div>
      {accreditations.map((accreditation) => (
        <div className={`card p-4 mt-4 ${!form && 'd-none'}`}>
          <h4 className="mb-4">Trade / Profession {accreditation}</h4>

          <div className="row col-12">
            <div className="col-md-8">
              <label>
                Type of Accreditation(choice of professional or trade)
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
                Name of Organization
                <span className="text-danger">*</span>
              </label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-md-4">
              <label>
                Country of Issue
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
                Province/State of Issue
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
            <div className="col-md-8">
              <label>
                Name of Accreditation / Certification
                <span className="text-danger">*</span>
              </label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-md-4">
              <label>
                Certificate Number
                <span className="text-danger">*</span>
              </label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="row col-12 mt-4">
            <div className="col-md-4 py-3">
              <label className="d-block">Is there a Red Seal? </label>
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
            <div className="col-md-4 py-3">
              <label className="d-block">Is it still valid? </label>
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
            <div className="col-md-4">
              <label>
                Date Issued (YYYY/MM)
                <span className="text-danger">*</span>
              </label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="row col-12 mt-4">
            <div className="col-md-8">
              <label>
                Email Address
                <span className="text-danger">*</span>
              </label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-md-4">
              <label>
                Website
                <span className="text-danger">*</span>
              </label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="row col-12 mt-4">
            <div className="col-md-4">
              <button className="btn btn-primary btn-block w-100 text-uppercase py-3">
                Add a comment
              </button>
            </div>
            <div className="col-md-6">
              <button className="btn btn-primary btn-block w-100 text-uppercase py-3">
                Upload an Accreditation
              </button>
            </div>
          </div>
        </div>
      ))}
      <div className={`row mt-4 mb-4 ${!form && 'd-none'}`}>
        <div className="col-md-9">
          <button
            className="btn btn-secondary btn-block w-100 text-uppercase py-3"
            onClick={() =>
              setAccreditations((prev) => {
                setIndex(index + 1);
                return [...prev, index + 1];
              })
            }
          >
            Add a professional Accreditation / trade Certification
          </button>
        </div>
      </div>
    </div>
  );
};

export default Professional;
