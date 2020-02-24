import React from 'react';

const ItineraryListItem = (props) => {
  let trip = props.trips
  

  return (
    <div className="itinerary-grid">
      <div className="city-name">
       <img src={props.imageUrl} width="200px" height ="200px"/>
        <div>
          <h2>{props.city} , {props.country}</h2>
        </div>
      </div>
      <div class="profile">
        <h3>Trip for: {props.firstName} {props.lastName}</h3>
      </div>
      <div className="itinerary-info">
        <h2>{props.scheduleName}</h2>
        <div className="activity-info">
          <p><strong>Activity: </strong>{props.name}</p>
          <p><strong>Price: </strong>{props.priceCent}</p>
          <p><strong>Time of Operation: </strong>{props.timeOperation}</p>
        </div>
      </div>
      <div className="itinerary-total-cost">
        <h4>Total cost of your trip: ${props.totalCost}</h4>
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
