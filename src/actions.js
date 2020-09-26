import {
  GET_REQUEST,
  GET_PAYLOAD,
  GET_MORE_REQUEST,
  GET_MORE_PAYLOAD,
  GET_ERROR,
  RESET_STATE,
  SET_STATE
} from './actionTypes';

const request = (url, options) =>
  fetch(url, options).then(response => response.json());

export const getAction = ({ key, url, dispatch, options }) => {
  dispatch({ type: GET_REQUEST, meta: { key } });
  return request(url, options)
    .then(payload => {
      dispatch({ type: GET_PAYLOAD, payload, meta: { key } });
      return payload;
    })
    .catch(error => {
      dispatch({ type: GET_ERROR, error, meta: { key } });
      return error;
    });
};

export const getMoreAction = ({ attribute, key, url, dispatch, options }) => {
  dispatch({ type: GET_MORE_REQUEST, meta: { key } });
  return request(url, options)
    .then(payload => {
      dispatch({ type: GET_MORE_PAYLOAD, payload, meta: { key, attribute } });
      return payload;
    })
    .catch(error => {
      dispatch({ type: GET_ERROR, error, meta: { key } });
      return error;
    });
};

export const setState = ({ key, payload, dispatch }) => {
  dispatch({ type: SET_STATE, meta: { key }, payload });
  return payload;
};

export const resetState = ({ key, dispatch }) => {
  dispatch({ type: RESET_STATE, meta: { key } });
};

const listenUrl = 'https://listen-api.listennotes.com/api/v2';

const options = {
  headers: {
    'X-ListenAPI-Key': process.env.REACT_APP_LISTEN_API_KEY
  }
};

export const searchPodcasts = (term, dispatch) =>
  getAction({
    key: 'podcasts',
    url: `${listenUrl}/search?type=podcast&q=${term}`,
    dispatch,
    options
  });

export const resetPodcasts = dispatch =>
  resetState({
    key: 'podcasts',
    dispatch
  });

export const getPodcast = (id, dispatch) =>
  getAction({
    key: 'podcast',
    url: `${listenUrl}/podcasts/${id}`,
    dispatch,
    options
  });

export const getMorePodcastEpisodes = (podcastId, nextPubDate, dispatch) =>
  getMoreAction({
    attribute: 'episodes',
    key: 'podcast',
    url: `${listenUrl}/podcasts/${podcastId}?next_episode_pub_date=${nextPubDate}`,
    dispatch,
    options
  });

export const getFeed = (id, dispatch) =>
  getAction({
    key: 'feed',
    url: `https://www.listennotes.com/c/r/${id}`,
    dispatch,
    options: {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'X-ListenAPI-Key': process.env.REACT_APP_LISTEN_API_KEY
      },
      mode: 'no-cors'
    }
  });
