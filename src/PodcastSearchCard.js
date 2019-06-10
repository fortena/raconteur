import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const transitionTime = 0.4;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0px;
  ${({ hover }) => (hover ? `cursor: pointer` : '')}
`;

const Artwork = styled.img`
  height: 100px;
  width: 100px;
  min-width: 100px;
  border-radius: 100px;
  ${({ hover }) => (hover ? 'border-radius: 4px' : '')}
  -moz-transition: all ${transitionTime}s;
  -o-transition: all ${transitionTime}s;
  -webkit-transition: all ${transitionTime}s;
  transition: all ${transitionTime}s;
`;

const TextWrapper = styled.div`
  margin: 10px;
`;

const Publisher = styled.p`
  margin: 0px;
`;

const Title = styled(Link)`
  margin: 0px;
  font-size: 32px;
  color: black;
  text-decoration: ${({ textDecoration }) => textDecoration};
  @media (max-width: 400px) {
    font-size: 32px;
  }
`;

const PodcastSearchCard = ({ onClick, id, image, title, publisher }) => {
  const [hover, setHover] = useState(false);
  return (
    <Wrapper
      hover={hover}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Artwork hover={hover} src={image} alt="artwork" />
      <TextWrapper>
        <Title
          textDecoration={hover ? 'underline' : 'none'}
          to={`/podcast/${id}/`}
        >
          {title}
        </Title>
        <Publisher id="publisher">{`${publisher}`}</Publisher>
      </TextWrapper>
    </Wrapper>
  );
};

PodcastSearchCard.propTypes = {
  onClick: PropTypes.func,
  id: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  publisher: PropTypes.string
};

PodcastSearchCard.defaultProps = {
  onClick: () => {},
  id: null,
  image: null,
  title: null,
  publisher: null
};

export default PodcastSearchCard;
