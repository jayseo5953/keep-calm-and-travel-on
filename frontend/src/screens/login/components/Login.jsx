import React, { useState } from 'react';
import {Redirect , useHistory } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import axios from 'axios';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import Email from "@material-ui/icons/Email";
// import People from "@material-ui/icons/People";

// core components
import Header from '../../../components/Header/Header'
import GridContainer from '../../../components/Grid/GridContainer'
import GridItem from '../../../components/Grid/GridItem'
import Button from '../../../components/CustomButtons/Button'
import Card from '../../../components/Card/Card'
import CardHeader from '../../../components/Card/CardHeader'
import CardBody from '../../../components/Card/CardBody'
import CustomInput from '../../../components/CustomInput/CustomInput';
import CardFooter from '../../../components/Card/CardFooter'


import styles from "../../../assets/jss/material-kit-react/views/loginPage.js"

import image from "../../../assets/img/temple-trees.jpg";

const useStyles = makeStyles(styles);

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
        console.log(res.data.user.first_name)
        setUser({name: res.data.user.first_name, id: res.data.user.id});
      } else {
        console.log('User not found')
        setError('User not found')
      }
    })
    .catch(e => console.error(e))
}



const Login = (props) => {
  const [cardAnimaton, setCardAnimation] = useState("cardHidden");

  const history = useHistory();
  // const [loggedIn, setLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [error, setError] = useState('');

  
  setTimeout(function() {
    setCardAnimation("");
  }, 400);
  const classes = useStyles();
  
  return (
    <div>
       <Header 
       color="transparent" 
       brand="TRIPPER"
       fixed
       user={props.user}
       setUser={props.setUser}
      />
       <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <div className={classes.container} style={{width: "500px"}}>
        <GridContainer>
          <GridItem>
            <Card className={classes[cardAnimaton]}>
              <form className={classes.form} onSubmit={(event) => {attemptLogin(event, userEmail, userPassword, setError, props.setUser);}}>
              {/* { props.user ? <Route><Redirect to='/'></Redirect></Route> : null } */}
              { props.user ? history.goBack() : null }

                <CardHeader color="info" className={classes.cardHeader}>
                        <h4>Login</h4>
                </CardHeader>
                <CardBody>
                  <p className='length-error'>{error}</p>
                  <CustomInput
                    labelText="Email"
                    id="email"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      type: "email",
                      value: userEmail,
                      endAdornment: (
                        <InputAdornment position="end">
                          <Email className={classes.inputIconsColor} />
                        </InputAdornment>
                      ),
                      onChange: (e) => {
                        // console.log(e.target.value);
                        setUserEmail(e.target.value)
                      }
                    }}
                  />
                  <CustomInput
                    labelText="Password"
                    id="pass"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      type: "password",
                      value: userPassword,
                      endAdornment: (
                        <InputAdornment position="end">
                          <Icon className={classes.inputIconsColor}>
                            lock_outline
                          </Icon>
                        </InputAdornment>
                      ),
                      autoComplete: "off",
                      onChange: (e) => {
                        setUserPassword(e.target.value)
                      }
                    }}
                  />
              </CardBody>
              <CardFooter className={classes.cardFooter}>
                <Button type = "submit" simple color="info" size="lg" >Sign In</Button>
              </CardFooter>
            </form> 
          </Card>
        </GridItem>
      </GridContainer>
    </div>
    </div>
  </div> 
  );
};

export default Login;
