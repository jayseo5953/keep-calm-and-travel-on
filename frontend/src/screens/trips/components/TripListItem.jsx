import React from 'react'
import Button from '@material-ui/core/Button';

import axios from 'axios';

postToItineraryPage = () => {
  console.log("gone to the wormhole")

  return axios.post('/itinerary', {
    
  })
}

const TripListItem = (props) => {
  return (
  
    <div className="grid-itinerary">
      {/* <div>
       <img src={props.trip.image_url} height="150px" width="150px"/>
      </div> */}
      <div>
        <Button onClick={()=>{
          console.log("cliiiiicked")
          // postToItineraryPage()
          // .then((res) => {
          //   console.log("to the itinerarypage")
          // })
          // .catch((err)=>{
          //   console.err("Failed to go to Itinerary page")
          // })
        }}>
          <span className='trip-name'><strong>{props.trip.trip_name}</strong></span></Button>
        <h5 className='trip-destination'>
          <span className='trip-city'>Total: ${props.trip.total_cost} ({props.trip.city}, {props.trip.country}) </span>
        </h5>
      </div>
  </div>
  )
}

export default TripListItem 
