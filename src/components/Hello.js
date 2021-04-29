import React from 'react';
import { Animate, AnimateKeyframes, AnimateGroup } from "react-simple-animate";

const Hello = (props) => {
    
    return (
        <div>
            <h4>Hello,</h4>
            <p className="w-75">This simple, intuitive process will allow us to conduct the required background screening in a fast and efficient manner. Please complete the electronic forms as accurately and thoroughly as possible.</p>
            <button className="btn btn-primary text-uppercase ps-4 pe-4 pt-2 pb-2" onClick={() => props.changeSlide(1)}>Accept</button><br />
            <button type="button" className="btn btn-outline-primary text-uppercase ps-4 pe-4 pt-2 pb-2 mt-2 mb-2">Decline</button><br />
            <a href="" className="mt-3"><small>Terms of Use and Privacy Policy</small></a>
        </div>
        /* <Animate value={props.value} onChange={handleChange} play start={{ transform: 'translate(0, 0)' }} end={{ transform: 'translate(-100px, 0)', opacity:0 }} complete={{ display: 'none' }} duration={0.5}> */
            
        /* </Animate> */
    );
};

export default Hello;