import axios from 'axios'
import uuid from "uuid/v4";
export default function manageStates (
  city, 
  tripId, 
  setColumns,
  columnsFromBackend, 
  acitivities,
  setActivities

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
          time_operation: act.time_operation,
          lat: act.lat,
          long: act.long,
          image_url: act.image_url,
          destination_id: act.destination_id,
          name: act.name
        }
      })
      setActivities(result)

      let columnsFromLocal = JSON.parse(localStorage.getItem('columns')); 

      let listOfColumns = columnsFromLocal || columnsFromBackend(result)

      localStorage.removeItem("columns");

      if (!tripId) {
        setColumns(listOfColumns)
      } else {

        axios.get(`/trips/edit/${tripId}`)
        .then (res => {
          // let newstate = {...listOfColumns}
          // setColumns(listOfColumns);
          console.log("CONSOLE LOGGING FROM MANAGESTATE",res.data)

          let list = listOfColumns['list'];
          let newState={list};

          res.data.forEach((obj) => {
            newState[obj.schedule_id] = {
              name: obj.schedule_name,
              items:[],
              total:0
            } 
          })

          res.data.forEach((obj)=>{
            const item = {
              id: obj.itinerary_id,
              activity_id: obj.activity_id,
              price_cents: obj.price_cents,
              time_operations: obj.time_operation,
              lat: obj.lat,
              long: obj.long,
              image_url: obj.image_url,
              destination_id: obj.destination_id,
              name: obj.name
            }
            newState[obj.schedule_id].items.push(item);
          })
            setColumns(newState)
  
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