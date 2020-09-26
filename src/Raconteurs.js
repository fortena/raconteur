import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import useResizeObserver from './hooks/useResizeObserver';

const transitionSlow = 0.4;
const transitionFast = 0.2;

const textColor = 'yellow';

const Wrapper = styled.div`
  margin: 30px 0px 0px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ height }) => height}px;
  max-width: 900px;
  display: ${({ display }) => display};
  transition: height ${transitionFast}s ease-in;
`;

const Image = styled.img`
  max-height: 400px;
  max-width: 900px;
  position: relative;
  opacity: ${({ opacity }) => opacity};
  -webkit-transition: opacity ${transitionSlow}s ease-in;
  -moz-transition: opacity ${transitionSlow}s ease-in;
  -ms-transition: opacity ${transitionSlow}s ease-in;
  -o-transition: opacity ${transitionSlow}s ease-in;
  transition: opacity ${transitionSlow}s ease-in;
`;

const Overlay = styled.div`
  position: absolute;
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
  background: ${({ background }) => background};
  -moz-transition: all ${transitionSlow}s;
  -o-transition: all ${transitionSlow}s;
  -webkit-transition: all ${transitionSlow}s;
  transition: all ${transitionSlow}s;
  transition: height ${transitionSlow}s ease-in;
`;

const Header = styled.h1`
  margin: 20px;
  color: ${textColor};
  font-family: 'Permanent Marker', cursive;
`;

const Description = styled.p`
  margin: 20px;
  color: ${textColor};
  font-family: 'Permanent Marker', cursive;
`;

const PodcastLink = styled(Link)`
  color: orange;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Raconteurs = () => {
  const [ref, width, height] = useResizeObserver(500, 400);
  const [hover, setHover] = useState(false);
  const [display, setDisplay] = useState(true);
  const imageLoaded = display && ref && ref.current;
  return (
    <Wrapper
      display={display ? 'flex' : 'none'}
      height={imageLoaded ? height : 0}
    >
      <Image
        ref={ref}
        src="https://www.dropbox.com/s/7esgfxcm5qbksxh/dan_carlin_yearbook.jpeg?dl=1"
        onError={() => setDisplay(false)}
        opacity={imageLoaded ? 1 : 0}
      />
      {imageLoaded && (
        <Overlay
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          background={hover ? 'rgba(0.5, 0.5, 0.5, 0.2)' : 'transparent'}
          height={imageLoaded ? height : 0}
          width={width}
        >
          <Header>Dan Carlin</Header>
          <Description>
            Dan is a master storyteller and uses his craft to navigate difficult
            and often contriversial subject in history and present time. Check
            out his podcasts{' '}
            <PodcastLink to="/podcast/658b13f1769449f89b937754c17feee4/">
              Hardcore History
            </PodcastLink>
            {' and '}
            <PodcastLink to="/podcast/ffb64d537bb14563a648de7772d47334/">
              Common Sense
            </PodcastLink>{' '}
            .
          </Description>
        </Overlay>
      )}
    </Wrapper>
  );
};

export default Raconteurs;
