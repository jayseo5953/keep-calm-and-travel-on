import React, { useState } from 'react';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from '../../../components/Header/Header'
import GridContainer from '../../../components/Grid/GridContainer'
import GridItem from '../../../components/Grid/GridItem'
import Card from '../../../components/Card/Card'
import CardHeader from '../../../components/Card/CardHeader'
import CardBody from '../../../components/Card/CardBody'
import CardContent from '@material-ui/core/CardContent';
import CardFooter from '../../../components/Card/CardFooter'

// core components
import styles from "../../../assets/jss/material-kit-react/views/tripItineraryPage"
import TripList from './TripList';
// import image from "../../../assets/img/landing-bg"

const useStyles = makeStyles(styles);

const Trips = () => {
  const [cardAnimaton, setCardAnimation] = useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  return (
    <div>

      <Header 
       color="dark" 
       brand="LIGHTHOUSE LABS"
       fixed
      />

       <div className={classes.container} style={{width: "700px"}}>
       <GridContainer>
          <GridItem>
            <Card className={classes[cardAnimaton]}>
            <CardHeader color="info" className={classes.cardHeader}>
              <h4>Trip Itinerary</h4>
            </CardHeader>
            <CardBody>
              <CardContent>
                <TripList />
              </CardContent>
                  
              </CardBody>
                <CardFooter className={classes.cardFooter}>
                <h1>Enjoy your trip!</h1>
                
                </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
      

    </div>
  );
};

export default Trips;
