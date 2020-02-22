import React from 'react'
import TripListItem from './TripListItem'

import DeleteButton from '../../../components/General/Buttons/Delete'
import EditButton from '../../../components/General/Buttons/EditButton'

import './trip.css';

const TripList = (props) => {
  // let itineraries = props.itineraries
  // return itineraries.map(itinerary=>{
  //   return <TripListItem itinerary={itinerary}/>
  return (
    <div className="grid-container">
      <div>
        <TripListItem  />
      </div>
      <div className="buttons-container">
        <EditButton />
        <DeleteButton />
      </div>
  </div>
  );
};

export default TripList;
