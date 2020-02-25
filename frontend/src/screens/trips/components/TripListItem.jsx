import React from 'react'
import Button from '@material-ui/core/Button';

import { Link, useHistory } from "react-router-dom"


const TripListItem = (props) => {
  console.log('trip props------->', props.trip)
  let history = useHistory(); 

  return (
  
    <div className="grid-itinerary">
      <div>

        <Button onClick={()=>{
          history.push(`/itinerary/${props.trip.id}/${props.trip.country}/${props.trip.city}`)
        }}>
          <span className='trip-name'><strong>{props.trip.trip_name}</strong></span></Button>
        <h5 className='trip-destination'>
          <span className='trip-city'>Total: ${props.trip.total_cost} ({props.trip.city}, {props.trip.country}) </span>
        </h5>
      </div>
  </div>
  )
}

export default TripListItem 
