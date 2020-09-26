import React from 'react';
import styled from 'styled-components';
import { useStateValue } from './state';

const ProfileImage = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 20px;
`;

const Name = styled.div``;

const User = () => {
  const [state, setState] = useStateValue();
  const { profile } = state;
  const { imageUrl, givenName } = profile || {};
  return (
    <div>
      {imageUrl ? <ProfileImage src={imageUrl} /> : <Name>{givenName}</Name>}
    </div>
  );
};

export default User;
