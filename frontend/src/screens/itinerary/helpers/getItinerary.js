import axios from 'axios'

const getItinerary = (itineraryId) => {
  return axios.get(`/itinerary/${itineraryId}`);
}


export default getItinerary;
