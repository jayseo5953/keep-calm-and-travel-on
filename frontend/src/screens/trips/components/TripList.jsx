import React from "react";
import { Link } from "react-router-dom";
import TripListItem from "./TripListItem";
import Button from "@material-ui/core/Button";

import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

import "./trip.css";

import deleteTrip from '../helpers/deleteTrips';

const TripList = props => {
  return (
    <div className="grid-container">
      {!props.trips.length ? (
        <div className="no-trips">
          <h2
            style={{
              textAlign: "center",
              fontWeight: "bold",
              marginBottom: "50px"
            }}
          >
            {" "}
            You have no saved Trips!
          </h2>
          <Button variant="contained" color="primary">
            <h4 style={{ fontWeight: "bold" }}>
              <Link to="/">Start Tripper</Link>
            </h4>
          </Button>
        </div>
      ) : (
        ""
      )}
      {props.trips.map(trip => {
        return (
          <div className="trip-item" key={trip.id}>
            <div className="trip-info">
              <TripListItem trip={trip} />
            </div>
            <div className="buttons-container">
              <EditButton trip={trip} />
              <DeleteButton
                deleteTrip={deleteTrip}
                trip={trip}
                trips={props.trips}
                setTrips={props.setTrips}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TripList;