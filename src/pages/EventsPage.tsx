import styled from 'styled-components';
import EventsComponent from '../components/EventsComponent';
import { FullHeightWidth, PageUnderMenu, Side } from '../components/PageComponents';
import { IoIosArrowDropdown } from 'react-icons/io';
import { Link } from 'react-router-dom';


export const HeadingEvents = styled.div`
text-align:center;
margin-top:2em;
h1{
  font-size:3.2em;
}
@media only screen and (max-width: 800px){
 font-size:1em;
}
`;
export const EventsDisplay = styled.div`
padding:1em;
text-align:center;
#background-color:green;
display:flex;
margin-top:2em;
width:50%;
flex-direction: row;
margin-left:auto;
margin-right:auto;
justify-content:center;
@media only screen and (max-width: 768px){
  min-width:95%;
}
*{margin-left:1em;
  margin-right:1em;}
`;

export const EventsWrapper = styled.div`
  #background-color:blue;
  div{margin:10px;
  margin-bottom: 2em;}
  width:80%;
  flex-wrap: wrap;
  margin-left:10%;
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  @media only screen and (max-width: 800px){
    flex-direction:column;
    width:90%;
    margin-left:5%;
  }
`;

export const DropDown =styled.div`
padding:1em;
height:3.3em;
display:flex;
align-items:center;
justify-content:center;
background-color: ${( props ) => props.theme.colors.primaryColor};
border-radius:20px;
font-weight: bold;
align:center;
p{text-align:center;}
margin-bottom:2em;
`;

export const NewEventButton = styled.div`
padding:1em;
height:3.3em;
display:flex;
align-items:center;
justify-content:center;
background-color:purple;
border-radius:20px;
color:white;
font-weight: bold;
@media only screen and (max-width: 768px){
  padding:0.4em;
}
*{color:white;
text-decoration:none;}
`;

const mockup=[
  {
    name: 'Zabava na Stuk',
    host: 'Kiki Wolf',
    desc: 'ŠTUK je največji stalni prireditveni prostor v Sloveniji, kjer se skozi leto odvijejo številni različni dogodki kulturne, športne in zabavne vsebine.',
  },
  {
    name: 'Rijstni Dan',
    host: 'Jan Srnec',
    desc: 'Povabljene na rojstni dan, ki ga bom praznoval doma',
  },
  {
    name: 'Ogled Spideman v kino',
    host: 'Tim Prapotnik',
    desc: 'Povabljeni na ogled novega filma Spiderman no way home',
  },
  {
    name: 'LAN Party',
    host: 'Jakob Srumpf',
    desc: 'Vabljeni vsi na LAN party pri meni doma, igrali bomo Minecraft, Leauge of Legends, Starcraft, WoW',
  },
  {
    name: 'Piknik na Trigravu',
    host: 'kristijan Cezrl',
    desc: 'Povabljeni pohod do wrha Triglava, bodite primerno oblečeni saj je mrzlo',
  },
  {
    name: 'Delavnica za izdelava 3d printejev',
    host: 'Conrad d.o.o',
    desc: 'Vsi zanimani na 32d printerje ste povabljeni na delavnico, kjer boste se naučili kako deluje 3d printer in si ga tudi zgradili, eden od udeležencev bo tudi žreban za darilni bon vrednosti 200€ na spletni trgovini www.conrad.si',
  },
];

export default function EventPage() {
  return (
    <PageUnderMenu display="flex" flexDirection="column" padding='1em'
    >

      <HeadingEvents>
        <h1>All Events</h1>
      </HeadingEvents>
      <EventsDisplay>
        <DropDown>Display Events <IoIosArrowDropdown></IoIosArrowDropdown></DropDown>
        <NewEventButton>  <Link to="/eventPage">+ Create Event</Link>  </NewEventButton>
      </EventsDisplay>
      <EventsWrapper>
        { mockup.map((data) => <EventsComponent event={data} />) }
      </EventsWrapper>

    </PageUnderMenu>
  );
}
