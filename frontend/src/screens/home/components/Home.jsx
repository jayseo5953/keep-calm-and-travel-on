import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import SearchBar from "../../../components/SearchBar/SearchBar";
import Header from "../../../components/Header/Header";
import Parallax from "../../../components/Parallax/Parallax";
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";


import styles from "../../../assets/jss/material-kit-react/views/homePage.js";

const useStyles = makeStyles(styles);

const Home = props => {
  //clears localStorage in case user land home again
  localStorage.removeItem("columns");
  // console.log("local storage", localStorage.getItem("columns"));  <==== MIGHT USE THIS LATER ON
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
      <Parallax className="test" filter image={props.background}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <h1 className="intro-text">
                Plan your activities for your trip.
              </h1>
              <br />
              <h4 className="action-text">
                What is your destination or budget?
              </h4>
              <SearchBar setBackGround={props.setBackGround} />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
    </div>
  );
};

export default Home;
