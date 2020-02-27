import React from "react";

import { Link, useHistory } from "react-router-dom"

// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import axios from 'axios';

import saveToLocal from  '../../screens/main/helpers/saveToLocal'
// core components
import styles from "../../assets/jss/material-kit-react/components/headerStyle";
//assets/jss/material-kit-react/components/headerStyle.js

const useStyles = makeStyles(styles);

export default function Header(props) {

  const history = useHistory();
  const classes = useStyles();

  const logout = () => {
    axios.get("/logout")
    .then(res => {
      props.setUser(null);
      if (props.tripName) {
        history.push("/")
      }
    })
    .catch(e => console.error(e))
  }

  const user = props.user;

  const { color, brand, fixed, absolute } = props;
  const appBarClasses = classNames({
    [classes.appBar]: true,
    [classes[color]]: color,
    [classes.absolute]: absolute,
    [classes.fixed]: fixed
  });
  // const brandComponent = <Button className={classes.title}>{brand}</Button>;
  return(
    
    <AppBar className={`nav-header ${appBarClasses}`}>
      <div className= {classes.flex}>
        <Button className={classes.title} component= { Link } to="/">{brand}</Button>
      </div>
        {(user)?
        <div>
          <Button className={classes.title} onClick={()=>{history.push(`/trips/${user.name}`)}}>{user.name}</Button>
          <Button className={classes.title} onClick={logout}>LOG OUT</Button> 
        </div>
          :  
        <Button className={classes.title} onClick={()=>{
          if(props.columns) {
            saveToLocal(props.columns, props.budget)
          }
          
          }} component= { Link } to="/login">LOGIN</Button>}
    </AppBar>
  )
}

Header.defaultProp = {
  color: "white"
};

Header.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "transparent",
    "white",
    "rose",
    "dark"
  ]),
  rightLinks: PropTypes.node,
  leftLinks: PropTypes.node,
  brand: PropTypes.string,
  fixed: PropTypes.bool,
  absolute: PropTypes.bool,
  // this will cause the sidebar to change the color from
  // props.color (see above) to changeColorOnScroll.color
  // when the window.pageYOffset is heigher or equal to
  // changeColorOnScroll.height and then when it is smaller than
  // changeColorOnScroll.height change it back to
  // props.color (see above)
  changeColorOnScroll: PropTypes.shape({
    height: PropTypes.number.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "info",
      "success",
      "warning",
      "danger",
      "transparent",
      "white",
      "rose",
      "dark"
    ]).isRequired
  })
};
