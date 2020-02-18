import axios from 'axios'

export default function getActivities (arg,cb) {
  if(!arg) {
    cb([])
    return
  }
  return axios.get(`/api/activities/${arg}`)
    .then(res=> {
      const result = res
      cb(result.data.activities)
    })
    .catch((err) => {
      if (err.status === 404) {
        console.log("yupnsole 404")
      } else {
        console.error(err);
      }
    })
}