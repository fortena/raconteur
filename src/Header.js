import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrapper = styled.div``;

const List = styled.ul`
  list-style-type: none;
  display: flex;
  padding: 0px;
  margin-top: 10px 0px;
  @media (max-width: 400px) {
    justify-content: center;
  }
`;

const HomeItem = styled.li`
  margin: 0px;
`;

const HomeLink = styled(Link)`
  font-family: 'Permanent Marker', cursive;
  text-decoration: none;
  color: black;
  font-size: 36px;
  &:hover {
    text-decoration: underline;
  }
`;

export default () => (
  <HeaderWrapper>
    <List>
      <HomeItem>
        <HomeLink to="/">raconteur</HomeLink>
      </HomeItem>
    </List>
  </HeaderWrapper>
);
