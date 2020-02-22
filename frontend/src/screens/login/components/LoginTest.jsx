import React, { useState } from 'react';
import {BrowserRouter as Router, Link, Redirect, useHistory } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import axios from 'axios';
import { checkPropTypes } from 'prop-types';

const cookieSetter = function (email, password) {
  const userInput = {email, password: password}
  const req = {
    url: "/users",
    method: "POST",
    data: userInput
  }
  return axios(req)
}



const LoginTest = (props) => {
  // let user = Object.fromEntries(document.cookie.split('; ').map(x => x.split('=')))
  // console.log(user)
  const history = useHistory(); // <--- CAN BE USED LATER
  const [loggedIn, setLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('tausif@gmail.com');
  const [userPassword, setUserPassword] = useState('');


  const attemptLogin = (event, email, password) => {
    event.preventDefault();
    cookieSetter(email, password)
      .then((res) => {
        if (res.data) {
          console.log(res.data.user.first_name)
          props.setUser({name: res.data.user.first_name});
        }
      })
      .catch(e => console.error(e))
  }

  return (
    <div>
      
      <h1>Welcome to Login Test</h1>
      {/* {loggedIn && <div><h2>{userName} is Logged In</h2></div>} */}
      <form onSubmit={(event) => {
        attemptLogin(event, userEmail, userPassword);
        // history.push("/")
      }}>
        { props.user ? <Route><Redirect to='/'></Redirect></Route> : null }
        <input type='text' placeholder='Email' value={userEmail} onChange={(e) => setUserEmail(e.target.value)}></input>
        <br></br>
        <br></br>
        <input type='password' placeholder='password' value={userPassword} onChange={(e) => setUserPassword(e.target.value)}></input>
        <br></br>
        <br></br>
        {/* <button type='submit'>{loggedIn ? 'Log Out' : 'Log In'}</button> */}

        <br></br>
        <br></br>
        <button><Route><Link to='/'>Home</Link></Route></button>
      </form>
    </div>
  );
};

export default LoginTest;