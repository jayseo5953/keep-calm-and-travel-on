import React, {useState} from 'react';
import getCities from '../../screens/home/helpers/getCities'
import CityItemList from '../../screens/home/components/CityItemList'

import '../../screens/home/components/home.css';

import TextField from "@material-ui/core/TextField";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      width: 500,
    },
  },
}));

export default function SearchBar (props) {
  const classes = useStyles()

  const [cities, setCities] = useState([]);
  const [city, setCity] = useState('');

  return(
    <>
      <form className={classes.root} autoComplete="off" onSubmit={event=>event.preventDefault()}>
        <TextField 
          InputLabelProps={{
            style: { color: '#fff', fontSize: "16px", fontFamily: 'Lobster'},
          }}
          InputProps={{style: {color: '#fff', fontSize: '20px', fontFamily: 'Lobster' } }} 
          id="standard-search" 
          label="Enter location or budget" 
          type='text'
          onChange={(event)=>
            {
              setCity(event.target.value);
              getCities(event.target.value, setCities);
            }}
          placeholder='e.g Bali'
        />
      </form>
      <div className="cityItemList">
      <CityItemList 
        cities={cities} 
        setCity={setCity} 
        value={city}
        setBackGround={props.setBackGround}
      />
      </div>
      
    </>
  )

}