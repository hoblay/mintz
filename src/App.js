import React, { useState } from 'react';
import logo from './logo.svg';
import mintz from './assets/mintz.png';
import Hello from './components/Hello';
import Residing from './components/Residing';
import Attention from './components/Attention';
import BackgroundForm from './components/background-form';

function App() {
  const [slide, setSlide] = useState(0);
  const [modalShow, setModalShow] = useState(false);

  function changeSlide(newValue) {
    setSlide(newValue);
  }

  return (
    <>
      <div className="container-fluid main h-100">
      <div className="row h-100">
        {(slide !== 3) 
        ? 
        <>
        <div className="col-sm-6 bg-primary pe-5 left">
        <img src={mintz} className="App-logo img-fluid ms-1 mt-3" alt="logo" width="160px" /> 
          <div>
            <h2 className="text-white text-end"><strong>Welcome</strong><br /> to the portal</h2>
            <h1 className="text-uppercase text-end">Mintz Global Screening</h1>
          </div>
          <small className="mb-3">Copyright 2021 Mintz Global Screening. All rights reserved. <br />
          Designated trademarks and brands are the property of their respective owners.</small>
        </div>

        <div className="col-sm-6 right d-inline-flex flex-column justify-content-center p-5">
                  
        {(slide === 0) && <Hello changeSlide={slide => setSlide(slide)} />}

        {(slide === 1) && <Residing changeSlide={slide => setSlide(slide)} />}

        <Attention
          //show={modalShow}
          show={(slide === 2) ? true : false}
          onHide={() => setModalShow(false)}
          changeSlide={slide => setSlide(slide)}
        />



        </div>
        </>
        : 
        <BackgroundForm changeSlide={slide => setSlide(slide)} />

        }    

        </div>
      </div>
    </>
  );
}

export default App;
