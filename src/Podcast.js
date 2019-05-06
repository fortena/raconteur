import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import parse from 'html-react-parser';
import { getPodcast } from './apiActions';
import { useStateValue } from './state';
import { unixTimeToDate } from './dateUtils';
import Spinner from './Spinner';
import Header from './Header';
import PodcastCard from './PodcastCard';

const Wrapper = styled.div`
  display: flex;
`;

const Main = styled.div`
  margin: 0px 40px;
  @media (max-width: 400px) {
    margin: 0px 10px;
  }
`;

const SectionHeading = styled.h2`
  border-bottom: 3px solid black;
  padding: 5px 0px;
`;

const ReleaseDate = styled.p`
  font-size: 14px;
  font-style: italic;
`;

const Audio = styled.audio`
  &:focus {
    outline: none;
  }
`;

const Podcast = ({ match }) => {
  const [initialized, setInitialized] = useState(false);
  const podcastId = match.params.id;
  const [state, dispatch] = useStateValue();
  const { podcast } = state;
  const { description, episodes, image, loading, publisher, title } = podcast;
  useEffect(() => {
    if (!initialized) {
      getPodcast(podcastId, dispatch);
    }
    setInitialized(true);
  });
  if (loading) {
    return <Spinner />;
  }
  return (
    <Wrapper>
      <Main>
        <Header />
        <PodcastCard image={image} title={title} publisher={publisher} />
        <p>{description}</p>
        <SectionHeading>Episodes</SectionHeading>
        <div>
          {episodes &&
            episodes.map(episode => (
              <div key={episode.id}>
                <h3>{episode.title}</h3>
                <Audio controls src={episode.audio} preload="none" />
                {episode.title !== episode.description ? (
                  <p>{parse(episode.description)}</p>
                ) : null}
                <ReleaseDate>
                  {`Released: ${unixTimeToDate(episode.pub_date_ms)}`}
                </ReleaseDate>
              </div>
            ))}
        </div>
      </Main>
    </Wrapper>
  );
};

Podcast.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    })
  }).isRequired
};

export default Podcast;
