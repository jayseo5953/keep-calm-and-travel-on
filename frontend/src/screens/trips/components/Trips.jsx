import React, { useState, useEffect } from 'react';

import { useHistory } from "react-router-dom"
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
import image from "../../../assets/img/wooden-houses-on-body-of-water.jpg"

//helpers
import getTrips from '../helpers/getTrips'

const useStyles = makeStyles(styles);

const Trips = (props) => {

  const history = useHistory();
  if (!props.user) {
    history.goBack()
  }
  const userId = props.user.id
  const [cardAnimaton, setCardAnimation] = useState("cardHidden");

  const [trips, setTrips] = useState([]);

  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  
  useEffect(()=>{
   getTrips(userId)
    .then(res=> setTrips(res.data))
    .catch(err=> console.error(err.data))
  },[]);

  return (
    <div>
      <Header 
       color="transparent"
       brand="TRIPPER"
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

       <div className={classes.container} style={{width: "700px"}}>
       <GridContainer>
          <GridItem>
            <Card className={classes[cardAnimaton]}>
            <CardHeader color="info" className={classes.cardHeader}>
              <h4>Trips for {props.user.name}</h4>
            </CardHeader>
            <CardBody>
              <CardContent>
                
                <TripList trips={trips} setTrips={setTrips}/>
                                
              </CardContent>
                  
              </CardBody>
                {/* <CardFooter className={classes.cardFooter}>
                <h1>Enjoy your trip!</h1>
                
                </CardFooter> */}
            </Card>
          </GridItem>
        </GridContainer>
      </div>
      </div>

    </div>
  );
};

export default Trips;

