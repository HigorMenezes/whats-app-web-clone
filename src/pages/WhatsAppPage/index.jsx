import React, { useState, useEffect } from 'react';

import contactGenerate from '../../data/contactGenerate';

import { Container } from './styles';

import SideBarContainer from '../../containers/SideBarContainer';
import ChatContainer from '../../containers/ChatContainer';

const WhatsAppPage = () => {
  const [contacts, setContacts] = useState([]);
  const [contactIndex, setContactIndex] = useState(0);

  useEffect(() => {
    setContacts(contactGenerate());
  }, []);

  function handleChangeContact(index) {
    setContactIndex(index);
  }

  return (
    <Container>
      <div className="wrapper" />
      <div className="content">
        <SideBarContainer
          contacts={contacts}
          handleChangeContact={handleChangeContact}
        />
        {contacts.length > 0 && (
          <ChatContainer contact={contacts[contactIndex]} />
        )}
      </div>
    </Container>
  );
};

export default WhatsAppPage;
