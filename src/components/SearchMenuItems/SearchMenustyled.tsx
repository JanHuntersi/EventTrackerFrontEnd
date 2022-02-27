import styled from 'styled-components';


interface intItemWrapper{
    width:string;
}

export const ItemWrapper = styled.div<intItemWrapper>`
background-color:white;
width: ${(props)=>props.width}%;

border-radius:40px;
min-height:5em;
max-height:5em;
color:black;
display:flex;
flex-direction:row;
align-items:center;
justify-content:start;
font-weight:bold;
*:first-of-type{margin-left:5%; margin-right:10%;}
`;


export const ImgWrapper = styled.img`
vertical-align:middle;
max-height: 80%; 
object-fit: contain;
border-radius:50%;
`;
