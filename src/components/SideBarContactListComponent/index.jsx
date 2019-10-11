import React from 'react';

import SideBarContactItemComponent from '../SideBarContactItemComponent';

import { Container } from './styles';

const SideBarContactListComponent = ({ contacts, handleChangeContact }) => (
  <Container>
    {contacts.map((contact, index) => (
      <SideBarContactItemComponent
        key={contact.name}
        contact={contact}
        handleChangeContact={handleChangeContact}
        index={index}
      />
    ))}
  </Container>
);

export default SideBarContactListComponent;
