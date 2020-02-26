import axios from 'axios';
import uuid from "uuid/v4";

export default function postToBackEnd (tripName, tripId, userId, columns, total, budget) {
  const columnCopy = { ...columns };
  delete columnCopy["list"];
  for (let key in columnCopy) {
    if (!columnCopy[key].items.length) {
      delete columnCopy[key];
    }
  }
  const trip_id = tripId || uuid();
  return axios.post("/trips", {
    [trip_id]: {
      userId,
      columns: columnCopy,
      trip: tripName,
      total,
      budget
    }
  });
};