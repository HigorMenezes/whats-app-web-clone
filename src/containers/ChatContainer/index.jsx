import React from 'react';

import ChatHeader from '../../components/ChatHeader';
import ChatContent from '../../components/ChatContent';
import ChatType from '../../components/ChatType';

import { Container } from './styles';

const ChatContainer = ({ contact }) => (
  <Container>
    <ChatHeader name={contact.name} lastSeen={contact.lastSeen} />
    <ChatContent messages={contact.messages} />
    <ChatType />
  </Container>
);

export default ChatContainer;
