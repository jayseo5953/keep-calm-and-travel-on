import axios from 'axios';
export default function getCities (arg,cb) {
  if(!arg) {
    cb([])
    return
  }
  axios.get(`/api/cities/${arg}`)
    .then(res=> {
      const result = res.data
      console.log(result.cities)
      cb(result.cities)
    })
    .catch((err) => {
      if (err.status === 404) {
        console.log("yupnsole 404")
      } else {
        console.error(err);
      }
    })
}