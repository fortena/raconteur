import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cheerio from 'cheerio';
import axios from 'axios';
import styled from 'styled-components';

const scrape = id => axios.get(`https://itunes.apple.com/us/podcast//id${id}`);

const lookUp = id =>
  fetch(`http://itunes.apple.com/lookup?id=${id}`).then(response =>
    response.json()
  );

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
  const [description, setDescription] = useState('');
  const [episodes, setEpisodes] = useState([]);
  const [podcast, setPodcast] = useState({});
  const [website, setWebsite] = useState('');
  const [language, setLanguage] = useState('');
  const podcastId = match.params.id;
  useEffect(() => {
    if (!initialized) {
      lookUp(podcastId).then(({ results }) => {
        setPodcast(results[0]);
      });
      scrape(podcastId).then(response => {
        const $ = cheerio.load(response.data);
        $('#content .center-stack .product-review p').each((index, element) => {
          setDescription(element.firstChild.data);
        });
        $('.extra-list a:contains("Podcast Website")').each(
          (index, element) => {
            setWebsite($(element).attr('href'));
          }
        );
        $('.language').each((index, element) => {
          const lang = $(element)
            .text()
            .substring(10);
          setLanguage(lang);
        });
        const tracks = [];
        $('.podcast-episode').each((index, element) => {
          const episodeId = $(element).attr('adam-id');
          const episode = [];
          $(element)
            .find('.text')
            .each((i, el) => {
              episode.push(el.firstChild.data);
            });
          const [
            episodeTitle,
            episodeDescription,
            episodeReleaseData
          ] = episode;
          tracks.push({
            episodeId,
            episodeTitle,
            episodeDescription,
            episodeReleaseData
          });
        });
        setEpisodes(tracks);
      });
    }
    setInitialized(true);
  });
  return (
    <Wrapper>
      <Main>
        <Title>{podcast.collectionName}</Title>
        <p>{description}</p>
        <SectionHeading>Episodes</SectionHeading>
        <div>
          {episodes.map(
            ({
              episodeId,
              episodeTitle,
              episodeDescription,
              episodeReleaseData
            }) => (
              <div key={episodeId}>
                <h3>{episodeTitle}</h3>
                {episodeTitle !== episodeDescription ? (
                  <p>{episodeDescription}</p>
                ) : null}
                <ReleaseDate>{`Released: ${episodeReleaseData}`}</ReleaseDate>
              </div>
            )
          )}
        </div>
      </Main>
      <Sidebar>
        <Artwork src={podcast.artworkUrl600} alt="artwork" />
        <p id="publisher">{podcast.artistName}</p>
        <p>{language}</p>
        <WebsiteLink href={website}>{website}</WebsiteLink>
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
