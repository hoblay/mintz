import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const EidPopup = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="modal-eid justify-content-between align-items-left">
        <div className="row py-4">
          <div className="d-inline-flex flex-column ">
            <img
              src={process.env.PUBLIC_URL + '/images/Attention.svg'}
              width="64px"
              height="64px"
            />
          </div>
        </div>
        <div className="">
          <h3>Forgot Anything?</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            volutpat mi lectus, sodales convallis nulla accumsan sit amet. Etiam
            convallis cursus turpis in finibus. Ut vitae sem a dui suscipit
            lobortis. Fusce justo velit, lacinia sed egestas sed, dapibus non
            neque. cursus fermentum neque.{' '}
          </p>
        </div>
        <div className="row">
          <div className="">
            <button
              onClick={() => {
                props.changeSlide(0);
                props.setShow(false);
                props.setStep(1);
              }}
              className="btn btn-primary text-uppercase ps-4 pe-4 pt-2 pb-2"
            >
              Proceed
            </button>
            <button
              onClick={() => {
                props.changeSlide(0);
                props.setShow(false);
                props.setStep(1);
              }}
              className="btn btn-outline-primary text-uppercase ps-4 pe-4 pt-2 pb-2 mt-2 mb-2"
            >
              Decline
            </button>
          </div>
        </div>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
};

export default EidPopup;
