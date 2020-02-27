import axios from 'axios';

export default function deleteTrip(trip, trips, setTrips) {
  let tripId = trip.id;

  let copy = [...trips];

  let newState = copy.filter(trip => trip.id !== tripId);

  setTrips(newState);

  axios.post(`/trips/delete`, {
    tripId
  });
}