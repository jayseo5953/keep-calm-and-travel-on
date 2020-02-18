import React from 'react';
import CityItem from './CityItem'

const CityItemList = (props) => {
  console.log("cityitemlist: ", props.cities)
  return (
    <div>
      {props.cities.map(city => {
        return <CityItem key={city.id} city={city.city} setCity={props.setCity} value={props.value} numDays={city.number_of_days}/>
      })}
    </div>
  );
};

export default CityItemList;