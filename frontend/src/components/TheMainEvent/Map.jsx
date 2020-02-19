import React, { useState, useEffect } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';
import * as activityData from '../../mockData.json';
require('dotenv').config();

const Map = (props) => {
  const [selectedActivity, setSelectedActivity] = useState(null);
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{lat: Number(activityData.activities[0].latitude), lng:  Number(activityData.activities[0].longtitude)}}
    >
      {activityData.activities.map(activity => {
        console.log("Long==> ",activity.longtitude)
        console.log("Lat ==> ",activity.latitude)
        return(
        <Marker
          key={activity.id}
          position={{
            lat: Number(activity.latitude),
            lng: Number(activity.longtitude)
          }}
          onClick={() => {
            setSelectedActivity(activity);
          }}
          icon={{
            url: activity.image_url,
            scaledSize: new window.google.maps.Size(20, 20)
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
      />
    </div>
  )
}