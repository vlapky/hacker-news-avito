import { LOADING_NEWS, FETCHING_NEWS, CLEAR_NEWS } from '../actions/actions';

const newsList = (state = [], { type, payload }) => {
  switch (type) {

    case CLEAR_NEWS:
      return [];

    case LOADING_NEWS:
      return [...state];

    case FETCHING_NEWS:
      return [...state, payload];

    default:
      return state;
  }
}

export default newsList;