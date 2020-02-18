import React, {useState,useEffect,Link} from 'react';
import TextField from "@material-ui/core/TextField";
import Autocomplete from '@material-ui/lab/Autocomplete'
import axios from 'axios';


import CityItemList from './CityItemList'

function getCities (arg,cb) {
  if(!arg) {
    cb([])
    return
  }
  axios.get(`/api/cities/${arg}`)
    .then(res=> {
      const result = res.data
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
export default function SearchBar (props) {
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState('');

  return(
    <>
      <form autoComplete="off" onSubmit={event=>event.preventDefault()}>
        <input 
          type='text'
          onChange={(event)=>getCities(event.target.value, setCities)}
          placeholder='e.g Bali'
          // value={city}
        />
      </form>

      <CityItemList cities={cities} setCity={setCity}/>
    </>
  )

}

// <div style={{width: 300}}>
      
// <Autocomplete
//   id="combo-box-demo"
//   options={cities.map(city => city.city)}
//   // getOptionLabel={option => option.title}
//   style={{ width: 300 }}
//   renderInput={params => (
//     <TextField {...params} label="comboBox" margin="normal" variant="outlined" fullWidth onChange={(event)=>getCities(event.target.value, setCities)} />
// )}
// />
// </div>
