import axios from 'axios';

const isLoggedIn = function (email, password) {
  let userName = '';
  const userInput = {email, password: password}
  const req = {
    url: "/users",
    method: "POST",
    data: userInput
  }
  axios(req)
    .then((res) => {
      if (res.data.user) {
        userName = res.data.user.first_name
        console.log(userName)
        return userName;
      } else {
        userName = '';
        console.log(userName)
        return userName
      }
    })
    .catch(e => console.error(e))
}

const assignUserName = (email, password) => {
  return isLoggedIn(email, password)
}
export default assignUserName;