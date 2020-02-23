import axios from 'axios'
import uuid from "uuid/v4";
export default function manageStates (
  city, 
  tripId, 
  setActivities,
  setColumns,
  columnsFromBackend, 
  budget, 
  setDays
  ) {
  if(!city) {
    setActivities([])
    return
  }
  axios.get(`/api/activities/${city}`)
    .then(res=> {
      const activities = res.data.activities
      const result = activities.map((act)=>{
        return {
          id: uuid(),
          activity_id: act.id,
          price_cents: act.price_cents,
          time_operations: act.time_operation,
          lat: act.lat,
          long: act.long,
          image_url: act.image_url,
          destination_id: act.destination_id,
          name: act.name
        }
      })
      setActivities(result)
      let listOfColumns = columnsFromBackend(result);
      if (!tripId) {
        setColumns(columnsFromBackend(result))
      } else {

        axios.get(`/trips/${tripId}`)
        .then (res => {
          // let newstate = {...listOfColumns}
          // setColumns(listOfColumns);
          console.log(res)
        })

      }

    })
    .catch((err) => {
      if (err.status === 404) {
        console.log("yupnsole 404")
      } else {
        console.error(err);
      }
    })

}