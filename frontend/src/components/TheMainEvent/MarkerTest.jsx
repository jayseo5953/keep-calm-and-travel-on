import React from 'react';
import { Marker } from 'react-google-maps';

import './Marker.css';

const MarkerTest = (props) => {
  const { color, name, id, lat, lng} = props
  console.log(lat)
  return (
    <div>
      <div 
        className='pin bounce' 
        style={{backgroundColor: color, cursor: 'pointer'}} title={name}>
      </div>
      <div className='pulse'>
        {/* <Marker 
          position={{lat: lat, lng: lng}}
        /> */}
      </div>
    </div>
  );
};

export default MarkerTest;