import React, { useState, useEffect } from 'react';

/**
 * @author
 * @function Finish
 **/

const Finish = () => {
  return (
    <div>
      <h2>Thank you!</h2>
      <p className="thanks-text col-md-7">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
        consequatur ullam quas maxime laborum laudantium, odio laboriosam aut
        dicta ex qui ab numquam libero quos omnis illum deleniti ad quis esse!
        Cumque itaque laborum voluptates, repellendus vero molestias atque
        mollitia rerum amet.{' '}
      </p>
      <p className="thanks-text col-md-7">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
        consequatur ullam quas maxime laborum laudantium, odio laboriosam aut
        dicta.{' '}
      </p>
      <p className="thanks-text col-md-7">
        Lorem ipsum dolor sit amet consectetur adipisicing?{' '}
      </p>

      <div className="d-flex flex-column w-50">
        <button className="btn btn-secondary btn-block text-uppercase mb-3 p-3">
          Email me this confirmation
        </button>
        <button className="btn btn-primary btn-block mb-3 text-uppercase p-3">
          Finish
        </button>
      </div>
    </div>
  );
};

export default Finish;
