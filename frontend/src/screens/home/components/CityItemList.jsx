import React from 'react';
import CityItem from './CityItem'

const CityItemList = (props) => {
  return (
    <div>
      {props.cities.map(city => {
        return <CityItem key={city.id} city={city.city} setCity={props.setCity} value={props.value} numDays={city.number_of_days} />
      })}
    </div>
  );
};

export default CityItemList;
