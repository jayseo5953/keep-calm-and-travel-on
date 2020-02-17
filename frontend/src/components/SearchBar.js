import React from 'react';
import TextField from "@material-ui/core/TextField";

export default function SearchBar (props) {
  return(
    <form>
      <TextField placeholder="Destination, Budget or Activity" onChange={(event)=> props.onChange(event.target.value)}/>
    </form>
  )
}
