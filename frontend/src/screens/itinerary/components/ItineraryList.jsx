import React from 'react';
import ItineraryListItem from './ItineraryListItem'

const dayColumns = [
  {
    "trip_name" : "Bay areaaaaaa",
    "city": "San Francisco",
    "country": "USA",
    "schedule_name": "Day 1",
    "activity_id": "3",
    "name": "Sunset Tour",
    "price_cents": "$60",
    "time_operation": "5am-5pm",
    "image_url": "https://cdn.britannica.com/13/77413-050-95217C0B/Golden-Gate-Bridge-San-Francisco.jpg",
    "total_cost": "180",
  },
]


const ItineraryList = (props) => {

  return dayColumns.map((value) => {
    return (
      <div>
        <ItineraryListItem
          imageUrl={value.image_url}
          city={value.city}
          country={value.country}
          scheduleName={value.schedule_name}
          activityId={value.activity_id}
          name={value.name}
          priceCent={value.price_cents}
          timeOperation={value.time_operation}
          totalCost={value.total_cost}
          />
      </div>
    )
    })
  }

export default ItineraryList;
