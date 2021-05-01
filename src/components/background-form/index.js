import React, { useState, useEffect } from 'react';
import mintz from '../../assets/mintz.png';
import Criminal from './Criminal';
import Documents from './Documents';
import Education from './Education';
import EidVerification from './EidVerification';
import Employment from './Employment';
import Professional from './Professional';
import Reference from './Reference';
import FormSteps from './steps/FormSteps';
import Finish from './Finish';
import Signature from './Signature';
import Subject from './Subject';
import Attention from '../Attention';

import EidPopup from '../EidPopup';

const BackgroundForm = (props) => {
  const [step, setStep] = useState(1);
  const [showAttention, setShowAttention] = useState(false);
  const [showEid, setShowEid] = useState(false);

  useEffect(() => {
    setStep(props.step);
  }, [props.step]);
  return (
    <>
      <div className="col bg-primary left-sidebar overflow-hidden pe-5">
        <img
          src={mintz}
          className="App-logo img-fluid ms-1 mt-3"
          alt="logo"
          width="200px"
        />
        <FormSteps step={step} />
        <span className="total-steps">10</span>
      </div>
      <div className="col bg-light form-items p-5 pb-0 d-flex flex-column justify-content-between">
        {step === 1 && <Subject />}
        {step === 2 && <Employment />}
        {step === 3 && <Reference />}
        {step === 4 && <Education />}
        {step === 5 && <Professional />}
        {step === 6 && <Criminal />}
        {step === 7 && <EidVerification />}
        {step === 8 && <Signature />}
        {step === 9 && <Documents />}
        {step === 10 && <Finish />}

        <Attention
          //show={modalShow}
          show={showAttention ? true : false}
          setShow={(show) => setShowAttention(show)}
          setStep={(step) => setStep(step)}
          changeSlide={(slide) => props.changeSlide(slide)}
        />

        <EidPopup
          show={showEid ? true : false}
          setShow={(show) => setShowEid(show)}
          setStep={(step) => setStep(step)}
          changeSlide={(slide) => props.changeSlide(slide)}
        />

        <button
          className={`btn btn-primary btn-block p-5 btn-next ${
            step != 6 && 'd-none'
          }`}
          onClick={() => {
            setShowAttention(true);
          }}
        >
          Save and continue to next page
        </button>
        <button
          className={`btn btn-primary btn-block p-5 btn-next ${
            step != 7 && 'd-none'
          }`}
          onClick={() => {
            setShowEid(true);
          }}
        >
          Save and continue to next page
        </button>
        <button
          className={`btn btn-primary btn-block p-5 btn-next ${
            step === 6 && 'd-none'
          } ${step === 10 && 'd-none'} ${step === 7 && 'd-none'}`}
          onClick={() => setStep(step + 1)}
        >
          Save and continue to next page
        </button>
      </div>
    </>
  );
};

export default BackgroundForm;
