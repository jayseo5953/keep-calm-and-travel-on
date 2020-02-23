import axios from 'axios';

const getTrips = (userId) =>  {
  return axios.get(`/trips/${userId}`);
}

export default getTrips


