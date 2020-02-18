import React, {useState,useEffect,Link} from 'react';
import getCities from '../helpers/getCities'
import CityItemList from './CityItemList'

export default function SearchBar (props) {
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState('');

  return(
    <>
      <form autoComplete="off" onSubmit={event=>event.preventDefault()}>
        <input 
          type='text'
          onChange={(event)=>
            {
              setCity(event.target.value);
              getCities(event.target.value, setCities);
            }}
          placeholder='e.g Bali'
          value={city}
        />
      </form>

      <CityItemList cities={cities} setCity={setCity} value={city}/>
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
