import React from 'react';

const ItineraryListItem = (props) => {
  let trip = props.trip
  

  return (
    <div className="itinerary-grid">
      <div className="city-name">
      <h1>{props.city}</h1>
      </div>
      <div className="itinerary-info">
        <p>Full Name: {props.firstName} {props.lastName}</p>
        <p>Schedule: {props.scheduleName}</p>
        <p>Activity: {props.name}</p>
        <p>Cost: {props.priceCent}</p>
        <p>Time of Operation: {props.timeOperation}</p>
        <p>{props.imageUrl}</p>
      </div>
    </div>
  )
}


export default ItineraryListItem

{/* 
        <span>
          <p>
            {props.firstName}
            {props.lastName}
          </p>
        </span>
      </div> */}
