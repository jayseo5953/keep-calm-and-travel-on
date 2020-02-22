import React from 'react'

import GridContainer from '../../../components/Grid/GridContainer'

const Body = (props) => {

  return (
    <div>
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
    </div>
  )
}

export default TripCard 
