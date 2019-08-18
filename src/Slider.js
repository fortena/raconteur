import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import useResizeObserver from './hooks/useResizeObserver';
import useInterval from './hooks/useInterval';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';
import PodcastSearchCard from './PodcastSearchCard';

const transitionTime = 0.3;
const slideDelay = 5000;

const Wrapper = styled.div`
  margin: 30px 0px 0px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  display: ${({ display }) => display};
`;

const Image = styled.img`
  position: relative;
  opacity: ${({ opacity }) => opacity};
  -webkit-transition: opacity ${transitionTime}s ease-in;
  -moz-transition: opacity ${transitionTime}s ease-in;
  -ms-transition: opacity ${transitionTime}s ease-in;
  -o-transition: opacity ${transitionTime}s ease-in;
  transition: opacity ${transitionTime}s ease-in;
  max-height: 500px;
`;

const Overlay = styled.div`
  position: absolute;
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
  background: ${({ background }) => background};
  -moz-transition: all ${transitionTime}s;
  -o-transition: all ${transitionTime}s;
  -webkit-transition: all ${transitionTime}s;
  transition: all ${transitionTime}s;
  display: flex;
  align-items: flex-end;
`;

const Title = styled.h1`
  color: white;
`;

const Content = styled.div`
  width: fill-available;
  height: fill-available;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const LinkContainer = styled.div`
  opacity: ${({ opacity }) => opacity};
  -webkit-transition: opacity ${transitionTime}s ease-in;
  -moz-transition: opacity ${transitionTime}s ease-in;
  -ms-transition: opacity ${transitionTime}s ease-in;
  -o-transition: opacity ${transitionTime}s ease-in;
  transition: opacity ${transitionTime}s ease-in;
  margin-top: 30px;
`;

const ArrowContainer = styled.button`
  height: ${({ height }) => height}px;
  display: flex;
  align-items: center;
  width: 100px;
  justify-content: center;
  background: transparent;
  border: none;
  outline: none;
`;

const Slider = ({ slides, history }) => {
  const [ref, width, height] = useResizeObserver(500, 400);
  const [delay, setDelay] = useState(slideDelay);
  const [slideIndex, setSlideIndex] = useState(0);
  useInterval(() => {
    setSlideIndex((slideIndex + 1) % slides.length);
  }, delay);
  const [hover, setHover] = useState(false);
  const [display, setDisplay] = useState(true);
  const imageLoaded = display && ref && ref.current;
  const { imageUrl, podcasts, title } = slides[slideIndex];
  return (
    <Wrapper>
      <Image
        ref={ref}
        src={imageUrl}
        onError={() => setDisplay(false)}
        opacity={imageLoaded ? 1 : 0}
      />
      {imageLoaded && (
        <Overlay
          onMouseEnter={() => {
            setHover(true);
            setDelay(null);
          }}
          onMouseLeave={() => {
            setHover(false);
            setDelay(slideDelay);
          }}
          background={
            hover
              ? 'linear-gradient(rgba(255, 255, 255, 0.7), rgba(0, 0, 0, 0.2))'
              : 'transparent'
          }
          height={height}
          width={width}
        >
          <ArrowContainer
            height={height}
            onClick={() => {
              if (slideIndex === 0 && slides.length > 0) {
                setSlideIndex(slides.length - 1);
              } else {
                setSlideIndex((slideIndex - 1) % slides.length);
              }
            }}
          >
            <LeftArrow opacity={hover ? 1 : 0} />
          </ArrowContainer>
          <Content>
            <LinkContainer opacity={hover ? 1 : 0}>
              {podcasts.map(
                ({ id, image, publisher_original, title_original }) => (
                  <PodcastSearchCard
                    key={id}
                    onClick={() => history.push(`/podcast/${id}/`)}
                    id={id}
                    image={image}
                    title={title_original}
                    publisher={publisher_original}
                  />
                )
              )}
            </LinkContainer>
            <Title>{title}</Title>
          </Content>
          <ArrowContainer
            height={height}
            onClick={() => {
              if (slideIndex === slides.length - 1) {
                setSlideIndex(0);
              } else {
                setSlideIndex((slideIndex + 1) % slides.length);
              }
            }}
          >
            <RightArrow opacity={hover ? 1 : 0} />
          </ArrowContainer>
        </Overlay>
      )}
    </Wrapper>
  );
};

Slider.defaultProps = {
  history: null,
  slides: []
};

Slider.propTypes = {
  history: PropTypes.object,
  slides: PropTypes.shape({
    imageUrl: PropTypes.string,
    title: PropTypes.string,
    podcasts: PropTypes.array
  })
};

export default Slider;
