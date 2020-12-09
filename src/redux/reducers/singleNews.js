import { LOADING_SINGLE_NEWS, FETCH_SINGLE_NEWS, CLEAR_SINGLE_NEWS } from '../actions/actions';

const singleNews = (state = {}, { type, payload }) => {
  switch (type) {

    case CLEAR_SINGLE_NEWS:
      return {};

    case LOADING_SINGLE_NEWS:
      return {...state};

    case FETCH_SINGLE_NEWS:
      return payload;

    default:
      return state;
  }
}

export default singleNews;