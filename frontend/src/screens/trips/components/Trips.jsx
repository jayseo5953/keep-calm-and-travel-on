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



// const itineraryTrips = {
//   trip1: {
//     id: 'trip_id',
//     img_url: 'https://specials-images.forbesimg.com/imageserve/675172642/960x0.jpg?fit=scale',
//     name: "Bali! <3",
//     day: '3 Days',
//   },
//   trip2: {
//     id: 'trip_id',
//     img_url: 'https://cdn.britannica.com/13/77413-050-95217C0B/Golden-Gate-Bridge-San-Francisco.jpg',
//     name: "Bay areaaaaa!",
//     day: '4 Days'
//   },
//   trip3: {
//     id: 'trip_id',
//     img_url: 'https://i.ytimg.com/vi/m6QeLoX3pT4/maxresdefault.jpg',
//     name: "koreaaaa koreaaaa koreaaa",
//     day: '2 Days'
//   },
//   trip4: {
//     id: 'trip_id',
//     img_url: 'https://cdn-image.departures.com/sites/default/files/styles/responsive_900x600/public/1539722614/duomo-church-architecture-sunset-florence-italy-FLORENCEITALY1018.jpg?itok=p9ytJcSJ',
//     name: "Pretty in Florence",
//     day: '6 Days'
//   }
// }

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
