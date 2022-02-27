import styled from 'styled-components';
import EventCreationMenu from '../../components/EventCreationMenu';
import { PageUnderMenu, HolderText, Heading, H2 } from '../../components/PageComponents';

import { SearchMenuItems } from '../../components';

export const SearchBar =styled.input`
width:80%;
margin-left:10%;
height:4.2em;
background-color:${( props ) => props.theme.colors.thirdColor};
border : none;  
border-radius:20px;
font-size:1em;
color:white
font-family: 'Poppins',sans-serif;
`;

export const Wrapper = styled.div`
width:80%;
margin-left:10%;
background-color:${(props) => props.theme.colors.thirdColor}
min-height:40vh;
margin-top:5vh;


display:flex;
flex-direction: row;
flex-wrap:wrap;
padding:1.5em;

div{margin:0.5em;
}

div:hover{ background-color:${(props) => props.theme.colors.primaryColor}

`;


export const PersonWrapper = styled.div`

`;

const muckupSamples=[
  {
    type: 'user', // which type of item is this -> event,friend, pending,..
    src: '/pics/1.png', // img src
    itemName: 'Jan Sernec', // could be name of
  },
  {
    type: 'user', // which type of item is this -> event,friend, pending,..
    src: '/pics/2.png', // img src
    itemName: 'Bojan Trpnik', // could be name of
  },
  {
    type: 'user', // which type of item is this -> event,friend, pending,..
    src: '/pics/3.png', // img src
    itemName: 'Kiki Wolf', // could be name of
  },
  {
    type: 'user', // which type of item is this -> event,friend, pending,..
    src: '/pics/3.png', // img src
    itemName: 'Ploj Nobeden', // could be name of
  },
  {
    type: 'user', // which type of item is this -> event,friend, pending,..
    src: '/pics/1.png', // img src
    itemName: 'Žan Hasker', // could be name of
  },
  {
    type: 'user', // which type of item is this -> event,friend, pending,..
    src: '/pics/2.png', // img src
    itemName: 'Alen Pevec', // could be name of
  },
];


export default function PublishPage() {
  return (
    <PageUnderMenu display='flex' flexDirection='column' padding='' >
      <EventCreationMenu ActiveEl='Friends'></EventCreationMenu>
      <HolderText>
        <Heading>
          <H2>Time for some friends eh?</H2>
          <p>Search for your friends in the search box and click on them to send them an invite!</p>
        </Heading>
      </HolderText>
      <SearchBar defaultValue="     Search..">
      </SearchBar>
      <Wrapper>
        {muckupSamples.map((data) => <SearchMenuItems width="30" item={data}/>) }
      </Wrapper>

      <br/>
    </PageUnderMenu>
  );
}
