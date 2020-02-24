import React from 'react';

const ItineraryListItem = (props) => {
  let trip = props.trips
  

  return (
    <div className="itinerary-grid">
      <div className="itinerary-info">
        {/* <h2>{props.scheduleName}</h2> */}
        {/* <div className="activity-info">
          <img src={props.activityImage} width="100px" height ="100px" />
          <p><strong>Activity: </strong>{props.name} </p>
          <p><strong>Price: </strong> ${props.price/100} </p>
          <p><strong>Time of Operation: </strong>{props.time} </p>
        </div> */}
        <div className="grid-activities">
          <span><img src={props.activityImage} width="100px" height ="100px" /></span>
          <span>{props.name}</span>
          <span>${props.price/100}</span>
          <span>{props.time}</span>
        </div>
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
