import styled from 'styled-components';

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

interface MenuElement{
    ActiveElement: String;
}

export const MenuElement = styled.div<MenuElement>`
display:flex;
align-items:center;
font-size:1.2em;
height:90%;

${(props) => props.ActiveElement === 'True' && `
box-shadow: 0px 0.4em  blue;
`
}
&:hover {
    cursor:pointer;
     box-shadow: 0px 0.4em ${( props ) => props.theme.colors.primaryColor};
};
a{text-decoration:none; color:white; display:contents;}
`;
