import React from 'react';
import {Link} from 'react-router-dom'


const CityItemList = (props) => {
  return (
    <div>
      {props.cities.map(city => {
        return <div><Link to={`/main/${city.city}`} key={city.id} onClick={(event)=> props.setCity(city.city)} >{city.city}</Link> </div>
      })}
    </div>
  );
};

export default CityItemList;