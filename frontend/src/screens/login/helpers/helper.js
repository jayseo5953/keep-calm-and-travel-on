import axios from 'axios';

const cookieSetter = function (email, password) {
  const userInput = {email, password: password}
  const req = {
    url: "/users",
    method: "POST",
    data: userInput
  }
  return axios(req)
};

const attemptLogin = (event, email, password, setError, setUser) => {
  event.preventDefault();
  cookieSetter(email, password)
    .then((res) => {
      if (res.data) {
        setUser({name: res.data.user.first_name, id: res.data.user.id});
      } else {
        setError('User not found')
      }
    })
    .catch(e => console.error(e))
}

export default attemptLogin;