import styled from 'styled-components';

export const NavMenuWrapper = styled.div`
background: ${( props ) => props.theme.colors.backgroundColor};
width:100%;
box-sizing:border-box;
top:0px;
border-bottom: 3px solid black;
left:0px;
`;

export const NavMenuMiddle = styled.div`
height:3.3rem;
max-height: 3.3rem;
margin-left: 5rem;
margin-right: 5rem;
display:flex;
align-items:center;
justify-content: space-between;
`;

export const NavLinks = styled.div`
    max-width: 1200px;
    min-width: 350px;
    align-items: center;
    display:flex;
    align-tems:center;
    justify-content: space-around;

        text-decoration: none;

    a{
        
    display:inline-block;
    color:white;
    text-decoration:none;
    }
    a:hover{
     border-bottom: 3px solid ${( props ) => props.theme.colors.primaryColor};
    }

    @media only screen and (max-width: 768px){
        background: ${( props ) => props.theme.colors.surfaceColor};
        display: ${( props )=> props.show };
        z-index: 1; /* Sit on top */
            min-width: 250px;
        position: fixed;
        top:3.3rem;;
        left:0;
        width:100%;
        height:100%;
        a{padding: 1 rem;}
       
        flex-direction:column;
        align-items: center;
        justify-content: center;
        -webkit-box-align: center;
        
        a{
            display:block;
            padding: 2rem;}
        
            .mobile-menu-icon,.mobile-menu-icon-close{
                font-size:2rem;
                cursor:pointer;
            }
            
        } 

   
`;

NavLinks.defaultProps={
  show: 'flex',
  hide: 'hidden',
};

export const MenuIcon = styled.div`
@media only screen and (max-width: 768px){
margin-top:auto;
font-size:2rem;
cursor:pointer;


.mobile-menu-icon-open{
    display: block;
}
.mobile-menu-icon-close{
    display: none;
} 

}
@media only screen and (min-width: 768px){
    display:none;
    }


    
`;

export const Logo = styled.p`
font-size:1.5em;
color:white;
text-decoration:none;
font-family: ${( props ) => props.theme.fontFamily}
a{
    text-decoration:none;
}
`;
