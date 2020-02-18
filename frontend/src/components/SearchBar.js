import React from 'react';
import TextField from "@material-ui/core/TextField";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 500,
    },
  },
}));

export default function SearchBar (props) {
  const classes = useStyles()
  return(
    // <form>
    //   <TextField placeholder="Destination, Budget or Activity" onChange={(event)=> props.onChange(event.target.value)}/>
    // </form>
    <form className={classes.root} noValidate autoComplete="off">
    <TextField 
    id="standard-search" 
    label="Enter your destination, budget or activity" 
    type="search" 
    onChange={(event)=> props.onChange(event.target.value)}
    />
    </form>
  )
}

