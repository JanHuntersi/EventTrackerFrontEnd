
import { NavMenuWrapper, Logo, NavMenuMiddle, NavLinks, MenuIcon } from './Menu.styled';
import { MdMenu, MdClose } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Menu = () => {
  const [ showNav, setShowNav ] = useState(false);

  return (
    <NavMenuWrapper>
      <NavMenuMiddle>
        <Link to="/" ><Logo>EventTracker</Logo></Link>
        <MenuIcon>
          <MdMenu
            onClick={()=>setShowNav(!showNav)}
            className={showNav ? 'mobile-menu-icon-close':'mobile-menu-icon'}/>
          <MdClose
            onClick={()=>setShowNav(!showNav)}
            className={showNav ? 'mobile-menu-icon':'mobile-menu-icon-close' }/>
        </MenuIcon>

        <NavLinks show={showNav ? 'flex':'none' }>
          <Link to="/map">Map</Link>
          <Link to="/events">Events</Link>
          <Link to="/notifications">Notifications</Link>
          <Link to="/test">Profile</Link>
        </NavLinks>
      </NavMenuMiddle>
    </NavMenuWrapper>
  );
};
export default Menu;
