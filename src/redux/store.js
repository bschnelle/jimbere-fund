import * as redux from 'redux';
import { responsiveStoreEnhancer } from 'redux-responsive';
import thunk from 'redux-thunk';
import * as combinedReducer from './combinedReducer';

const { applyMiddleware, compose, createStore } = redux;
const enhancers = [applyMiddleware(thunk), responsiveStoreEnhancer];

/* istanbul ignore if */
if (__DEV__ && window.devToolsExtension) {
  enhancers.push(window.devToolsExtension());
}

const store = createStore(combinedReducer.default, compose(...enhancers));

export default store;
