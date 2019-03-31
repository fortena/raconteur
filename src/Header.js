import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrapper = styled.div``;

const List = styled.ul`
  list-style-type: none;
  display: flex;
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
        <HomeLink to="/">cast.wiki</HomeLink>
      </HomeItem>
    </List>
  </HeaderWrapper>
);
