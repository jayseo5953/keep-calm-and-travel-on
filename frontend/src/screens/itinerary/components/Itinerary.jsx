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
import DestinationName from './DestinationName'
import Total from './Total'
import styles from "../../../assets/jss/material-kit-react/views/itineraryPage"
import image from "../../../assets/img/temple-trees.jpg"
import './itinerary.css'

// helpers
import getItinerary from '../helpers/getItinerary'
// import getDestination from '../helpers/getDestination'

const useStyles = makeStyles(styles);

const Itinerary = (props) => {
  
  const history = useHistory();

  // if(!props.user) {
  //   history.push('/')
  // }
  // const userId = props.user? props.user.id:0;

  const [cardAnimaton, setCardAnimation] = useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700)

  console.log('props in intenary', props);

  // let itineraryId='770f061a-9c1e-4979-8bcb-71e0c16a38ea'
  let itineraryId = props.match.params.itineraryId
  const [itineraries, setItineraries] = useState({});


  useEffect(()=> {
    getItinerary(itineraryId)
    .then(res=> setItineraries(res))
    .catch(err=> console.error(err.data))
  },[]);

  // let destinationId='0caa1c9b-9370-4059-b6b6-4817b95b3fe0'
  // const [destination, setDestination] = useState ({});
  // useEffect(()=> {
  //   getDestination(destinationId)
  //   .then(res=> setDestination(res))
  //   .catch(err=> console.error(err.data))
  // },[]);

const classes = useStyles(props);
  console.log("itenaryyyyyyyyy", props.match.params.country)
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
              <h1>{citytravelling}, {countrytravelling}</h1>
              <CardContent>
                {/* <DestinationName /> */}
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
