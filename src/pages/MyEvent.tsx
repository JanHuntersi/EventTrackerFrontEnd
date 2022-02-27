import styled from 'styled-components';
import { PageUnderMenu } from '../components/PageComponents';
import { Circle, GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import partyLogo from '../tmpPictures/slika.jpg';
import { GOOGLE_MAPS_API_KEY } from '../pages/MapPage';
import { useState } from 'react';
import MapPicker from 'react-google-map-picker';

export const Wrapper = styled.div`
background-color: ${( props ) => props.theme.colors.primaryColor};;
width:100%;
min-height:500px;
padding:3em;

@media only screen and (min-width: 800px){
margin-left:5%;
width:90%;

}
`;

export const EventImage = styled.img`
width:100%;`;

export const HalfSideWrapper = styled.div`
display:flex;
flex-direction:row;
align-items:center;
justify-content:center;
width:100%;
@media only screen and (max-width: 800px){
  flex-direction:column;
  align-items:start;
  }
`;

export const LeftSide = styled.div`
min-width:30%;
@media only screen and (max-width: 800px){
  width:100%;}
`;

export const RightSide = styled.div`
min-width:70%;
height:80%;
@media only screen and (max-width: 800px){
  width:100%;}
`;


export const HeadingEvents = styled.div`
text-align:center;
margin-top:2em;
margin-bottom:2em;
h1{
  font-size:3.2em;
}
@media only screen and (max-width: 800px){
 font-size:1em;
}
`;

export const SmallHeading = styled.h2`
font-size:1.5em;
font-weight:300;
`;

export const BigHeading = styled.h1`
font-size:2em;
font-weight:500;
`;

const mockup ={
  eventName: 'Zabava na Stuk',
  eventHost: 'Kiki Wolf',
  eventTime: '18/2/2022',
  eventDescription: 'ŠTUK je največji stalni prireditveni prostor v Sloveniji, kjer se skozi leto odvijejo številni različni dogodki kulturne, športne in zabavne vsebine.',
  eventLocation: 'Gosposvetska cesta 83, 2000 Maribor',
};

const DefaultLocation: any = { lat: 46.563000, lng: 15.626930 };
const DefaultZoom = 500;

export default function MyEvent() {
  const [ defaultLocation, setDefaultLocation ] = useState<any>(DefaultLocation);
  const [ location, setLocation ] = useState<any>(defaultLocation);
  const [ zoom, setZoom ] = useState<number>(DefaultZoom);

  function handleChangeLocation(lat: number, lng: number) {
    setLocation({ lat: lat, lng: lng });
  }
  function handleChangeZoom(newZoom: any) {
    setZoom(newZoom);
  }

  function handleResetLocation() {
    setDefaultLocation({ ...DefaultLocation });
    setZoom(DefaultZoom);
  }


  return (

    <PageUnderMenu display='flex' flexDirection='column' padding='1em' >
      <HeadingEvents>
        <h1>Event Details</h1>
      </HeadingEvents>

      <Wrapper>
        <HalfSideWrapper>

          <LeftSide>
            <SmallHeading>Event Name:</SmallHeading>
            <BigHeading>{mockup.eventName}</BigHeading>
            <br></br>
            <SmallHeading>Event Host:</SmallHeading>
            <BigHeading>{mockup.eventHost}</BigHeading>
            <br></br>
            <SmallHeading>Event Time:</SmallHeading>
            <BigHeading>{mockup.eventTime}</BigHeading>

          </LeftSide>

          <RightSide><EventImage src={partyLogo}/></RightSide>
        </HalfSideWrapper>
        <br></br>
        <SmallHeading>Event Description:</SmallHeading>
        <BigHeading>{mockup.eventDescription}</BigHeading>
        <br></br>
        <SmallHeading>Event Location:</SmallHeading>
        <MapPicker
          defaultLocation={defaultLocation}
          zoom={zoom}
          style={{ height: '500px' }}
          onChangeLocation={handleChangeLocation}
          onChangeZoom={handleChangeZoom}
          apiKey={GOOGLE_MAPS_API_KEY}/>

      </Wrapper>

    </PageUnderMenu>
  );
}
