import React, { useState } from 'react';
import {BrowserRouter as Router, Link, Redirect, useHistory } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import axios from 'axios';

const cookieSetter = function (email, password) {
  const userInput = {email, password: password}
  const req = {
    url: "/users",
    method: "POST",
    data: userInput
  }
  return axios(req)
}

const myFunc = (event, email, password, setLoggedIn, setUserName) => {
  event.preventDefault();
  cookieSetter(email, password)
    .then((res) => {
      if (res.data) {
        setUserName(res.data.user.first_name)
        setLoggedIn(true);
        console.log(res.data.user.first_name)
      }
    })
    .catch(e => console.error(e))
}

const LoginTest = () => {
  // let user = Object.fromEntries(document.cookie.split('; ').map(x => x.split('=')))
  // console.log(user)
  const history = useHistory();
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  return (
    <div>
      
      <h1>Welcome to Login Test</h1>
      {loggedIn && <div><h2>{userName} is Logged In</h2></div>}
      <form onSubmit={(event) => {
        myFunc(event, userEmail, userPassword, setLoggedIn, setUserName);
        // history.push("/")
      }}>
        { loggedIn ? <Route><Redirect to='/'></Redirect></Route> : null }
        <input type='text' placeholder='Email' value={userEmail} onChange={(e) => setUserEmail(e.target.value)}></input>
        <br></br>
        <br></br>
        <input type='password' placeholder='password' value={userPassword} onChange={(e) => setUserPassword(e.target.value)}></input>
        <br></br>
        <br></br>
        <button type='submit'>{loggedIn ? 'Log Out' : 'Log In'}</button>

        <br></br>
        <br></br>
        <button><Route><Link to='/'>Home</Link></Route></button>
      </form>
    </div>
  );
};

export default LoginTest;