import React from 'react';
import { RingLoader } from 'react-spinners';

const Loader = () => (
  <div className="flex justify-center items-center h-screen">
    <RingLoader
      color="#BF8B15"
      size={100}
    />
    <p>Fetching Tours...</p>
  </div>
);

export default Loader;
