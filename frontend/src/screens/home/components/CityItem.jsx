import React from 'react';
import {Link} from 'react-router-dom'


const CityItem = (props) => {

  let budget = !isNaN(props.value)? props.value: 'budget_not_given'
  if (!isNaN(budget)){
    return (
      <div>
        <Link to={`/main/${props.city}/${budget}`}>{props.city} (enjoy {props.numActs} activities!)</Link>
      </div>
    );
  }
  return (
    <div>
      <Link 
        to={`/main/${props.city}/${budget}`} 
        onMouseOver={()=> { props.setBackGround(props.image_url) }}>{props.city}
      </Link>
    </div>
  );
};

export default CityItem;

// onClick={(event)=> props.setCity(props.city)}