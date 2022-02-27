import styled from 'styled-components';
import { Circle, GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { PageUnderMenu, HolderText, Heading, H2 } from '../components/PageComponents';
import { useEffect, useState } from 'react';

export const GOOGLE_MAPS_API_KEY = 'AIzaSyD7QSiZtx7bYDaMwAfLxNWdIS7Pxoo0Ehc';

const containerStyle = {
  width: '100%',
  height: '100%',
  flex: 'auto',
};

//  stran  bo pod slash /map

export default function MapPage() {
  const [ center, setCenter ] = useState<google.maps.LatLng | google.maps.LatLngLiteral>({ lat: 46.557296, lng: 15.651202 }); // Default Maribor
  const [ radius, setRadius ] = useState<number>(2000); // Default Ljabljana
  const [ markers, setMarkers ] = useState<(google.maps.LatLng | google.maps.LatLngLiteral)[]>([ { lat: 0, lng: 0 } ]);

  useEffect(()=> {
    navigator.geolocation.getCurrentPosition((pos) => {
      setCenter({ lat: pos.coords.latitude, lng: pos.coords.longitude });

      setMarkers([
        { lat: pos.coords.latitude, lng: pos.coords.longitude }, // Me
        { lat: pos.coords.latitude+0.003, lng: pos.coords.longitude },
        { lat: pos.coords.latitude-0.003, lng: pos.coords.longitude },
        { lat: pos.coords.latitude+0.002, lng: pos.coords.longitude+.0002 },
        { lat: pos.coords.latitude+0.0023, lng: pos.coords.longitude-.0012 },
        { lat: pos.coords.latitude+0.0002, lng: pos.coords.longitude+0.004 },
        { lat: pos.coords.latitude+0.0002, lng: pos.coords.longitude+0.0001 },
      ]);
    });
  }, []);


  return (
    <PageUnderMenu display='flex' flexDirection='column' padding=''>
      <LoadScript
        googleMapsApiKey={GOOGLE_MAPS_API_KEY}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={14}
        >
          {markers.map((pos) => <Marker position={pos}/> )}
          <Circle
            key='center-radius'
            center={center}
            radius={radius}
            options={{
              strokeColor: '#66009a',
              strokeOpacity: 0.8,
              strokeWeight: 2,
              fillColor: `#66009a`,
              fillOpacity: 0.35,
              zIndex: 1,
            }}
          />
        </GoogleMap>
      </LoadScript>
    </PageUnderMenu>
  );
}
