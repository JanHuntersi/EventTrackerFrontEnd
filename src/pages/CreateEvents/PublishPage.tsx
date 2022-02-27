import { Link } from 'react-router-dom';
import styled from 'styled-components';
import EventCreationMenu from '../../components/EventCreationMenu';
import { PageUnderMenu, HolderText, Heading, H2 } from '../../components/PageComponents';


export default function PublishPage() {
  const num:number= 55;
  return (
    <PageUnderMenu display='flex' flexDirection='column' padding='' >
      <EventCreationMenu ActiveEl='Publish'></EventCreationMenu>
      <HolderText>
        <Heading>
          <H2>Perfecto!</H2>
          <p>Now recheck the page and publish when you are ready!</p>
          <p><Link to={`/myevent/${num}`}>View your Event!</Link></p>
        </Heading>
      </HolderText>
    </PageUnderMenu>
  );
}
