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
          input 
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




// import React from 'react';
// import TextField from "@material-ui/core/TextField";
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles(theme => ({
//   root: {
//     '& .MuiTextField-root': {
//       margin: theme.spacing(1),
//       width: 500,
//     },
//   },
// }));

// export default function SearchBar (props) {
//   const classes = useStyles()
//   return(
//     // <form>
//     //   <TextField placeholder="Destination, Budget or Activity" onChange={(event)=> props.onChange(event.target.value)}/>
//     // </form>
//     <form className={classes.root} noValidate autoComplete="off">
//     <TextField 
//     id="standard-search" 
//     label="Enter your destination, budget or activity" 
//     type="search" 
//     onChange={(event)=> props.onChange(event.target.value)}
//     />
//     </form>
//   )
// }

