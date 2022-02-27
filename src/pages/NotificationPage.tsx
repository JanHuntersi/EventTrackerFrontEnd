import styled from 'styled-components';
import NotificationItems from '../components/NotificationItems';
import { PageUnderMenu } from '../components/PageComponents';


export const HeadingEvents = styled.div`
text-align:center;
margin-top:2em;
h1{
  font-size:2.2em;
}
@media only screen and (max-width: 800px){
 font-size:1em;
}
`;
export const AllNotificationsWrapper = styled.div`
 width:90%;
 margin-left:5%;
min-height:50vh;
#background-color:blue;
margin-top:5vh;
display:flex;
flex-direction:column;
@media only screen and (max-width:850px){
    width:100%;
    margin-left:0%;
}
div{
    margin-bottom:1.5em;
}

 `;

export const NotificationWrapper = styled.div`

width:100%;
`;

export default function NotificationPage() {
  const Mockup = {
    name: 'Jan',
    type: 'Invite',
    eventName: 'Simp party',
  };

  const MockupTwo = {
    name: 'Miha',
    type: 'Joined',
    eventName: 'Apostoles Christmas',
  };


  return (
    <PageUnderMenu display="flex" flexDirection="column" padding='1em'
    >
      <HeadingEvents>
        <h1>My Notifications</h1>
      </HeadingEvents>
      <AllNotificationsWrapper>
        <NotificationItems notification={Mockup} ></NotificationItems>
        <NotificationItems notification={MockupTwo} ></NotificationItems>
        <NotificationItems notification={Mockup} ></NotificationItems>
        <NotificationItems notification={MockupTwo} ></NotificationItems>
      </AllNotificationsWrapper>
    </PageUnderMenu>
  );
};
