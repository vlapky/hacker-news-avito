import { LOADING_NEWS, FETCHING_NEWS, LOADING_SINGLE_NEWS, FETCH_SINGLE_NEWS } from './actions';

const hits = (state = { newsList: [], singleNews: [] }, { type, payload }) => {
  switch (type) {
    case LOADING_NEWS:
      return { ...state };
    case FETCHING_NEWS:
      return { ...state, newsList: [...state.newsList, payload] };
    case LOADING_SINGLE_NEWS:
      return { ...state }
    case FETCH_SINGLE_NEWS:
      return { ...state, singleNews: payload}
    default:
      return state;
  }
}

export default hits;