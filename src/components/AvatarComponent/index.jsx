import React from 'react';

import avatarAdorableApi from '../../services/avatarAdorableApi';
import { Container } from './styles';

const AvatarComponent = ({ name }) => (
  <Container
    style={{
      backgroundImage: `url(${avatarAdorableApi.baseUrl}/${name})`,
    }}
  />
);

export default AvatarComponent;
