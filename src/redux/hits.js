import { LOADING_NEWS, FETCHING_NEWS, LOADING_SINGLE_NEWS, FETCH_SINGLE_NEWS, LOADING_COMMENTS, FETCH_COMMENTS } from './actions';

const hits = (state = { newsList: [], singleNews: [], comments: [] }, { type, payload }) => {
  switch (type) {
    case 'NEWS_CLEAR':
      return { ...state, newsList: [] };

    case 'NEWS_PAGE_CLEAR':
      return { ...state, singleNews: [], comments: [] };

    case LOADING_NEWS:
      return { ...state };

    case FETCHING_NEWS:
      return { ...state, newsList: [...state.newsList, payload] };

    case LOADING_SINGLE_NEWS:
      return { ...state }

    case FETCH_SINGLE_NEWS:
      return { ...state, singleNews: payload }

    case LOADING_COMMENTS:
      return { ...state }

    case FETCH_COMMENTS:
      return { ...state, comments: [...state.comments, payload] };

    default:
      return state;
  }
}

export default hits;