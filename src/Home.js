import React from 'react';
import styled from 'styled-components';
import PodcastSearch from './PodcastSearch';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 72px;
`;

const SubTitle = styled.p``;

export default props => {
  return (
    <Wrapper>
      <Header>
        <Title>cast.wiki</Title>
        <SubTitle>The ultimate podpedia</SubTitle>
      </Header>
      <PodcastSearch {...props} />
    </Wrapper>
  );
};
