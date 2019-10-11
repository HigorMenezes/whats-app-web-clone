import React, { useEffect, createRef } from 'react';

import ConversationStatusIcon from '../ConversationStatusIcon';
import { Container, TextLeft, TextRight } from './styles';

const ChatContent = ({ messages }) => {
  const chatContentScroll = createRef();

  useEffect(() => {
    if (chatContentScroll.current) {
      chatContentScroll.current.scrollTo({
        top: chatContentScroll.current.scrollHeight,
      });
    }
  }, [chatContentScroll]);

  return (
    <Container ref={chatContentScroll}>
      {messages.map(({ text, mine, hour, status }) =>
        mine ? (
          <TextRight key={text}>
            <p className="text">{text}</p>
            <div className="hour-status">
              <span className="hour">{hour}</span>
              <ConversationStatusIcon status={status} />
            </div>
          </TextRight>
        ) : (
          <TextLeft key={text}>
            <p className="text">{text}</p>
            <div className="hour-status">
              <span className="hour">{hour}</span>
            </div>
          </TextLeft>
        )
      )}
    </Container>
  );
};

export default ChatContent;
