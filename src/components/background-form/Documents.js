import React, { useState, useEffect } from 'react';
import docId from '../../assets/doctemp.jpg';
/**
 * @author
 * @function Documents
 **/

const Documents = () => {
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);
  });

  return (
    <div>
      <h2>Documents</h2>
      <p>
        Please upload two (2) pieces of identification and any documents you
        would like to share with the screening team. If it doesn't work, please{' '}
        <a>click here</a>. Any pieces of ID from the following list is
        acceptable.
      </p>

      <div className="row col-12">
        <div className="bg-grey card col-md-4 p-4">
          <h4>Acceptable IDs</h4>
          <span>Canadian Passport</span>
          <span>Health Insurance Card</span>
          <span>Driver's Licence</span>
          <span>Permanent Resident Card</span>
          <span>Citizenship Card</span>

          <a className="mt-2">Click here for the full list</a>

          <h4 className="mt-3">General Documents</h4>
          <span>Choice 1</span>
          <span>Choice 2</span>
          <span>Choice 3</span>
          <span>Choice 4</span>
          <span>Choice 5</span>
        </div>

        <div className="card col-md-8 p-4">
          <button className="btn btn-primary btn-block w-100 text-uppercase py-3">
            UPLOAD A PHOTO ID
          </button>
          <div className="row col-12 p-3">
            <div className="id-picture col-md-5">
              <span className="cross">x</span>
            </div>
            <div className="id-picture col-md-5">
              <span className="cross">x</span>
            </div>
          </div>
          <button className="btn btn-primary btn-block w-100 text-uppercase py-3">
            UPLOAD A DOCUMENT
          </button>
          <div className="row col-12 p-3">
            <div className="id-picture col-md-5">
              <span className="cross">x</span>
              <span className="doc-file">Lorem-impsom.pdf</span>
            </div>
            <div className="id-picture col-md-5">
              <span className="cross">x</span>
              <span className="doc-file">Lorem-impsom.pdf</span>
            </div>
          </div>
          <div className="row col-12 p-3">
            <div className="col-md-8">
              <select class="form-select" aria-label="Default select example">
                <option value="1">Select</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documents;
