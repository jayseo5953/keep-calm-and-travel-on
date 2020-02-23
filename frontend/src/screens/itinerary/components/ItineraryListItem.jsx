import React from 'react';

const ItineraryListItem = (props) => {
  let trip = props.trip
  

  return (
    <div className="itinerary-grid">
      <div className="city-name">
       <img src={props.imageUrl} width="200px" height ="200px"/>
       <div>
        <h3>{props.city} , {props.country}</h3>
       </div>
      </div>
      <div className="itinerary-info">
        <h2>{props.scheduleName}</h2>
        <p><strong>Activity: </strong>{props.name}</p>
        <p><strong>Price: </strong>{props.priceCent}</p>
        <p><strong>Time of Operation: </strong>{props.timeOperation}</p>
      </div>
      <div className="itinerary-total-cost">
        <h3>Total cost of your trip: ${props.totalCost}</h3>
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
