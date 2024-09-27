import React from 'react';
import MapComponent from './MapComponent';
import hospitalData from './your-hospitals-data'; // Assuming this exports an array of hospital objects

const h = () => {
  return (
    <div className="App">
      <h1>Hospital Map</h1>
      <MapComponent hospitalData={hospitalData} />
    </div>
  );
};

export default h;