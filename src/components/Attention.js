import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const Attention = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div className="row py-4">
          <div className="col-md-4 d-inline-flex flex-column justify-content-between align-items-center">
            <img
              src={process.env.PUBLIC_URL + '/images/Attention.svg'}
              width="64px"
              height="64px"
            />
            <div className="d-inline-flex flex-column">
              <button
                onClick={() => {
                  props.changeSlide(3);
                  props.setShow(false);
                  props.setStep(7);
                }}
                className="btn btn-primary text-uppercase ps-4 pe-4 pt-2 pb-2"
              >
                Proceed
              </button>
              <button
                onClick={() => {
                  props.changeSlide(3);
                  props.setShow(false);
                  props.setStep(6);
                }}
                className="btn btn-outline-primary text-uppercase ps-4 pe-4 pt-2 pb-2 mt-2 mb-2"
              >
                Decline
              </button>
            </div>
          </div>
          <div className="col-md-7">
            <h3>Attention!</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              volutpat mi lectus, sodales convallis nulla accumsan sit amet.
              Etiam convallis cursus turpis in finibus. Ut vitae sem a dui
              suscipit lobortis. Fusce justo velit, lacinia sed egestas sed,
              dapibus non neque. cursus fermentum neque.{' '}
            </p>

            <p>
              Nunc lacinia, arcu et viverra fringilla, nunc turpis feugiat arcu,
              nec ornare tellus massa vitae neque. Vivamus varius enim lectus,
              vitae fringilla dui pharetra eu. Morbi et lacus est. Vestibulum
              fringilla pretium tortor. Nam semper, dolor eget tempus viverra,
              erat orci commodo metus, fames ac turpis egestas.
            </p>

            <p>
              Donec leo libero, bibendum quis nisi a, viverra dignissim lectus.
              Aliquam porta risus vel rhoncus vehicula. Aenean sed velit congue,
              egestas velit in, elementum velit. Sed sit amet posuere mi. Mauris
              et viverra lectus. vulputate bibendum. Morbi feugiat purus turpis,
              ut pellentesque libero tristique ut.{' '}
            </p>
          </div>
        </div>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
};

export default Attention;
