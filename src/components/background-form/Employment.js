import React, { useState, useEffect } from 'react'

/**
* @author
* @function Employment
**/

const Employment = () => {
  const [fetching, setFetching] = useState(false)

useEffect(()=> {
  setFetching(true)
})

 return (
    <div>
     <h2>Employment</h2>
        <p>Donec leo libero, bibendum quis nisi a, viverra dignissim lectus. Aliquam porta risus vel rhoncus vehicula. Aliquam porta risus vel rhoncus vehicula. Aliquam porta risus vel rhoncus vehicula. </p>
        <div className="card p-4">
          <h4 className="mb-4">Current Status</h4>
          <div className="d-flex flex-column w-50 mx-auto">
            <button className="btn btn-primary mb-3 text-uppercase py-2">I am currently employed</button>
            <button className="btn btn-secondary text-uppercase mb-3">I am currently unemployed</button>
          </div>
        </div>      
   </div>
 )
}

export default Employment