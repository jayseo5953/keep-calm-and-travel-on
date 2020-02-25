import React, { useState, useEffect } from 'react' 
import { useHistory } from "react-router-dom"

// @material-ui/core/components
import { makeStyles } from "@material-ui/core/styles"

// core components
import Header from '../../../components/Header/Header'
import GridContainer from '../../../components/Grid/GridContainer'
import GridItem from '../../../components/Grid/GridItem'
import Card from '../../../components/Card/Card'
import CardHeader from '../../../components/Card/CardHeader'
import CardBody from '../../../components/Card/CardBody'
import CardContent from '@material-ui/core/CardContent';
import CardFooter from '../../../components/Card/CardFooter'
import ItineraryList from './ItineraryList';
import styles from "../../../assets/jss/material-kit-react/views/itineraryPage"
import image from "../../../assets/img/temple-trees.jpg"
import './itinerary.css'

// helpers
import getItinerary from '../helpers/getItinerary'

const useStyles = makeStyles(styles);

const Itinerary = (props) => {
  const [cardAnimaton, setCardAnimation] = useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700)

  let itineraryId = props.match.params.itineraryId
  const [itineraries, setItineraries] = useState({});


  useEffect(()=> {
    getItinerary(itineraryId)
    .then(res=> setItineraries(res))
    .catch(err=> console.error(err.data))
  },[]);

const classes = useStyles(props);
  let countrytravelling = props.match.params.country;
  let citytravelling = props.match.params.city;

  return (
    <div>
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
        <div className={classes.container} style={{width: "800px"}}>
        <GridContainer>
        <GridItem>
            <Card className={classes[cardAnimaton]}>
            <CardHeader color="info" className={classes.cardHeader}>
              <h4>Your Itinerary</h4>
            </CardHeader>
            <CardBody>
              <div className="destination">
              <h1>{citytravelling}, {countrytravelling}</h1>
              </div>
              <CardContent>
                  {Object.entries(itineraries).map(([columnId,column]) => {
                    return <ItineraryList column={column} itineraries={itineraries} />
                  })}
               </CardContent>

            </CardBody>
              <CardFooter className={classes.cardFooter}>
                <h1>Total cost:</h1>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>

        </div>
      </div>
    
    </div>
  )
}

export default Itinerary 
