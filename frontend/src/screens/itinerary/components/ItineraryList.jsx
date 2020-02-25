import React from 'react';
import ItineraryListItem from './ItineraryListItem'

const ItineraryList = (props) => {
  
    return (
      <div>
        <div className="grid-headlines">
        <span><strong>{props.column.name}</strong></span>
        <span><strong>Activity</strong></span>
        <span><strong>Price</strong></span>
        <span><strong>Time of Operation</strong></span>
        </div>


        {props.column.items.map((activity)=>{
          // console.log("activity object -->", activity)
          return(
            <ItineraryListItem
              name={activity.name}
              price={activity.price_cents}
              time={activity.time_operations}
              activityImage={activity.image_url}


              />
          )
        })}
          
      </div>
    )
  }

export default ItineraryList;
