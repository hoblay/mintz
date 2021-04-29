import React, {useState} from 'react';
import mintz from '../../assets/mintz.png';
import Criminal from './Criminal';
import Education from './Education';
import EidVerification from './EidVerification';
import Employment from './Employment';
import Professional from './Professional';
import Reference from './Reference';
import FormSteps from './steps/FormSteps';
import Subject from './Subject';

const BackgroundForm = () => {
    const [step, setStep] = useState(1);

    return (
        <>
            <div className="col bg-primary left-sidebar overflow-hidden pe-5">
                <img src={mintz} className="App-logo img-fluid ms-1 mt-3" alt="logo" width="200px" /> 
                <FormSteps step={step} />
                <span className="total-steps">10</span>
            </div> 
            <div className="col bg-light form-items p-5 pb-0 d-flex flex-column justify-content-between">    
                {(step === 1) && <Subject />}
                {(step === 2) && <Employment/>}
                {(step === 3) && <Reference/>}
                {(step === 4) && <Education/>}
                {(step === 5) && <Professional/>}
                {(step === 6) && <Criminal/>}
                {(step === 7) && <EidVerification/>}

                <button className="btn btn-primary btn-block p-5 btn-next" onClick={() => setStep(step+1)}>Save and continue to next page</button>
            </div>
        </>
    );
};

export default BackgroundForm;