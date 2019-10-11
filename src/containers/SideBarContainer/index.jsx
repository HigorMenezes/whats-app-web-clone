import React from 'react';

import SideBarHeaderComponent from '../../components/SideBarHeaderComponent';
import SideBarSearchComponent from '../../components/SideBarSearchComponent';
import SideBarContactListComponent from '../../components/SideBarContactListComponent';

import { Container } from './styles';

const SideBarContainer = ({ contacts, handleChangeContact }) => {
  return (
    <Container>
      <SideBarHeaderComponent />
      <SideBarSearchComponent />
      <SideBarContactListComponent
        contacts={contacts}
        handleChangeContact={handleChangeContact}
      />
    </Container>
  );
};

export default SideBarContainer;
