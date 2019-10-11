import React from 'react';
import { MdSearch } from 'react-icons/md';
import { Container } from './styles';

const SideBarSearchComponent = () => (
  <Container>
    <div className="search-box">
      <input
        className="search-input"
        placeholder="Search or start a new chat"
      />
      <MdSearch className="search-icon" />
    </div>
  </Container>
);

export default SideBarSearchComponent;
