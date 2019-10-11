import React from 'react';

import { MdKeyboardVoice, MdTagFaces } from 'react-icons/md';

import { Container } from './styles';

const ChatType = () => (
  <Container>
    <div className="box-icon">
      <MdTagFaces className="emoji-icon" />
    </div>
    <input type="text" className="type-input" placeholder="Type a message" />
    <div className="box-icon">
      <MdKeyboardVoice className="microphone-icon" />
    </div>
  </Container>
);

export default ChatType;
