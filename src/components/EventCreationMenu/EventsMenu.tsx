
import React, { FC } from 'react';
import { MenuElement, SideMenu } from './EventsMenu.style';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const stlyedLink = styled(Link)`

`;

interface EventsMenuProps{
  ActiveEl:string,
}

const EventsMenu: FC<EventsMenuProps> = ({ ActiveEl }): JSX.Element => {
  const userChoice:string = ActiveEl;
  const intro:string = 'Intro';
  const info:string = 'Info';
  const publish:string = 'Publish';
  const friends:string = 'Friends';
  return (


    <>
      { userChoice === intro && <SideMenu>
        <MenuElement ActiveElement="True"><Link to="/eventPage"> Intro</Link></MenuElement>
        <MenuElement ActiveElement=""><Link to="/CreateEventPageInformation">Basic Information</Link></MenuElement>
        <MenuElement ActiveElement=""><Link to="/InviteFriendsPage">Invite friends</Link></MenuElement>
        <MenuElement ActiveElement=""><Link to="/PublishPage">Publish</Link></MenuElement>
      </SideMenu>}
      { userChoice === info && <SideMenu>
        <MenuElement ActiveElement=""><Link to="/eventPage"> Intro</Link></MenuElement>
        <MenuElement ActiveElement="True"><Link to="/CreateEventPageInformation">Basic Information</Link></MenuElement>
        <MenuElement ActiveElement=""><Link to="/InviteFriendsPage">Invite friends</Link></MenuElement>
        <MenuElement ActiveElement=""><Link to="/PublishPage">Publish</Link></MenuElement>
      </SideMenu>}
      { userChoice === friends && <SideMenu>
        <MenuElement ActiveElement=""><Link to="/eventPage"> Intro</Link></MenuElement>
        <MenuElement ActiveElement=""><Link to="/CreateEventPageInformation">Basic Information</Link></MenuElement>
        <MenuElement ActiveElement="True"><Link to="/InviteFriendsPage">Invite friends</Link></MenuElement>
        <MenuElement ActiveElement=""><Link to="/PublishPage">Publish</Link></MenuElement>
      </SideMenu>}
      { userChoice === publish && <SideMenu>
        <MenuElement ActiveElement=""><Link to="/eventPage"> Intro</Link></MenuElement>
        <MenuElement ActiveElement=""><Link to="/CreateEventPageInformation">Basic Information</Link></MenuElement>
        <MenuElement ActiveElement=""><Link to="/InviteFriendsPage">Invite friends</Link></MenuElement>
        <MenuElement ActiveElement="True"><Link to="/PublishPage">Publish</Link></MenuElement>
      </SideMenu>}
    </>

  );
};

export default EventsMenu;
