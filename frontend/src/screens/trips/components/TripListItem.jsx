import React from 'react'

const TripListItem = (props) => {
  let itineraries = props.itineraries
  return (
    <div>
      {/* <p>{itineraries.schedule_id}</p>
      <p>{itineraries.activity_id}</p>
      <p>{itineraries.time_schedule}</p> */}
      <p>schedule_id</p>
      <p>activity_id</p>
      <p>time_schedule</p>
    </div>
  )
}

export default TripListItem 
