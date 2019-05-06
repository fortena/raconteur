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

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-family: 'Permanent Marker', cursive;
  font-size: 72px;
  @media (max-width: 400px) {
    font-size: 54px;
  }
`;

export default props => {
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>raconteur</Title>
      </TitleWrapper>
      <PodcastSearch {...props} />
    </Wrapper>
  );
};
