import React from "react";
import CityItem from "./CityItem";

const CityItemList = props => {
  return (
    <div>
      {props.cities.map(city => {
        return (
          <CityItem
            key={city.id}
            city={city.city}
            image_url={city.image_url}
            setCity={props.setCity}
            value={props.value}
            numDays={city.number_of_days}
            numActs={city.number_of_activities}
            setBackGround={props.setBackGround}
          />
        );
      })}
    </div>
  );
};

export default CityItemList;