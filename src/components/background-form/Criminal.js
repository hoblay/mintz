import React, { useState, useEffect } from 'react'

/**
* @author
* @function Criminal
**/

const Criminal = () => {
  const [fetching, setFetching] = useState(false)

useEffect(()=> {
  setFetching(true)
})

 return (
    <>
     {fetching && 
     <div>
         <h2>Criminal</h2>
         <p>Donec leo libero, bibendum quis nisi a, viverra dignissim lectus. Aliquam porta risus vel rhoncus vehicula. Aliquam porta risus vel rhoncus vehicula. Aliquam porta risus vel rhoncus vehicula.</p>

         <div className="bg-grey card p-4">
             <h4 className="mb-4">Instructions Declaration of Criminal Records (IMPORTANT NOTICES)</h4>
             <div className="row">
                 <div className="col-sm-6">
                     <h5 className="text-uppercase">Declare the following</h5>
                     <p>All convictions for offences under federal law.</p>
                 </div>
                 <div className="col-sm-6">
                    <h5 className="text-uppercase">Do not Declare the following</h5>
                    <p>Donec leo libero, bibendum quis nisi a, viverra dignissim lectus. Aliquam porta risus vel rhoncus vehicula.</p>
                    <p>Donec leo libero, bibendum quis nisi a, viverra dignissim lectus. Aliquam porta risus vel rhoncus vehicula.</p>
                    <p>Donec leo libero, bibendum quis nisi a, viverra dignissim lectus. Aliquam porta risus vel rhoncus vehicula.</p>
                    <p>Donec leo libero, bibendum quis nisi a, viverra dignissim lectus. Aliquam porta risus vel rhoncus vehicula.</p>
                    <p>Donec leo libero, bibendum quis nisi a, viverra dignissim lectus. Aliquam porta risus vel rhoncus vehicula.</p>
                 </div>
             </div>
             
         </div>

         <div className="card p-4">
            <h5>Conviction</h5>
            <p className="mb-2">Have you ever been convicted of a criminal offence for which a Pardon has not been issued in Canada?</p>
            <div className="row">
                <div className="col-sm-6">
                    <button className="btn btn-primary btn-block w-100 text-uppercase py-3">Yes, i have</button>
                </div>
                <div className="col-sm-6">
                    <button className="btn btn-secondary btn-block w-100 text-uppercase py-3">No, i haven't</button>
                </div>
            </div>
         </div>
     </div>
     
     }
   </>
 )
}

export default Criminal