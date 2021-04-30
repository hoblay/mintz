import React, { useState, useEffect } from 'react';

/**
 * @author
 * @function Signature
 **/

const Signature = () => {
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);
  });

  return (
    <div>
      <h2>Signature</h2>
    </div>
  );
};

export default Signature;
