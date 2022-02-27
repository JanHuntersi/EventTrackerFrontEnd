import styled from 'styled-components';
import { PageUnderMenu, Side, FullHeightWidth } from '../components/PageComponents';
import tmpProfilePic from '../tmpPictures/profileTmp.png';
import { SearchMenuItems } from '../components';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AiFillPlusCircle, AiOutlineSearch } from 'react-icons/ai';
export const Avatar = styled.img`
vertical-align:middle;
max-height: 80%; 
object-fit: contain;
border-radius:50%;
`;

export const AvatarHolder = styled.div`
position:relative;
display:flex;
flex-direction:column;
justify-content:space-around;
text-align:center;
max-height: 50%;
p{
  font-size:1.5em;
  font-weight:500;
}
`;

export const ColumnMenu = styled.div`
display:flex;
width:80%;
height:100%;
box-sizing: border-box;
flex-direction:column;
justify-content:space-around;
text-align:left;
padding-left: 3em;
padding-right: 3em;
padding:1em;

p{
 
  font-size:1.5em;
}
div{
  font-size:1.1em;
  display:flex;
  align-items:center;
  margin-top:1em;
  justify-content:center;
  vertical-align:middle;
}
@media only screen and (max-width: 768px){
  padding:0px;
 
  width:100%:
}
`;

export const PlusButton = styled.div`
position:relative;
cursor:pointer;
top:60%;
height:0px;

width:2em;
left:60%;
border-radius:50%;
font-size:3em;
color: ${( props ) => props.theme.colors.primaryColor};
&:hover{
color:blue;
}

`;

export const ButtonWithText =styled.div`
display:flex;
align-items:center;
width:100%;
height:3.3em;
background-color:white;
color:${( props ) => props.theme.colors.backgroundColor};;
border-radius:20px;
padding-left:auto;
font-weight: bold;
`;

export const ChangePassword =styled.div`
width:100%;
height:3.3em;
background-color: ${( props ) => props.theme.colors.primaryColor};
border-radius:20px;
font-weight: bold;
p{text-align:center;}
`;


export const SearchBar =styled.input`
width:100%;
height:4.2em;
background-color:${( props ) => props.theme.colors.thirdColor};
border : none;  
border-radius:20px;
font-size:1em;
color:white
font-family: 'Poppins',sans-serif;
`;

export const SubMenu= styled.div`
width:100%;
border-bottom: 0.35em solid black;
display:flex;
flex-direction:row;
align-items:center;
justify-content:space-around;
`;

export const SubMenuElement = styled.div`
font-size:1.3em;
position:relative;
top:-0.1em;
height:calc(100%+0.4em);
background-color:inherit;
padding:0.5em;
padding-left:1em;
padding-right:1em;
&:hover {
  cursor:pointer;
  box-shadow: 0px 0.4em ${( props ) => props.theme.colors.primaryColor};
};
`;

export const ComponentHolder = styled.div`
overflow-y:scroll;

display:flex;
flex-direction:column;
align-items:center;
justify-content: start;
width:100%;
height:50vh;
background-color:${( props ) => props.theme.colors.thirdColor};
border-radius:20px;
div{
  color:${( props ) => props.theme.colors.thirdColor};
  margin-top:5vh;
}
`;

const muckupSample={
  type: 'user', // which type of item is this -> event,friend, pending,..
  src: '../tmpPictures/profileTmp.png', // img src
  itemName: 'Jan Sernec', // could be name of
};

const muckupSample2={
  type: 'user', // which type of item is this -> event,friend, pending,..
  src: require('../tmpPictures/profileTmp.png'), // img src
  itemName: 'Miha Krajncevic', // could be name of
};

const muckupSamples=[
  {
    type: 'user', // which type of item is this -> event,friend, pending,..
    src: '/pics/1.png', // img src
    itemName: 'Ziga Poljec', // could be name of
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

export default function TestPage() {
  return (
    <PageUnderMenu display="flex" flexDirection="row" padding='1em'>
      <Side display="flex" flexDirection="columnn" padding="2em" bgcolor="inherit">
        <FullHeightWidth display="flex" flexDirection="column" padding="2em" bgcolor="inherit">
          <AvatarHolder>
            <PlusButton><AiFillPlusCircle></AiFillPlusCircle></PlusButton>
            <Avatar src={tmpProfilePic} alt="slika profila" ></Avatar>
            <p>Event Majster</p>
          </AvatarHolder>
          <ColumnMenu>
            <p>Display Name:</p>
            <ButtonWithText>Jan Sernec</ButtonWithText>
            <ChangePassword>Change password</ChangePassword>
          </ColumnMenu>
        </FullHeightWidth>
      </Side>
      <Side display="flex" flexDirection="columnn" padding="1em" bgcolor="inherit">
        <FullHeightWidth display="flex" flexDirection="column" padding="1em" bgcolor="inherit">
          <SearchBar defaultValue="     Search..">
          </SearchBar>
          <SubMenu>
            <SubMenuElement>Add Friends</SubMenuElement>
            <SubMenuElement>Friends</SubMenuElement>
            <SubMenuElement>Pending</SubMenuElement>

          </SubMenu>
          <ComponentHolder>
            { muckupSamples.map((data) => <SearchMenuItems width='90' item={data}/> ) }
          </ComponentHolder>
        </FullHeightWidth>
      </Side>

    </PageUnderMenu>

  );
}
