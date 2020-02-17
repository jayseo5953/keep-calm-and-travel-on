import React from 'react';
import TextField from "@material-ui/core/TextField";

export default function SearchBar ({
  onChange
}) {
  return(
    <form>
      <TextField placeholder="Destination, Budget or Activity" onChange={onChange}/>
    </form>
  )
}
