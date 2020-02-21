import React, {useState} from "react";

import { Link } from "react-router-dom"

// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import axios from 'axios';

// core components
import styles from "../../assets/jss/material-kit-react/components/headerStyle";
//assets/jss/material-kit-react/components/headerStyle.js
const logout = (setUser) => {
  axios.get("/logout")
    .then(res => {console.log(res)
      setUser("")
    })
    .catch(e => console.error(e))
}
const useStyles = makeStyles(styles);

export default function Header(props) {
  
  const classes = useStyles();
  let userCookie = Object.fromEntries(document.cookie.split('; ').map(x => x.split('='))) // <-- UserName from Cookie
  console.log(document.cookie.length)
  const [user, setUser] = useState(userCookie);
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
        {user && <h1>{user.name}</h1>}
        <h1>{props.city}</h1>
        
        {(user)?
        <Button className={classes.title} component= { Link } to="/" onClick={(e) => logout(setUser)}>LOG OUT</Button> : 
        <Button className={classes.title} component= { Link } to="/login">LOGIN</Button>}
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
