import React, { useState, useEffect } from 'react' 

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



function Itinerary(props) {
  


  const [cardAnimaton, setCardAnimation] = useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700)


  let itineraryId='c4c0f750-98ac-48a5-b7a9-a4cc94d41471'
  const [itineraries, setItineraries] = useState({});

  useEffect(()=> {
    getItinerary(itineraryId)
    .then(res=> setItineraries(res))
    .catch(err=> console.error(err.data))
  },[]);

const classes = useStyles();

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
        <div className={classes.container} style={{width: "800px"}}>
        <GridContainer>
        <GridItem>
            <Card className={classes[cardAnimaton]}>
            <CardHeader color="info" className={classes.cardHeader}>
              <h4>Bayyyy areaaa</h4>
            </CardHeader>
            <CardBody>
              <h1>San Francisco, USA</h1>
              <CardContent 
              //  firstName={value.first_name}
               // lastName={value.last_name}
               // city={value.city}
               // country={value.country}
               // scheduleName={value.schedule_name}
               // activityId={value.activity_id}
               // name={value.name}
               // priceCent={value.price_cents}
               // timeOperation={value.time_operation}
               // totalCost={value.total_cost}
              >
                {Object.entries(itineraries).map(([columnId,column]) => {
                  return <ItineraryList column={column} itineraries={itineraries} />
                }
                )}

              {/* <div className="city-name">
                    <img src={props.imageUrl} width="200px" height ="200px"/>
                      <div>
                        <h2>{props.city} , {props.country}</h2>
                      </div>
                    </div> */}
                                
              </CardContent>
                  
              </CardBody>
                <CardFooter className={classes.cardFooter}>
                    <div>
                      <h2>Total cost: ${props.total}</h2>
                    </div>
                
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
