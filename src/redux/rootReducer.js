import newsPage from './newsPage';
import hits from './hits';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({ newsPage, hits });

export default rootReducer;
