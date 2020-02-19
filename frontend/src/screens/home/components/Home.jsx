import React from 'react';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import SearchBar from './SearchBar'
import Header from '../../../components/Header/Header'
import Parallax from '../../../components/Parallax/Parallax'
import GridContainer from '../../../components/Grid/GridContainer'
import GridItem from '../../../components/Grid/GridItem'

import styles from "../../../assets/jss/material-kit-react/views/homePage.js";

const useStyles = makeStyles(styles);

const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <Header 
       color="transparent" 
       brand="LIGHTHOUSE LABS"
       fixed
      //  changeColorOnScroll={{
      //    height: 400,
      //    color: "white"
      //  }}
      />
      <Parallax filter image={require("../../../assets/img/miami-bg.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
            <h1 className={classes.title}>Keep on and carry on.</h1>
              <h4>
                Choose your destination, budget or activity
                and we will give you recommendations!
              </h4>
              <SearchBar />
            </GridItem>
            
          </GridContainer>
        </div>
      </Parallax>
      
    </div>
  );
};

export default Home;
