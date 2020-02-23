import React from 'react'

const TripListItem = (props) => {
  return (
  
    <div className="grid-itinerary">
      {/* <div>
       <img src={props.trip.image_url} height="150px" width="150px"/>
      </div> */}
      <div>
        <span className='trip-name'><strong>{props.trip.trip_name}</strong></span>
        <h5 className='trip-destination'>
          <span className='trip-city'>Total: ${props.trip.total_cost} ({props.trip.city}, {props.trip.country}) </span>
        </h5>
      </div>
  </div>
  )
}

export default TripListItem 
