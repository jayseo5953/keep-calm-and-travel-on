import React, { useState } from 'react';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";

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

import image from "../../../assets/img/sign.jpg";

const useStyles = makeStyles(styles);

const Login = () => {
  const [cardAnimaton, setCardAnimation] = useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  
  return (
    <div>
       <Header 
       color="transparent" 
       brand="LIGHTHOUSE LABS"
       fixed
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
            <form className={classes.form}>
            <CardHeader color="info" className={classes.cardHeader}>
                    <h4>Login</h4>
            </CardHeader>
            <CardBody>
                    <CustomInput
                      labelText="First Name"
                      id="first"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <People className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      labelText="Email"
                      id="email"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "email",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
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
                        endAdornment: (
                          <InputAdornment position="end">
                            <Icon className={classes.inputIconsColor}>
                              lock_outline
                            </Icon>
                          </InputAdornment>
                        ),
                        autoComplete: "off"
                      }}
                    />
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button simple color="info" size="lg">
                      Sign In
                    </Button>
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
