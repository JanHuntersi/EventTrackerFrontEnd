import styled from 'styled-components';

// # -> komentarji!

// KOmponenta za wrapper strani po menijem (100% visine zaslona),
// če je pa potrebno se prilaogodi kadar je več kot 100%
// User inserts: display
export const PageUnderMenu = styled.div<Props>`
#background-color:green;
position:relative;
width:100%;
height:100%;
min-height: calc(100vh - (3.3em + 3px));
padding:${( props )=> props.padding };
display: ${( props )=> props.display };
flex-direction: ${( props )=> props.flexDirection };
@media only screen and (max-width: 768px){
flex-direction:column;
}
`;
interface Props {
  display: string;
  flexDirection: string;
  padding:string;
}

// Takes full height and width
// User insert: padding, display, flexDirection  bgcolor
export const FullHeightWidth = styled.div<fullHeightWidthProps>`
background-color:${( props )=> props.bgcolor };
position:relative;
width:100%;
min-height:100%;
padding: ${( props )=> props.padding };
display: ${( props )=> props.display };
flex-direction: ${( props )=> props.flexDirection};
align-items:center;
justify-content:space-between;
@media only screen and (max-width: 768px){

}
`;
interface fullHeightWidthProps {
  display: string;
  flexDirection: string;
  padding: string;
  bgcolor: string;
}

interface directionSide {
  display: string;
  flexDirection: string;
  padding: string;
  bgcolor: string;
}


export const Side = styled.div<directionSide>`
background-color: ${( props )=> props.bgcolor};
max-height:calc(100vh - (3.3em + 3px + 2em));
min-height:calc(100vh - (3.3em + 3px + 2em));
height:100%;
width:50%;
padding: ${( props )=> props.padding };
display: ${( props )=> props.display };
flex-direction: ${( props )=> props.flexDirection};
@media only screen and (max-width: 768px){
  width:100%;
  }
`;

interface splitWithHeightWidth {
  display: string;
  flexDirection: string;
  padding: string;
  bgcolor: string;
  width:string
}


export const SideWidth = styled.div<splitWithHeightWidth>`
background-color: ${( props )=> props.bgcolor};
max-height:calc(100vh - (3.3em + 3px + 2em));
min-height:calc(100vh - (3.3em + 3px + 2em));
height:100%;
width: ${( props )=> props.width}
padding: ${( props )=> props.padding };
display: ${( props )=> props.display };
flex-direction: ${( props )=> props.flexDirection};
@media only screen and (max-width: 768px){
  width:100%;
  }
`;


// Event Form creation components
export const HolderText = styled.div`

#background-color:blue;
width:100%;
height:1300vh:
display:flex;
flex-direction:column;
`;

export const Heading = styled.div`
padding:5vh;
text-align:center;
`;
export const H2 = styled.h2`
font-size:2em;
padding:0.5em;
`;


