import { GET_REQUEST, GET_PAYLOAD, GET_ERROR, RESET } from './actionTypes';

export const initialState = {
  feed: { loading: false, error: null, stage: '' },
  podcasts: { loading: false, results: [], error: null, stage: '' },
  podcast: { loading: false, error: null, stage: '' }
};

export const reducer = (state, action) => {
  switch (action.type) {
    case GET_REQUEST: {
      const { key } = action.meta;
      if (key) {
        const subState = state[key];
        if (subState) {
          return {
            ...state,
            [key]: {
              ...subState,
              loading: true,
              stage: 'Requesting data'
            }
          };
        }
      }
      return state;
    }
    case GET_PAYLOAD: {
      const { key } = action.meta;
      if (key) {
        const subState = state[key];
        if (subState) {
          return {
            ...state,
            [key]: {
              ...subState,
              ...action.payload,
              loading: false,
              stage: 'Data fetched'
            }
          };
        }
      }
      return state;
    }
    case GET_ERROR: {
      const { key } = action.meta;
      const subState = state[key];
      return {
        ...state,
        [key]: {
          ...subState,
          ...action.error,
          loading: false,
          stage: 'Request failed'
        }
      };
    }
    case RESET: {
      const { key } = action.meta;
      return {
        ...state,
        [key]: initialState[key]
      };
    }
    default:
      return state;
  }
};
