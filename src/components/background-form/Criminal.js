import React, { useState, useEffect } from 'react';

/**
 * @author
 * @function Criminal
 **/

const Criminal = () => {
  const [fetching, setFetching] = useState(false);
  const [form, setForm] = useState(false);
  const [convictions, setConvictions] = useState([1]);

  const [index, setIndex] = useState(1);

  useEffect(() => {
    setFetching(true);
  });

  return (
    <>
      {fetching && (
        <div>
          <h2>Criminal</h2>
          <p>
            Donec leo libero, bibendum quis nisi a, viverra dignissim lectus.
            Aliquam porta risus vel rhoncus vehicula. Aliquam porta risus vel
            rhoncus vehicula. Aliquam porta risus vel rhoncus vehicula.
          </p>

          <div className="bg-grey card p-4">
            <h4 className="mb-4">
              Instructions Declaration of Criminal Records (IMPORTANT NOTICES)
            </h4>
            <div className="row">
              <div className="col-sm-6">
                <h5 className="text-uppercase">Declare the following</h5>
                <p>All convictions for offences under federal law.</p>
              </div>
              <div className="col-sm-6">
                <h5 className="text-uppercase">Do not Declare the following</h5>
                <p>
                  Donec leo libero, bibendum quis nisi a, viverra dignissim
                  lectus. Aliquam porta risus vel rhoncus vehicula.
                </p>
                <p>
                  Donec leo libero, bibendum quis nisi a, viverra dignissim
                  lectus. Aliquam porta risus vel rhoncus vehicula.
                </p>
                <p>
                  Donec leo libero, bibendum quis nisi a, viverra dignissim
                  lectus. Aliquam porta risus vel rhoncus vehicula.
                </p>
                <p>
                  Donec leo libero, bibendum quis nisi a, viverra dignissim
                  lectus. Aliquam porta risus vel rhoncus vehicula.
                </p>
                <p>
                  Donec leo libero, bibendum quis nisi a, viverra dignissim
                  lectus. Aliquam porta risus vel rhoncus vehicula.
                </p>
              </div>
            </div>
          </div>

          <div className="card p-4 mt-4">
            <h5>Conviction</h5>
            <p className="mb-2">
              Have you ever been convicted of a criminal offence for which a
              Pardon has not been issued in Canada?
            </p>
            <div className="row ">
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

          {convictions.map((conviction) => (
            <div className={`card p-4 mt-4 ${!form && 'd-none'}`}>
              <h4 className="mb-4">Conviction {conviction}</h4>

              <div className="row col-12">
                <div className="col-md-4">
                  <label>
                    Conviction Date
                    <span className="text-danger">*</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-4">
                  <label>
                    Location
                    <span className="text-danger">*</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="row col-12 mt-4">
                <div className="col-md-8">
                  <label>
                    Offense
                    <span className="text-danger">*</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-4">
                  <label>
                    Penalty
                    <span className="text-danger">*</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>
              </div>

              <div className="row col-12 mt-4">
                <div className="col-md-4">
                  <button className="btn btn-primary btn-block w-100 text-uppercase py-3">
                    Add a penalty
                  </button>
                </div>
                <div className="col-md-4">
                  <button className="btn btn-primary btn-block w-100 text-uppercase py-3">
                    Add a comment
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className={`row mt-4 mb-4 ${!form && 'd-none'}`}>
        <div className="col-md-4">
          <button
            className="btn btn-secondary btn-block w-100 text-uppercase py-3"
            onClick={() =>
              setConvictions((prev) => {
                setIndex(index + 1);
                return [...prev, index + 1];
              })
            }
          >
            Add a conviction
          </button>
        </div>
      </div>
    </>
  );
};

export default Criminal;
