
import React, { FC } from 'react';
import { EventWrapper, Heading } from './Events.styled';


type EventType = {
  name: string, // which type of item is this -> event,friend, pending,..
  host:string, // img src
  desc: string // could be name of person or event
};

// We are gonna pass down an  object with variables
interface EventProps {
    event: EventType,
}

// Good color: #57c4d0


const Events:FC<EventProps> = ({ event }): JSX.Element => {
  return (
    <EventWrapper>
      <Heading>{event.name}</Heading>
      <p>{event.desc}</p>
      <p>{event.host}</p>
    </EventWrapper>

  );
};

export default Events;
