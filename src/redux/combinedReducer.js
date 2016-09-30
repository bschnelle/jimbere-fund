import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { createResponsiveStateReducer } from 'redux-responsive';
import blog from './modules/blog/blogModule';
import ui from './modules/ui/uiModule';
import styleConfig from '../styles/config.scss';

/* map SASS breakPoint variables to pojo for redux-responsive */
const breakPoints = {};
Object.keys(styleConfig).forEach((key) => {
  if (/^breakPoints-/.test(key)) {
    const newKey = key.replace('breakPoints-', '');
    const value = parseInt(styleConfig[key].replace('px', ''), 10);
    breakPoints[newKey] = value;
  }
});

export default combineReducers({
  blog,
  browser: createResponsiveStateReducer(breakPoints),
  routing: routerReducer,
  ui
});
