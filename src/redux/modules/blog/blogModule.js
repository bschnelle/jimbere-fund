import { fromJS } from 'immutable';
import * as blogService from '../../../services/blog/blogService';

// Actions
export const GET_POST = 'blog/GET_POST';
export const GET_POST_FAILURE = 'blog/GET_POST_FAILURE';
export const GET_POST_SUCCESS = 'blog/GET_POST_SUCCESS';

export const GET_POSTS = 'blog/GET_POSTS';
export const GET_POSTS_FAILURE = 'blog/GET_POSTS_FAILURE';
export const GET_POSTS_SUCCESS = 'blog/GET_POSTS_SUCCESS';

// Reducer
const blogSvc = blogService.default;
const initialState = fromJS({
  activePost: undefined,
  error: false,
  fetchingPosts: false,
  found: undefined,
  meta: {},
  posts: []
});

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POST: {
      return state.set('fetchingPost', true);
    }

    case GET_POST_FAILURE: {
      return state.merge({ error: true, fetchingPost: false });
    }

    case GET_POST_SUCCESS: {
      const { content, slug } = action;
      const index = state.get('posts').findIndex((post) => post.get('slug') === slug);
      const newState = state.updateIn(['posts', index], (post) => post.set('content', content));
      return newState.merge({
        activePost: slug,
        fetchingPost: false
      });
    }

    case GET_POSTS: {
      return state.set('fetchingPosts', true);
    }

    case GET_POSTS_FAILURE: {
      return state.merge({ error: true, fetchingPosts: false });
    }

    case GET_POSTS_SUCCESS: {
      const newState = state.update('posts', (posts) => posts.concat(fromJS(action.posts)));
      return newState.merge({
        fetchingPosts: false,
        found: action.found,
        meta: fromJS(action.meta)
      });
    }

    default: {
      return state;
    }
  }
};

// Action Creators
export function getPost(id) {
  return (dispatch) => {
    dispatch({ type: GET_POST });
    return blogSvc.getPost(id)
      .then((post) => dispatch({ type: GET_POST_SUCCESS, post }))
      .catch(() => dispatch({ type: GET_POST_FAILURE }));
  };
}

export function getPosts() {
  return (dispatch, getState) => {
    const pageHandle = getState().blog.getIn(['meta', 'page_handle']);

    dispatch({ type: GET_POSTS });
    return blogSvc.getPosts(pageHandle)
      .then(({ found, posts, meta }) => dispatch({ type: GET_POSTS_SUCCESS, found, posts, meta }))
      .catch(() => dispatch({ type: GET_POSTS_FAILURE }));
  };
}
