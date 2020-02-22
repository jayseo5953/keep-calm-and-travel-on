import React from 'react';

import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';


export default function EditButton() {

  return (
      <Fab color="primary" aria-label="edit" id="edit-button">
        <EditIcon 
        />
      </Fab>
  )
}
