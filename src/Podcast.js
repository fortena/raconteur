import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import parse from 'html-react-parser';
import { getPodcast } from './apiActions';
import { useStateValue } from './state';
import { unixTimeToDate } from './dateUtils';
import ScaleLoader from './ScaleLoader';

const Wrapper = styled.div`
  display: flex;
`;

const Main = styled.div`
  margin: 0px 40px;
`;

const Title = styled.h1`
  margin-top: 0px;
`;

const Sidebar = styled.div`
  margin: 0px 40px;
`;

const Artwork = styled.img`
  height: 300px;
  width: 300px;
`;

const SectionHeading = styled.h2`
  border-bottom: 3px solid black;
  padding: 5px 0px;
`;

const ReleaseDate = styled.p`
  font-size: 14px;
  font-style: italic;
`;

const WebsiteLink = styled.a`
  color: black;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Podcast = ({ match }) => {
  const [initialized, setInitialized] = useState(false);
  const podcastId = match.params.id;
  const [{ podcast }, dispatch] = useStateValue();
  const {
    description,
    episodes,
    image,
    language,
    loading,
    publisher,
    rss,
    title,
    website
  } = podcast;
  useEffect(() => {
    if (!initialized) {
      getPodcast(podcastId, dispatch);
    }
    setInitialized(true);
  });
  if (loading) {
    return <ScaleLoader />;
  }
  return (
    <Wrapper>
      <Main>
        <Title>{title}</Title>
        <p>{description}</p>
        <SectionHeading>Episodes</SectionHeading>
        <div>
          {episodes &&
            episodes.map(episode => (
              <div key={episode.id}>
                <h3>{episode.title}</h3>
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
      <Sidebar>
        <Artwork src={image} alt="artwork" />
        <p id="publisher">{publisher}</p>
        <p>{language}</p>
        <WebsiteLink href={website}>Website</WebsiteLink>
        <WebsiteLink href={rss}>Feed</WebsiteLink>
      </Sidebar>
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
