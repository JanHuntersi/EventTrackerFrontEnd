import styled from 'styled-components';
import { PageUnderMenu, HolderText, Heading, H2 } from '../../components/PageComponents';
import EventCreationMenu from '../../components/EventCreationMenu';
import MapPicker from 'react-google-map-picker';

// mockupImage
import partyLogo from '../../tmpPictures/partyLogo.jpg';
import { GOOGLE_MAPS_API_KEY } from '../MapPage';
import { useState } from 'react';

export const Wrapper = styled.div`
padding-left:1em;
padding-right:1em;
#height:55vh;
#background-color:blue;

display:flex;
flex-direction:column

`;
export const WrapperBoxes = styled.div`
width:100%;
min-height:20em;
#background-color:blue;
padding:0.5em;
display:flex;
flex-direction:row;
align-items:center;
justify-content: space-between;
@media only screen and (max-width: 850px){
    
    flex-direction:column;
    min-height:100%;
*{
    margin:2em;
}    
  }

`;

export const Boxes = styled.div`
width:30%;
height:30vh;
background-color: ${( props ) => props.theme.colors.thirdColor};
@media only screen and (max-width: 850px){
    width:80%;
    height:35vh;
        
  }
  display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
p{font-size:1.2em;}
`;

export const WrapperButton = styled.div`
width:20%;
height:8vh;
background-color:brown;
margin-left:40%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
color:white;
border-radius:20px;
text-align:center;
font-size:1.5em;
justify-content: center;
background-color: ${( props ) => props.theme.colors.primaryColor};

`;

export const ComponentsWrapper = styled.div`
width:90%;

margin-left:5%;
min-height: 50vh;
#background-color:blue;
display:flex;
flex-direction:column;

`;

export const ImageEventNameWrapper = styled.div`
margin-top:2em;
margin-bottom:1em;

width:100%;
display:flex;
flex-direction:row;
justify-content:space-between;
@media only screen and (max-width: 850px){
  flex-direction:column;
  align-items:center;}
`;

export const ImageHolder = styled.img`
width:200px;
@media only screen and (max-width: 850px){
  margin-bottom:40px;}
`;
export const NameHolder = styled.div`
background-color: ${( props ) => props.theme.colors.thirdColor};
width:100%;
margin-left:2.5%;
height:200px;
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:end;
padding:3em;

div{
  height:100%;
  display:flex;
flex-direction:column;
justify-content:space-around;

}

@media only screen and (max-width: 850px){
  flex-direction:column;
margin-left:0%;
width: 90%;
align-items:center;
}
`;

export const SideTimeWrapper = styled.div`
@media only screen and (max-width: 850px){
  width:90%;
}
width:48.75%;

background-color: ${( props ) => props.theme.colors.thirdColor};
`;

export const LocationWrapper = styled.div`
display:flex;
padding:1.5em;
min-height:65vh;
display:flex;
flex-direction: column;
`;

export const SmallHeading = styled.h2`
font-size:1.5em;
font-weight:300;
`;

export const BigHeading = styled.h1`
font-size:2em;
font-weight:500;
`;

const DefaultLocation: any = { lat: 46.05108, lng: 14.50513 };
const DefaultZoom = 2000;

export default function CreateEventPageInformation() {
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
    <PageUnderMenu display='flex' flexDirection='column' padding='' >
      <EventCreationMenu ActiveEl="Info"></EventCreationMenu>
      <HolderText>
        <Heading>
          <H2>Lets start with some basic info,</H2>
          <p>now is time for the fun part! Tell us where the event will be held and at what time, </p>
          <p>dont forget to choose the location, and the profile picture!</p>
        </Heading>
      </HolderText>
      <ComponentsWrapper>
        <ImageEventNameWrapper>
          <ImageHolder src={partyLogo}></ImageHolder>
          <NameHolder>
            <div>
              <SmallHeading>Event Name</SmallHeading>
              <BigHeading>Jan's Birthday</BigHeading>
            </div>
            <p>12/100</p>
          </NameHolder>
        </ImageEventNameWrapper>
        <ImageEventNameWrapper>

          <SideTimeWrapper>
            <LocationWrapper>
              <SmallHeading>Location</SmallHeading>
              <MapPicker
                defaultLocation={defaultLocation}
                zoom={zoom}
                style={{ height: '500px' }}
                onChangeLocation={handleChangeLocation}
                onChangeZoom={handleChangeZoom}
                apiKey={GOOGLE_MAPS_API_KEY}/>
            </LocationWrapper>
          </SideTimeWrapper>

          <SideTimeWrapper>
            <LocationWrapper>
              <SmallHeading>EventTime</SmallHeading>
              <BigHeading>15/1/2022 16:30</BigHeading>
            </LocationWrapper>
          </SideTimeWrapper>

        </ImageEventNameWrapper>

      </ComponentsWrapper>

      <WrapperButton>Naprej -{'>'}</WrapperButton>


    </PageUnderMenu>
  );
}
