import React from 'react'
import Button from '@material-ui/core/Button';

import { Link } from "react-router-dom"

// import axios from 'axios';

// postToItineraryPage = () => {
//   console.log("gone to the wormhole")

//   return axios.post('/itineraries', {
    
//   })
// }

const TripListItem = (props) => {
  return (
  
    <div className="grid-itinerary">
      {/* <div>
       <img src={props.trip.image_url} height="150px" width="150px"/>
      </div> */}
      <div>
        <Link to='/itinerary/:itineraryId'>
        <Button onClick={()=>{
          console.log("i am cliiiiicked")
        
          // history.push('/itineraries/')
          // postToItineraryPage()
          // .then((res) => {
          //   console.log("to the itinerarypage")
          //   history.push('/itineraries/`${props.user.name}`)
          // })
          // .catch((err)=>{
          //   console.err("Failed to go to Itinerary page")
          // })
        }}>
          <span className='trip-name'><strong>{props.trip.trip_name}</strong></span></Button></Link>
        <h5 className='trip-destination'>
          <span className='trip-city'>Total: ${props.trip.total_cost} ({props.trip.city}, {props.trip.country}) </span>
        </h5>
      </div>
  </div>
  )
}

export default TripListItem 
