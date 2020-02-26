import React from "react";
import Button from "@material-ui/core/Button";
import { useHistory, Link } from "react-router-dom";
import { inherits } from 'util';

const TripListItem = props => {
  let history = useHistory();
  return (   
    <div className='itinerary-item'>
      <Link 
        style={{color:'black'}} 
        onClick={()=>{history.push(`/itinerary/${props.trip.id}/${props.trip.country}/${props.trip.city}`)}}
        >
        <span className='trip-name'>{props.trip.trip_name}</span>
      </Link>
      <h5 className='trip-destination'>
        Total: ${props.trip.total_cost} ({props.trip.city}, {props.trip.country})
      </h5>
    </div>
  )
}
export default TripListItem;