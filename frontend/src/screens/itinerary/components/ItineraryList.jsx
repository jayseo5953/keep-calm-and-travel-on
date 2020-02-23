import React from 'react';
import ItineraryListItem from './ItineraryListItem'

const dayColumns = [
  {
    "city": "Bali",
    "first_name": "Tausif",
    "last_name": "Khan",
    "trip_name" : "Bay areaaaaaa",
    "city": "San Francisco",
    "country": "USA",
    "schedule_name": "Day 1",
    "activity_id": "3",
    "name": "Sunset Tour",
    "price_cents": "5000",
    "time_operation": "5am-5pm",
    "image_url": "https://storage.needpix.com/rsynced_images/bali-992566_1280.jpg",
    "total_cost" : "180",

  }
]


const ItineraryList = (props) => {

  return dayColumns.map((value) => {
    return (
      <div>
        <ItineraryListItem
          imageUrl={value.image_url}
          city={value.city}
          firstName={value.first_name} 
          lastName={value.last_name}
          scheduleName={value.schedule_name}
          activityId={value.activity_id}
          name={value.name}
          priceCent={value.price_cents}
          timeOperation={value.time_operation}
          />
      </div>
    )
    })
  }

export default ItineraryList;
