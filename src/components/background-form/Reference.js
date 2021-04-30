import React, { useState, useEffect } from 'react';

/**
 * @author
 * @function Reference
 **/

const Reference = () => {
  const [fetching, setFetching] = useState(false);
  const [reference, setReference] = useState([1]);
  const [index, setIndex] = useState(1);

  useEffect(() => {
    setFetching(true);
  });

  return (
    <div>
      <h2>Reference</h2>
      <p>
        Donec leo libero, bibendum quis nisi a, viverra dignissim lectus.
        Aliquam porta risus vel rhoncus vehicula. Aliquam porta risus vel
        rhoncus vehicula. Aliquam porta risus vel rhoncus vehicula.{' '}
      </p>
      {reference.map((ref) => (
        <div className="card p-4 mb-5">
          <h4 className="mb-4">Reference {ref}</h4>

          <div className="row py-3">
            <div className="col-12 col-md-4">
              <label>Reference Type</label>
              <select class="form-select" aria-label="Default select example">
                <option value="1">Select</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
              </select>
            </div>
            <div className="col-12 col-md-4">
              <label>Last Name</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-12 col-md-4">
              <label>First Name</label>
              <input type="text" className="form-control" />
            </div>
          </div>

          <div className="row py-3">
            <div className="col-12 col-md-8">
              <label>Title / Company Name</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-12 col-md-4">
              <label>Relationship</label>
              <input type="text" className="form-control" />
            </div>
          </div>

          <div className="row py-3">
            <div className="col-12 col-md-8">
              <label>Email Address</label>
              <input type="text" className="form-control" />
            </div>
          </div>

          <div className="row py-3">
            <div className="col-12 col-md-4">
              <label>Phone Number</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-12 col-md-4">
              <label>Ext</label>
              <input type="text" className="form-control w-25" />
            </div>
            <div className="col-12 col-md-4">
              <label>Mobile Phone</label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="row col-12 mt-4">
            <div className=" col-md-4">
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
          <div className="row col-4 mt-4 p-2">
            <button className="btn btn-primary btn-block w-100 text-uppercase py-3">
              ADD A COMMENT
            </button>
          </div>
        </div>
      ))}

      <div className="row mt-4 mb-4">
        <div className="col-md-6">
          <button
            className="btn btn-secondary btn-block w-100 text-uppercase py-3"
            onClick={() =>
              setReference((prev) => {
                setIndex(index + 1);
                return [...prev, index + 1];
              })
            }
          >
            Add another reference
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reference;
