// global.js
import styled, { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  *{padding:0; margin:0;}
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    background: ${( props ) => props.theme.colors.surfaceColor};
    color: white;
    font-family:${( props )=> props.theme.fontFamily};
    
  }
  
  /* width */
::-webkit-scrollbar {
  width: 20px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
  border-radius: 10px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: ${( props ) => props.theme.colors.primaryColor}; 
  border-radius: 10px;
  cursor:pointer;
}
  
  `;
