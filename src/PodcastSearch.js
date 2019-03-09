import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SearchInput from './SearchInput';
import { enter } from './keyEvents';

const search = term =>
  fetch(`https://itunes.apple.com/search?entity=podcast&term=${term}`).then(
    response => response.json()
  );

// Genres endpoint
// https://itunes.apple.com/WebObjects/MZStoreServices.woa/ws/genres

// Limited lookup
// http://itunes.apple.com/lookup?id=173001861
// scrape information from links?

const ResultWrapper = styled.div`
  border: 1px solid lighhtgrey;
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 5px 10px;
`;

const SearchWrapper = styled.div`
  max-width: 1200px;
`;

const ResultItem = styled.div`
  display: flex;
  margin: 15px 0px;
`;

const PodcastName = styled(Link)`
  margin: 5px;
  font-size: 28px;
`;

const Host = styled.p`
  margin: 10px 5px;
`;

const GenreWrapper = styled.div`
  margin: 5px;
  display: flex;
`;

const Genre = styled.div`
  margin-right: 10px;
  padding: 4px;
  border-radius: 5px;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  background: #eaeaea;
`;

const filterGenres = genres => genres.filter(genre => genre !== 'Podcasts');

const PodcastSearch = ({ history, match, location }) => {
  console.log('params', match);
  console.log('location', location);
  // console.log('props', props);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  console.log('searchResults', searchResults);
  return (
    <SearchWrapper>
      <SearchInput
        placeholder="Search for podcasts"
        value={searchTerm}
        onChange={e => {
          setSearchTerm(e.target.value);
        }}
        onKeyDown={e => {
          if (enter(e.key)) {
            history.push({ search: `q=${searchTerm}` });
            search(searchTerm).then(({ results }) => {
              setSearchResults(results);
            });
          }
        }}
      />
      <div>
        {searchResults.map(
          ({
            artistName,
            artistId,
            artworkUrl100,
            collectionId,
            genres,
            genreIds,
            primaryGenreName,
            trackName,
            trackId
          }) => (
            <ResultItem key={trackId}>
              <img src={artworkUrl100} alt="artwork" />
              <div>
                <PodcastName to={`/podcast/${collectionId}/`}>
                  {trackName}
                </PodcastName>
                <Host>{artistName}</Host>
                <GenreWrapper>
                  {filterGenres(genres).map(genre => (
                    <Genre key={genre}>{genre}</Genre>
                  ))}
                </GenreWrapper>
              </div>
            </ResultItem>
          )
        )}
      </div>
    </SearchWrapper>
  );
};

export default PodcastSearch;
