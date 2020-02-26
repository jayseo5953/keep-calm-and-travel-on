import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import Fab from "@material-ui/core/Fab";

export default function Delete(props) {
  return (
    <Fab
      onClick={() => props.deleteTrip(props.trip, props.trips, props.setTrips)}
      color="secondary"
      aria-label="edit"
      id="delete-button"
    >
      <DeleteIcon />
    </Fab>
  );
}