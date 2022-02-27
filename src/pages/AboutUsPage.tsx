import { ReactChild, ReactFragment, ReactPortal } from 'react';
import styled from 'styled-components';
import { FullHeightWidth, PageUnderMenu, Side } from '../components/PageComponents';

export const HeadingAboutUs = styled.div`
text-align:center;
margin-top:2em;
h1{
  font-size:2em;
}
`;


export const PersonalInfo = styled.div`
padding:1em;
height:3.3em;
display:flex;
align-items:center;
justify-content:center;
background-color: ${(props) => props.theme.colors.primaryColor};
border-radius:20px;
font-weight: bold;
align:center;
p{text-align:center;}
margin-bottom:2em;
`;

export const PageInfo = styled.div`
  #background-color:blue;
  div{
    margin:10px;
    margin-bottom: 2em;
    padding: 10px;
  }
  p{
    margin: 10px;
    padding-bottom: 15px;
  }
  width:80%;
  flex-wrap: wrap;
  margin-left:10%;
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  h2{
    color: ${(props) => props.theme.colors.primaryColor};
  }
  a{

  }
  @media only screen and (max-width: 800px){
    flex-direction:column;
    width:90%;
    margin-left:5%;
  }
`;
function newline() {
  return '<div contentEditable="true" dangerouslySetInnerHTML={{ __html: text }}></div>';
}

export default function EventPage() {
  return (
    <PageUnderMenu padding="" display="flex" flexDirection="column">

      <HeadingAboutUs>
        <h1>About Us</h1>
      </HeadingAboutUs>
      <PersonalInfo>
        <p>About workers</p>
      </PersonalInfo>
      <PageInfo>
        <h2>Jan Sernec</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </PageInfo>
      <PageInfo>
        <h2>Jan Wolf</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </PageInfo>
      <PageInfo>
        <h2>Tim Prapotnik</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </PageInfo>
      <PersonalInfo>
        <p>About Project</p>
      </PersonalInfo>
      <PageInfo>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </PageInfo>
      <PersonalInfo>
        <p>Social media</p>
      </PersonalInfo>
      <PageInfo>
        <h2>Github</h2>
      </PageInfo>
      <PageInfo>
        <h2>Discord</h2>
      </PageInfo>
      <PageInfo>
        <h2>Facebook</h2>
      </PageInfo>
    </PageUnderMenu >
  );
}
