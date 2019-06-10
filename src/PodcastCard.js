import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const transitionTime = 0.4;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Artwork = styled.img`
  height: 150px;
  width: 150px;
  min-width: 150px;
  border-radius: 150px;
  ${({ hover }) => (hover ? 'border-radius: 1px' : '')}
  -moz-transition: all ${transitionTime}s;
  -o-transition: all ${transitionTime}s;
  -webkit-transition: all ${transitionTime}s;
  transition: all ${transitionTime}s;
`;

const TextWrapper = styled.div`
  margin: 20px;
`;

const Title = styled.h1`
  margin: 0px;
`;

const Publisher = styled.p`
  margin: 0px;
`;

const PodcastCard = ({ image, title, publisher }) => {
  const [hover, setHover] = useState(false);
  return (
    <Wrapper
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Artwork hover={hover} src={image} alt="artwork" />
      <TextWrapper>
        <Title>{title}</Title>
        <Publisher id="publisher">{`${publisher}`}</Publisher>
      </TextWrapper>
    </Wrapper>
  );
};

PodcastCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  publisher: PropTypes.string
};

PodcastCard.defaultProps = {
  image: null,
  title: null,
  publisher: null
};

export default PodcastCard;
