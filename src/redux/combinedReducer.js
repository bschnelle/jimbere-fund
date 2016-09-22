import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import blog from './modules/blog/blogModule';

export default combineReducers({
  blog,
  routing: routerReducer
});
