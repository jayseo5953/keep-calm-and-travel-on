import axios from 'axios'
import uuid from "uuid/v4";
export default function getActivities (arg,cb,setColumns,columnsFromBackend) {
  if(!arg) {
    cb([])
    return
  }
  return axios.get(`/api/activities/${arg}`)
    .then(res=> {
      console.log(res)
      const result = res.data.activities.map((act)=>{
        return {
          id: uuid(),
          activity_id: act.id,
          price_cents: act.price_cents,
          time_operations: act.time_operations,
          latitude: act.latitude,
          longtitude: act.longitude,
          image_url: act.image_url,
          destination_id: act.destination_id,
          name: act.name
        }
      })
      console.log(result)
      cb(result)
      
      setColumns(columnsFromBackend(result))
    })
    .catch((err) => {
      if (err.status === 404) {
        console.log("yupnsole 404")
      } else {
        console.error(err);
      }
    })
}