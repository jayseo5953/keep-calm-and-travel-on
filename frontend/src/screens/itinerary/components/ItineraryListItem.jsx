import React from 'react';

const ItineraryListItem = (props) => {
  return (
    <div>
        <div className="grid-activities">
          <span><img src={props.activityImage} id="image" width="130px" height ="130px" /></span>
          <span>{props.name}</span>
          <span>${props.price/100}</span>
          <span>{props.time}</span>
        </div>
      </div>
  )
}

export default ItineraryListItem
