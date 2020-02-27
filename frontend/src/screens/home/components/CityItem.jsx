import React from "react";
import { Link } from "react-router-dom";
import { promises } from "dns";

const CityItem = props => {
  let budget = !isNaN(props.value) ? props.value : "budget_not_given";
  if (!isNaN(budget)) {
    return (
      <div>
        <Link
          className="test"
          to={`/main/${props.city}/${budget}`}
          onMouseOver={() => {
            props.setBackGround(props.image_url);
          }}
        >
          {!props.numActs? "":
            <>  {props.numActs <= 1
            ? `${props.city} (enjoy ${props.numActs} activity)`
            : `${props.city} (enjoy ${props.numActs} activities)`} 
            </> }
        
        </Link>
      </div>
    );
  }
  return (
    <div>
      <Link
        to={`/main/${props.city}/${budget}`}
        onMouseOver={() => {
          props.setBackGround(props.image_url);
        }}
      >
        {props.city}
      </Link>
    </div>
  );
};

export default CityItem;