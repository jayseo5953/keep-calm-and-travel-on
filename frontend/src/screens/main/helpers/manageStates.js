import axios from 'axios'
import uuid from "uuid/v4";
export default function manageStates (arg,cb,setColumns,columnsFromBackend, budget, setDays) {
  if(!arg) {
    cb([])
    return
  }
  return axios.get(`/api/activities/${arg}`)
    .then(res=> {
      console.log(res)
      const activities = res.data.activities
      console.log("original: ", activities)
     
      const result = activities.map((act)=>{
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
      console.log("after: ",result)
   
      let prices = activities.map((activity)=>{
        return activity.price_cents
      })

      let totalPrice = prices.reduce((accumulator, currentValue)=>{
        return accumulator + currentValue
      },0)/100

      let averagePrice = totalPrice/activities.length
      let averageCostPerDay = averagePrice*3
      let numberOfDays = Math.floor(budget/averageCostPerDay)

      setDays(numberOfDays)
      console.log("total price:",totalPrice)
      console.log("num acts: ", activities.length)
      console.log("avg price: ",averagePrice)
      

      console.log(result)
      cb(result)

      setColumns(columnsFromBackend(result, numberOfDays))
    })
    .catch((err) => {
      if (err.status === 404) {
        console.log("yupnsole 404")
      } else {
        console.error(err);
      }
    })
}