import React, { useState, useEffect } from 'react'

/**
* @author
* @function EidVerification
**/

const EidVerification = () => {
  const [fetching, setFetching] = useState(false)

useEffect(()=> {
  setFetching(true)
})

 return (
    <>
     {fetching && 
     <div>
         <h2>EID Verification</h2>
         <p><strong className="text-danger text-uppercase">Please do not refresh the page!</strong> Donec leo libero, bibendum quis nisi a, viverra dignissim lectus. Aliquam porta risus vel rhoncus vehicula. Aliquam porta risus vel rhoncus vehicula. Aliquam porta risus vel rhoncus vehicula.</p>

         <div className="row">
             <div className="card col-sm-4 p-4">
                 <h5>Q1</h5>
                 <p>Which of the following is your middle or former name?</p>
                 <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <label className="form-check-label text-uppercase" for="flexRadioDefault1">
                        Option1
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <label className="form-check-label text-uppercase" for="flexRadioDefault1">
                        Option2
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <label className="form-check-label text-uppercase" for="flexRadioDefault1">
                        Option3
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <label className="form-check-label text-uppercase" for="flexRadioDefault1">
                        Option4
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <label className="form-check-label text-uppercase" for="flexRadioDefault1">
                        Option5
                    </label>
                </div>
             </div>

             <div className="card col-sm-4 p-4">
                 <h5>Q2</h5>
                 <p>Your credit file indicates you may have a gas card or account which was oppened arround November 2015. Please choose the credit provider for this account from the following options.</p>
                 
                 <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <label className="form-check-label text-uppercase" for="flexRadioDefault1">
                        Option1
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <label className="form-check-label text-uppercase" for="flexRadioDefault1">
                        Option2
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <label className="form-check-label text-uppercase" for="flexRadioDefault1">
                        Option3
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <label className="form-check-label text-uppercase" for="flexRadioDefault1">
                        Option4
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <label className="form-check-label text-uppercase" for="flexRadioDefault1">
                        Option5
                    </label>
                </div>
             </div>

             <div className="card col-sm-4 p-4">
                 <h5>Q3</h5>
                 <p>Your credit file indicates you may have a gas card or account which was oppened arround April 2020. Please choose the credit provider for this account from the following options.</p>
                 
                 <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <label className="form-check-label text-uppercase" for="flexRadioDefault1">
                        Option1
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <label className="form-check-label text-uppercase" for="flexRadioDefault1">
                        Option2
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <label className="form-check-label text-uppercase" for="flexRadioDefault1">
                        Option3
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <label className="form-check-label text-uppercase" for="flexRadioDefault1">
                        Option4
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <label className="form-check-label text-uppercase" for="flexRadioDefault1">
                        Option5
                    </label>
                </div>
             </div>
         
         
         
         </div>

     </div>
     
     }
   </>
 )
}

export default EidVerification