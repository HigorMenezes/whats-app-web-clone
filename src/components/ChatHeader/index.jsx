import React from 'react';
import { MdAttachFile, MdMoreVert, MdSearch } from 'react-icons/md';
import AvatarComponent from '../AvatarComponent';

import { Container } from './styles';

const ChatHeader = ({ name, lastSeen }) => (
  <Container>
    <div className="description">
      <div className="avatar">
        <AvatarComponent name={name.split(' ')[0]} />
      </div>
      <div className="contact-description">
        <span className="name">{name}</span>
        <span className="last-seen">{lastSeen}</span>
      </div>
    </div>

    <div className="actions">
      <MdSearch className="icon" />
      <MdAttachFile className="icon" />
      <MdMoreVert className="icon" />
    </div>
  </Container>
);

export default ChatHeader;
