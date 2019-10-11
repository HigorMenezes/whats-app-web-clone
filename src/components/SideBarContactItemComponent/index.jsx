import React from 'react';
import ConversationStatusIcon from '../ConversationStatusIcon';
import AvatarComponent from '../AvatarComponent';
import { Container } from './styles';

const SideBarContactItemComponent = ({
  contact,
  handleChangeContact,
  index,
}) => {
  return (
    <Container onClick={() => handleChangeContact(index)}>
      <div className="contact-avatar">
        <AvatarComponent name={contact.name.split(' ')[0]} />
      </div>
      <div className="contact-information">
        <div className="name-last-message">
          <span className="name">
            {contact.name.substr(0, 25)}
            {contact.name.length > 25 && '...'}
          </span>
          <div className="last-message">
            {contact.messages[contact.messages.length - 1].mine && (
              <ConversationStatusIcon
                status={contact.messages[contact.messages.length - 1].status}
              />
            )}
            <span className="message">
              {contact.messages[contact.messages.length - 1].text.substr(0, 25)}
              {contact.messages[contact.messages.length - 1].text.length > 25 &&
                '...'}
            </span>
          </div>
        </div>
      </div>
      <div className="last-hour">
        {contact.messages[contact.messages.length - 1].hour}
      </div>
    </Container>
  );
};

export default SideBarContactItemComponent;
