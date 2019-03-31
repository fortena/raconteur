import { GET_REQUEST, GET_PAYLOAD, GET_ERROR } from './actionTypes';

const request = (url, options) =>
  fetch(url, options).then(response => response.json());

export const getAction = ({ key, url, dispatch }) => {
  dispatch({ type: GET_REQUEST, meta: { key } });
  return request(url)
    .then(payload => {
      dispatch({ type: GET_PAYLOAD, payload, meta: { key } });
      return payload;
    })
    .catch(error => {
      dispatch({ type: GET_ERROR, error, meta: { key } });
      return error;
    });
};

export const searchPodcasts = (term, dispatch) =>
  getAction({
    key: 'podcasts',
    url: `https://itunes.apple.com/search?entity=podcast&term=${term}`,
    dispatch
  });

// export const getAction = ({ key, url }) => {
//   const [state, dispatch] = useStateValue();
//   dispatch({ type: GET_REQUEST, meta: { key } });
//   return request(url)
//     .then(payload => {
//       dispatch({ type: GET_PAYLOAD, payload, meta: { key } });
//       return payload;
//     })
//     .catch(error => {
//       dispatch({ type: GET_ERROR, error, meta: { key } });
//       return error;
//     });
// };

// export const getAction = ({ key, url }) => {
//   const [state, dispatch] = useStateValue();
//   dispatch({ type: `${key}_REQUEST` });
//   return request(url)
//     .then(payload => {
//       dispatch({ type: `${key}_SUCCESS`, payload });
//       return payload;
//     })
//     .catch(error => {
//       dispatch({ type: `${key}_FAILURE`, error });
//       return error;
//     });
// };
