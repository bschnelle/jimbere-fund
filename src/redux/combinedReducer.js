import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import blog from './modules/blog/blogModule';
import ui from './modules/ui/uiModule';

export default combineReducers({
  blog,
  routing: routerReducer,
  ui
});
