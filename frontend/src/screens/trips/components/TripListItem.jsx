import React from 'react'

const itineraryTrips = {
  trip1: {
    id: 'trip_id',
    img_url: 'https://specials-images.forbesimg.com/imageserve/675172642/960x0.jpg?fit=scale',
    city: 'Bali',
    day: '3 Days',
  },
  trip2: {
    id: 'trip_id',
    img_url: 'https://cdn.britannica.com/13/77413-050-95217C0B/Golden-Gate-Bridge-San-Francisco.jpg',
    city: 'San Francisco',
    day: '4 Days'
  },
  trip3: {
    id: 'trip_id',
    img_url: 'https://i.ytimg.com/vi/m6QeLoX3pT4/maxresdefault.jpg',
    city: 'Jeju',
    day: '2 Days'
  },
  trip4: {
    id: 'trip_id',
    img_url: 'https://cdn-image.departures.com/sites/default/files/styles/responsive_900x600/public/1539722614/duomo-church-architecture-sunset-florence-italy-FLORENCEITALY1018.jpg?itok=p9ytJcSJ',
    city: 'Florence',
    day: '6 Days'
  }
}


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
