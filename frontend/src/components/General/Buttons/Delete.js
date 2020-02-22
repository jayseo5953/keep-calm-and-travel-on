import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import Fab from '@material-ui/core/Fab';

export default function Delete() {


  return (
    <Fab color="secondary" aria-label="edit" id="delete-button">
        <DeleteIcon 
        />
      </Fab>
  )
}
