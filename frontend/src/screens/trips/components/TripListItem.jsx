import React from 'react'
import Button from '@material-ui/core/Button'

const postToBackEnd = (tripName,tripId, userId,columns,total, budget)=> {

  // const columnCopy = {...columns};
  // delete columnCopy['list'];

  // for(let key in columnCopy) {
  //   if (!columnCopy[key].items.length) {
  //     delete columnCopy[key]
  //   }
  // }

  // const trip_id = tripId || uuid();

  // return axios.post('/itinerary', {
  //   [trip_id]:{
  //     userId,
  //     columns: columnCopy,
  //     trip: tripName,
  //     total,
  //     budget
  //   }
  // })
}


const TripListItem = (props) => {
  return (
  
    <div className="grid-itinerary">
      {/* <div>
       <img src={props.trip.image_url} height="150px" width="150px"/>
      </div> */}
      <div>
        <Button onClick={()=>{
          postToBackEnd(tripName, props.tripId, props.user.id ,props.columns, props.total, props.budget)
          .then((res)=>{
            console.log("here")
            handleClose(setOpen);
            history.push(`/trips/${props.user.name}`)
          })
          .catch((err)=>{
            alert("Saving was unsuccessful")
          })
        }} 
        ><span className='trip-name'><strong>{props.trip.trip_name}</strong></span></Button>
        <h5 className='trip-destination'>
          <span className='trip-city'>Total: ${props.trip.total_cost} ({props.trip.city}, {props.trip.country}) </span>
        </h5>
      </div>
  </div>
  )
}

export default TripListItem 
