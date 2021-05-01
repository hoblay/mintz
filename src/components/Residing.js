import React from 'react';
import { Animate, AnimateKeyframes, AnimateGroup } from 'react-simple-animate';

const Residing = (props) => {
  return (
    <Animate
      play
      start={{ transform: 'translate(0, 0)', opacity: 0 }}
      end={{ transform: 'translate(0, 0)', opacity: 1 }}
      duration={0.7}
      complete={{ display: 'block' }}
    >
      <div className="w-75">
        <a
          href=""
          className="back-link text-dark mb-4"
          onClick={() => props.changeSlide(1)}
        >
          Back
        </a>
        <h4>Hi John Doe,</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a
          sapien mi.{' '}
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a
          sapien mi. Nulla ut augue scelerisque, gravida eros sed, scelerisque
          nisl. In dapibus ultrices diam, eget rutrum felis euismod vel.{' '}
        </p>
        <p>
          For Assistance, consectetur adipiscing elit. Integer a sapien mi.
          Nulla ut augue scelerisque, gravida eros sed, scelerisque nisl.{' '}
        </p>
        <p className="lead mt-4">Where are you currently residing?</p>
        <div className="">
          <select className="form-select">
            <option>Choose your option</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </select>
        </div>
        <button
          className="btn btn-primary text-uppercase ps-4 pe-4 pt-2 pb-2 mt-3"
          onClick={() => props.changeSlide(3)}
        >
          Start
        </button>
      </div>
    </Animate>
  );
};

export default Residing;
