import styled from 'styled-components';
import React, { FC } from 'react';

export const NotificationWrapper = styled.div`
background-color: ${( props ) => props.theme.colors.thirdColor};
height:inherit;
width:100%;
height:100px;
display:flex;
flex-direction:row;
align-items:center;
padding-left:2em;
font-size:2em;

`;

type NotificationType = {
    name:string,
    type: string,
    eventName: string
}

interface NotificationProps {
    notification: NotificationType,
}

const NotificationItems:FC<NotificationProps> = ({ notification }): JSX.Element => {
  return (
    <>
      <NotificationWrapper>
        <p>User {notification.name} has {notification.type} you to {notification.eventName}</p>
      </NotificationWrapper>
    </>
  );
};

export default NotificationItems;
