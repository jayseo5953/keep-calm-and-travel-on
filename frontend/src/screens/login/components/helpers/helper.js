import axios from 'axios';

const isLoggedIn = function (email, password) {
  
  const req = {
    url: "/users",
    method: "POST",
    data: {email, password}
  }
  axios(req)
    .then(res => console.log(res))
    .catch(e => console.error(e))
}

export default isLoggedIn;