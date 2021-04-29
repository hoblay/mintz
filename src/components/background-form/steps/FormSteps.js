import React, { useState, useEffect } from 'react'

/**
* @author
* @function FormSteps
**/

const FormSteps = (props) => {
    const { step } = props;
  const [fetching, setFetching] = useState(false);
  

useEffect(()=> {
  setFetching(true)
})

 return (
    <div className={`indicators d-flex flex-column step_${step}`}>
        <div className={`step d-inline-flex justify-content-end align-items-start ${(step === 1) && 'active'}`}>
            <span className="step-name me-5">Subject</span>
            <span className="step-number">01</span>
        </div>
        <div className={`step d-inline-flex justify-content-end align-items-start ${(step === 2) && 'active'}`}>
            <span className="step-name me-5">Employment</span>
            <span className="step-number">02</span>
        </div>
        <div className={`step d-inline-flex justify-content-end align-items-start ${(step === 3) && 'active'}`}>
            <span className="step-name me-5">Reference</span>
            <span className="step-number">03</span>
        </div>
        <div className={`step d-inline-flex justify-content-end align-items-start ${(step === 4) && 'active'}`}>
            <span className="step-name me-5">Education</span>
            <span className="step-number">04</span>
        </div>
        <div className={`step d-inline-flex justify-content-end align-items-start ${(step === 5) && 'active'}`}>
            <span className="step-name me-5">Professional / Trade</span>
            <span className="step-number">05</span>
        </div>
        <div className={`step d-inline-flex justify-content-end align-items-start ${(step === 6) && 'active'}`}>
            <span className="step-name me-5">Criminal</span>
            <span className="step-number">06</span>
        </div>
        <div className={`step d-inline-flex justify-content-end align-items-start ${(step === 7) && 'active'}`}>
            <span className="step-name me-5">EID Verification</span>
            <span className="step-number">07</span>
        </div>
   </div>
 )
}

export default FormSteps