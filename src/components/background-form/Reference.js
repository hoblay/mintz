import React, { useState, useEffect } from 'react'

/**
* @author
* @function Reference
**/

const Reference = () => {
  const [fetching, setFetching] = useState(false)

useEffect(()=> {
  setFetching(true)
})

 return (
    <div>
        <h2>Reference</h2>
        <p>Donec leo libero, bibendum quis nisi a, viverra dignissim lectus. Aliquam porta risus vel rhoncus vehicula. Aliquam porta risus vel rhoncus vehicula. Aliquam porta risus vel rhoncus vehicula. </p>

          <div className="card p-4">
            <h4 className="mb-4">Reference 1</h4>

            <div className="row py-3">
                <div className="col-12 col-md-4">
                    <label>Reference Type</label>
                    <select class="form-select" aria-label="Default select example">
                      <option value="1">Select</option>
                      <option value="1">Option 1</option>
                      <option value="2">Option 2</option>
                    </select>
                </div>
                <div className="col-12 col-md-4">
                    <label>Last Name</label>
                    <input type="text" className="form-control"/>
                </div>
                <div className="col-12 col-md-4">
                    <label>First Name</label>
                    <input type="text" className="form-control"/>
                </div>
            </div>  

            <div className="row py-3">
                <div className="col-12 col-md-8">
                    <label>Title / Company Name</label>
                    <input type="text" className="form-control"/>
                </div>
                <div className="col-12 col-md-4">
                    <label>Relationship</label>
                    <input type="text" className="form-control"/>
                </div>
            </div>

            <div className="row py-3">
                <div className="col-12 col-md-8">
                    <label>Email Address</label>
                    <input type="text" className="form-control"/>
                </div>
            </div>

            <div className="row py-3">
                <div className="col-12 col-md-4">
                    <label>Phone Number</label>
                    <input type="text" className="form-control"/>
                </div>
                <div className="col-12 col-md-4">
                    <label>Ext</label>
                    <input type="text" className="form-control w-25"/>
                </div>
                <div className="col-12 col-md-4">
                    <label>Mobile Phone</label>
                    <input type="text" className="form-control"/>
                </div>
            </div>

          </div>
    </div>
 )
}

export default Reference