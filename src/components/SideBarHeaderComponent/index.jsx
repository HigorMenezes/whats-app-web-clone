import React from 'react';
import { MdMessage, MdMoreVert } from 'react-icons/md';
import AvatarComponent from '../AvatarComponent';
import { Container } from './styles';

const SideBarHeaderComponent = () => {
  return (
    <Container>
      <AvatarComponent name="eu" />
      <div className="actions">
        <MdMessage className="icon" />
        <MdMoreVert className="icon" />
      </div>
    </Container>
  );
};

export default SideBarHeaderComponent;
