import React from 'react';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// import SearchBar from './SearchBar'
import SearchBar from '../../../components/SearchBar/SearchBar'
import Header from '../../../components/Header/Header'
import Parallax from '../../../components/Parallax/Parallax'
import GridContainer from '../../../components/Grid/GridContainer'
import GridItem from '../../../components/Grid/GridItem'


import SaveTrip from '../../../components/TripModal/TripModal'

import styles from "../../../assets/jss/material-kit-react/views/homePage.js";

const useStyles = makeStyles(styles)

const Home = (props) => {
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
      <Parallax filter image={require("../../../assets/img/airplane-landing.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
            <h1 className="intro-text">Plan your own itinerary right here.</h1>
            <br />
              <h4 className="action-text">
                What is your destination or budget?
              </h4>
              <SearchBar/>
            </GridItem>
            
          </GridContainer>
        </div>
      </Parallax>
    </div>
  );
};

export default Home;
