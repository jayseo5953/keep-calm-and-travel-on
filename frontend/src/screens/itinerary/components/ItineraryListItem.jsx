import React from 'react';

const ItineraryListItem = (props) => {
  return (
    <div>
        <div className="grid-activities">
          <span><img src={props.activityImage} width="100px" height ="100px" /></span>
          <span>{props.name}</span>
          <span>${props.price/100}</span>
          <span>{props.time}</span>
        </div>
      </div>
  )
}

export default ItineraryListItem
