import { GET_REQUEST, GET_PAYLOAD, GET_ERROR } from './actionTypes';

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

const listenUrl = 'https://listen-api.listennotes.com/api/v2';

const listenOptions = {
  headers: {
    'X-ListenAPI-Key': process.env.REACT_APP_LISTEN_API_KEY
  }
};

export const searchPodcasts = (term, dispatch) =>
  getAction({
    key: 'podcasts',
    url: `${listenUrl}/search?type=podcast&q=${term}`,
    dispatch,
    options: listenOptions
  });

export const getPodcast = (id, dispatch) =>
  getAction({
    key: 'podcast',
    url: `${listenUrl}/podcasts/${id}`,
    dispatch,
    options: listenOptions
  });

export const getFeed = (id, dispatch) =>
  getAction({
    key: 'feed',
    url: `https://www.listennotes.com/c/r/${id}`,
    dispatch,
    listenOptions
  });
