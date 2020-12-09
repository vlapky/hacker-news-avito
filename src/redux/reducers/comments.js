import {  LOADING_COMMENTS, FETCHING_COMMENTS, CLEAR_COMMENTS } from '../actions/actions';

const comments = (state = [], { type, payload }) => {
  switch (type) {
    case CLEAR_COMMENTS:
        return [];

    case LOADING_COMMENTS:
      return [...state];

    case FETCHING_COMMENTS:
      return [...state, payload];

    default:
      return state;
  }
}

export default comments;