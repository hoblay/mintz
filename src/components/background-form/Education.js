import React, { useState, useEffect } from 'react';

/**
 * @author
 * @function Education
 **/

const Education = () => {
  const [fetching, setFetching] = useState(false);
  const [form, setForm] = useState(false);
  const [diplomas, setDiplomas] = useState([1]);
  const [index, setIndex] = useState(1);

  useEffect(() => {
    setFetching(true);
  });

  return (
    <div>
      <h2>Education</h2>
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
              Yes, i have
            </button>
          </div>
          <div className="col-md-6">
            <button
              className="btn btn-secondary btn-block w-100 text-uppercase py-3"
              onClick={() => setForm(false)}
            >
              No, i haven't
            </button>
          </div>
        </div>
      </div>
      {diplomas.map((diploma) => (
        <div className={`card p-4 mt-4 ${!form && 'd-none'}`}>
          <h4 className="mb-4">Diploma {diploma}</h4>

          <div className="row col-12">
            <div className=" col-md-8">
              <label>
                School Name
                <span className="text-danger">*</span>
              </label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-md-4">
              <label>
                Degree/Diploma/Certificate
                <span className="text-danger">*</span>
              </label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="row col-12 mt-4">
            <div className="col-md-4">
              <label>
                Name on Diploma
                <span className="text-danger">*</span>
              </label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-md-4">
              <label>
                Student ID
                <span className="text-danger">*</span>
              </label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-md-4">
              <label>
                Major
                <span className="text-danger">*</span>
              </label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="row col-12 mt-4">
            <div className="col-md-4">
              <label>
                Graduation Date (YYYY/MM)
                <span className="text-danger">*</span>
              </label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-md-4">
              <label>
                Start Date (YYYY/MM)
                <span className="text-danger">*</span>
              </label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-md-4">
              <label>
                End Date (YYYY/MM)
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
            <div className="col-md-8">
              <label>
                Email
                <span className="text-danger">*</span>
              </label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="row col-12 mt-4 p-2">
            <div className="col-md-6">
              <button className="btn btn-primary btn-block w-100 text-uppercase py-3">
                Add a comment
              </button>
            </div>
            <div className="col-md-6">
              <button className="btn btn-primary btn-block w-100 text-uppercase py-3">
                Add a diploma / degree
              </button>
            </div>
          </div>
        </div>
      ))}
      <div className={`row mt-4 mb-4 ${!form && 'd-none'}`}>
        <div className="col-md-6">
          <button
            className="btn btn-secondary btn-block w-100 text-uppercase py-3"
            onClick={() =>
              setDiplomas((prev) => {
                setIndex(index + 1);
                return [...prev, index + 1];
              })
            }
          >
            Add another Diploma
          </button>
        </div>
      </div>
    </div>
  );
};

export default Education;
