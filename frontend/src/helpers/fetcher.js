import axios from 'axios';
const getActivityByCityName = function (cityName) {
  let req = {
    url: `/api/activities/${cityName}`,
    method: `GET`
  }
  return axios(req)
};