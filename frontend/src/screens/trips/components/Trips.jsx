import React, { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "../../../components/Header/Header";
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import Card from "../../../components/Card/Card";
import CardHeader from "../../../components/Card/CardHeader";
import CardBody from "../../../components/Card/CardBody";

// core components
import styles from "../../../assets/jss/material-kit-react/views/tripItineraryPage";
import TripList from "./TripList";
import image from "../../../assets/img/wooden-houses-on-body-of-water.jpg";

//helpers
import getTrips from "../helpers/getTrips";

const useStyles = makeStyles(styles);

const Trips = props => {

  const history = useHistory();
  const classes = useStyles();

  if (!props.user) {
    history.push("/");
  }

  const userId = props.user ? props.user.id : 0;

  const [cardAnimaton, setCardAnimation] = useState("cardHidden");
  const [trips, setTrips] = useState([]);

  setTimeout(function() {
    setCardAnimation("");
  }, 700);

  useEffect(() => {
    getTrips(userId)
      .then(res => setTrips(res.data))
      .catch(err => console.error(err.data));
  }, [userId]);

  return (
    <div className="trip-main">
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
        <div className={classes.container} style={{ width: "700px" }}>
          <GridContainer>
            <GridItem>
              <Card className={classes[cardAnimaton]}>
                <CardHeader color="info" className={classes.cardHeader}>
                  <h4>
                    {props.user
                      ? `Trips for ${props.user.name}`
                      : "U WILL NEVER SEE THIS"}
                  </h4>
                </CardHeader>
                <CardBody style={{
                   padding:'10px 30px', 
                   paddingBottom:'30px', 
                   height:'55vh'}}>
                  <div>
                    <TripList trips={trips} setTrips={setTrips} />
                  </div>
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