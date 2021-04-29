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
            <img src={process.env.PUBLIC_URL + '/images/Attention.svg'}  width="64px" height="64px" />
            <div className="d-inline-flex flex-column">
              <button onClick={() => props.changeSlide(3)} className="btn btn-primary text-uppercase ps-4 pe-4 pt-2 pb-2">Proceed</button>
              <button onClick={() => props.changeSlide(1)} className="btn btn-outline-primary text-uppercase ps-4 pe-4 pt-2 pb-2 mt-2 mb-2">Decline</button>
            </div>
          </div>
          <div className="col-md-8">
            <h3>Attention!</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat mi lectus, sodales convallis nulla accumsan sit amet. Etiam convallis cursus turpis in finibus. Ut vitae sem a dui suscipit lobortis. Fusce justo velit, lacinia sed egestas sed, dapibus non neque. Donec vestibulum, diam a gravida dictum, metus purus blandit est, ut finibus ipsum lacus ut dolor. Aenean erat ligula, rhoncus feugiat nisl a, cursus fermentum neque. </p>

            <p>Nunc lacinia, arcu et viverra fringilla, nunc turpis feugiat arcu, nec ornare tellus massa vitae neque. Vivamus varius enim lectus, vitae fringilla dui pharetra eu. Morbi et lacus est. Vestibulum fringilla pretium tortor. Nam semper, dolor eget tempus viverra, erat orci commodo metus, vitae ornare tortor risus eget sapien. Aenean molestie libero mi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>

            <p>Donec leo libero, bibendum quis nisi a, viverra dignissim lectus. Aliquam porta risus vel rhoncus vehicula. Aenean sed velit congue, egestas velit in, elementum velit. Sed sit amet posuere mi. Mauris et viverra lectus. Morbi ut dapibus sem, a tristique massa. Donec neque enim, lacinia non mauris et, rhoncus convallis magna. Cras ultrices tortor et diam vulputate bibendum. Morbi feugiat purus turpis, ut pellentesque libero tristique ut. </p>

            <p>Nunc vel fermentum massa. Vestibulum congue hendrerit erat, et mattis urna mattis vitae. Morbi porta elementum purus et pulvinar. Vivamus vel facilisis augue. Mauris eu interdum erat, sit amet semper dolor. Integer luctus faucibus lectus, quis ultrices felis. Vivamus ornare mattis nisi, eu luctus ipsum imperdiet pellentesque. Ut sed libero interdum, aliquam ante ut, porttitor metus. Integer eu purus eu dolor tempus hendrerit. </p>
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