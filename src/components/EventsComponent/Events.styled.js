import styled from 'styled-components';

export const EventWrapper = styled.div`
*{
    margin-bottom:1em;
    margin-left:0.5em;
}
display:flex
color: rgb(224, 212, 212);
flex-direction:column;
width:45%;
border-radius:20px;
background-color:${( props ) => props.theme.colors.thirdColor};
padding:1em;
@media only screen and (max-width: 800px){
    width:90%;
    margin-left:5%;
  }
`;
export const Heading = styled.h1`
color: white;
font-size:1.5em;
border-bottom: 8px solid ${( props ) => props.theme.colors.primaryColor};

`;
