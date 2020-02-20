import React, { useState, useEffect } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';
import * as activityData from '../../mockData.json';
require('dotenv').config();

const Map = (props) => {
  let activityData2 = props.activities;
  const [selectedActivity, setSelectedActivity] = useState(null);
  if (activityData2.length === 0) {
    return (
      'NOTHING TO SHOW'
    )
  } else {
    console.log(activityData2[0])
    return (
      <GoogleMap
        defaultZoom={12}
        defaultCenter={{lat: Number(activityData2[0].lat), lng:  Number(activityData2[0].long)}}
      >
        {activityData2.map(activity => {
          {/* console.log("Lat ==> ",activity.latitude) */}
          {/* console.log("Long==> ",activity.longtitude) */}
          return(
          <Marker
            key={activity.id}
            position={{
              lat: Number(activity.lat),
              lng: Number(activity.long)
            }}
            onClick={() => {
              setSelectedActivity(activity);
            }}
            
          />)
        })}
  
        {selectedActivity && (
          <InfoWindow
            onCloseClick={() => {
              setSelectedActivity(null);
            }}
            position={{
              lat: Number(selectedActivity.latitude),
              lng: Number(selectedActivity.longtitude)
            }}
          >
            <div>
              <h2>{selectedActivity.name}</h2>
              <p>{selectedActivity.destination_id}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    );

  }
}
const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function GMap (props) {
  const mapApiKey = process.env.REACT_APP_GMAPKey;
  
  return (
    <div style={{ width: "60vw", height: "60vh" }}>
      <MapWrapped
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${mapApiKey}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        activities={props.activities}
      />
    </div>
  )
}