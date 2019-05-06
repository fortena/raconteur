import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrapper = styled.div``;

const List = styled.ul`
  list-style-type: none;
  display: flex;
  padding: 0px;
  margin-top: 10px;
`;

const HomeItem = styled.li`
  margin: 0px 40px 0px 0px;
`;

const HomeLink = styled(Link)`
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
