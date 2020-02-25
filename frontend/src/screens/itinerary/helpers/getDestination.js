import axios from 'axios';

export default function getDestination (arg) {
  console.log("herrrro")
  return axios.get(`/itinerary/${arg}`)
    .then(res=> {
      console.log("CONSOLE LOGGING FROM GETDESTINATION.JS",res.data)
      const result = res.data
      let newState={};

          res.data.forEach((obj) => {
            newState[obj.destination_id] = {
              name: obj.schedule_name,
              items:[],
              total:0
            } 
          })

          res.data.forEach((obj)=>{
            const item = {
              id: obj.destination_id,
              // activity_id: obj.itinerary_id,
              // price_cents: obj.price_cents,
              // time_operations: obj.time_operation,
              // lat: obj.lat,
              // long: obj.long,
              // image_url: obj.image_url,
              // destination_id: obj.destination_id,
              // name: obj.name
            }
            newState[obj.schedule_id].items.push(item);
          })
        
      return newState
  })
    .catch((err) => {
      if(err.status=== 404) {
        console.log("oh no 404")
      } else {
        console.error(err);
      }
    })
}
