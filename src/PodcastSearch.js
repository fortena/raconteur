/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SearchInput from './SearchInput';
import Spinner from './Spinner';
import PodcastSearchCard from './PodcastSearchCard';
import { enter } from './keyEvents';
import { useStateValue } from './state';
import { searchPodcasts, resetPodcasts } from './apiActions';

// Genres endpoint
// https://itunes.apple.com/WebObjects/MZStoreServices.woa/ws/genres

// Limited lookup
// http://itunes.apple.com/lookup?id=173001861
// scrape information from links?

const SearchWrapper = styled.div`
  max-width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 400px) {
    margin: 0px 10px;
  }
`;

// const GenreWrapper = styled.div`
//   margin: 5px;
//   display: flex;
// `;

// const Genre = styled.div`
//   margin-right: 10px;
//   padding: 4px;
//   border-radius: 5px;
//   font-size: 12px;
//   font-weight: bold;
//   text-transform: uppercase;
//   background: #eaeaea;
// `;

// const filterGenres = genres => genres.filter(genre => genre !== 'Podcasts');

const PodcastSearch = ({ history, location }) => {
  const [initialized, setInitialized] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [{ podcasts }, dispatch] = useStateValue();
  const { loading, results } = podcasts;
  useEffect(() => {
    if (!initialized) {
      if (location.search.length > 0) {
        const searchParam = decodeURI(location.search.substring(1));
        searchPodcasts(searchParam, dispatch);
        setSearchTerm(searchParam);
      } else if (podcasts.results.length > 0) {
        resetPodcasts(dispatch);
      }
    }
    setInitialized(true);
  });
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
            history.push({ search: `${searchTerm}` });
            searchPodcasts(searchTerm, dispatch);
          }
        }}
      />
      {loading ? (
        <Spinner />
      ) : (
        <div>
          {results.map(({ id, image, publisher_original, title_original }) => (
            <PodcastSearchCard
              key={id}
              onClick={() => history.push(`/podcast/${id}/`)}
              id={id}
              image={image}
              title={title_original}
              publisher={publisher_original}
            />
          ))}
        </div>
      )}
    </SearchWrapper>
  );
};

PodcastSearch.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func
  }).isRequired,
  location: PropTypes.shape({
    search: PropTypes.string
  }).isRequired
};

export default PodcastSearch;
