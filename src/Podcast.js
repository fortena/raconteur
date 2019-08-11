import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import parse from 'html-react-parser';
import { getPodcast, getMorePodcastEpisodes } from './apiActions';
import { useStateValue } from './state';
import { unixTimeToDate } from './dateUtils';
import Spinner from './Spinner';
import Header from './Header';
import PodcastCard from './PodcastCard';
import { PermanentMarkerButton } from './Button';

const Wrapper = styled.div`
  display: flex;
`;

const Main = styled.div`
  margin: 0px 40px 20px 40px;
  @media (max-width: 400px) {
    margin: 0px 10px;
  }
`;

const SectionHeading = styled.h2`
  border-bottom: 3px solid black;
  padding: 5px 0px;
`;

const EpisodeTitle = styled.h3`
  margin-bottom: 0px;
`;

const ReleaseDate = styled.p`
  font-size: 12px;
  margin: 5px 0px 10px 0px;
`;

const Audio = styled.audio`
  &:focus {
    outline: none;
  }
  @media (max-width: 400px) {
    width: 100%;
  }
`;

const Podcast = ({ match }) => {
  const [initialized, setInitialized] = useState(false);
  const [lastPubDate, setLastPubDate] = useState(null);
  const podcastId = match.params.id;
  const [state, dispatch] = useStateValue();
  const { podcast } = state;
  const {
    description,
    episodes,
    image,
    loading,
    loadingMore,
    publisher,
    title
  } = podcast;
  useEffect(() => {
    if (!initialized) {
      getPodcast(podcastId, dispatch).then(p => {
        const lastEpisode = [...p.episodes].pop();
        setLastPubDate(lastEpisode.pub_date_ms);
      });
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
                <EpisodeTitle>{episode.title}</EpisodeTitle>
                <ReleaseDate>
                  {`${unixTimeToDate(episode.pub_date_ms)}`}
                </ReleaseDate>
                <Audio controls src={episode.audio} preload="none" />
                {episode.title !== episode.description ? (
                  <p>{parse(episode.description)}</p>
                ) : null}
              </div>
            ))}
        </div>
        {loadingMore ? (
          <Spinner />
        ) : (
          <PermanentMarkerButton
            onClick={() => {
              getMorePodcastEpisodes(podcastId, lastPubDate, dispatch).then(
                p => {
                  const lastEpisode = [...p.episodes].pop();
                  setLastPubDate(lastEpisode.pub_date_ms);
                }
              );
            }}
          >
            Load more
          </PermanentMarkerButton>
        )}
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
