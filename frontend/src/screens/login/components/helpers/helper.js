import axios from 'axios';

const getUserByEmail = function (e) {
  const formData = new FormData(this)
  const req = {
    url: "/users",
    method: "POST",
    data: formData
  }
  axios(req)
    .then(res => console.log(res))
    .catch(e => console.error(e))
}

export default getUserByEmail;