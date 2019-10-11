import React from 'react';
import { MdDone, MdDoneAll } from 'react-icons/md';
import { Container } from './styles';

const ConversationStatusIcon = ({ status }) => (
  <Container>
    {(status === 'sended' && <MdDone className="icon" />) ||
      (status === 'received' && <MdDoneAll className="icon" />) ||
      (status === 'viewed' && (
        <MdDoneAll className="icon" style={{ color: '#4ec2f7' }} />
      ))}
  </Container>
);

export default ConversationStatusIcon;
