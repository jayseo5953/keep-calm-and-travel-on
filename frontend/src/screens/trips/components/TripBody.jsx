import React from 'react'

import TripList from './TripList'
import CardContent from '@material-ui/core/CardContent';
// core components


const TripBody = (props) => {
  return (
    <div>
      <CardContent>
        <TripList />
      </CardContent>
    </div>
  );
}
export default TripBody
