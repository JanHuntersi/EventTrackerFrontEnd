import styled from 'styled-components';
import EventCreationMenu from '../../components/EventCreationMenu';
import { PageUnderMenu, HolderText, Heading, H2 } from '../../components/PageComponents';


// Menu wraperr
export const SideMenu = styled.div`
height:4.5em;
//border-bottom: 0.1em solid white;
width:100%;
background-color: ${( props ) => props.theme.colors.thirdColor};
display:flex;
flex-direction:row;
align-items:center;
justify-content:center;

*{
    margin-left:2%;
    margin-right:2%;
    padding-left:0.5%;
    padding-right:0.5%;
}
`;

export const MenuElement = styled.div`
display:flex;
align-items:center;
    font-size:1.2em;
    height:90%;
    &:hover {
        cursor:pointer;
        box-shadow: 0px 0.4em ${( props ) => props.theme.colors.primaryColor};
      };

`;

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

export default function CreateEventPage() {
  return (
    <PageUnderMenu display='flex' flexDirection='column' padding='' >
      <EventCreationMenu ActiveEl="Intro"></EventCreationMenu>
      <HolderText>
        <Heading>
          <H2>Hello Jan,</H2>
          <p>Please fill up the information bellow so u will be taken to he next steps.</p>
        </Heading>
      </HolderText>
      <Wrapper>
        <WrapperBoxes>
          <Boxes>
            <p>Type of event:</p>
            <p>Options</p>
          </Boxes>
          <Boxes>
            <p>This event will be:</p>
            <p>Private/Public</p>
          </Boxes>
          <Boxes>
            <p>There will be:</p>
            <p>So many visitors</p>
          </Boxes>
        </WrapperBoxes>

        <WrapperButton>Naprej -{'>'}</WrapperButton>
      </Wrapper>

    </PageUnderMenu>
  );
}
