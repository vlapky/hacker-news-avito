import newsList from './newsList';
import singleNews from './singleNews';
import comments from './comments';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({ newsList, singleNews, comments });

export default rootReducer;
