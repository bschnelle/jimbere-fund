import { expect } from 'chai';
import sinon from 'sinon';
import { fromJS, Map as iMap } from 'immutable';
import * as blogModule from './blogModule';
import * as blogService from '../../../services/blog/blogService';

const blogSvc = blogService.default;
const {
  default: reducer,
  GET_POST,
  GET_POST_FAILURE,
  GET_POST_SUCCESS,
  GET_POSTS,
  GET_POSTS_FAILURE,
  GET_POSTS_SUCCESS
} = blogModule;

describe('[Redux] BlogModule', () => {
  describe('reducer', () => {
    describe('default state', () => {
      it('error = false', () => {
        expect(reducer(undefined, {}).get('error')).to.be.false;
      });

      it('loading = false', () => {
        expect(reducer(undefined, {}).get('loading')).to.be.false;
      });

      it('moreAvailable = true', () => {
        expect(reducer(undefined, {}).get('moreAvailable')).to.be.true;
      });

      it('posts = empty immutable list', () => {
        expect(reducer(undefined, {}).get('posts').size).to.equal(0);
      });
    });

    describe('GET_POST', () => {
      it('sets loading to true', () => {
        const state = fromJS({});
        expect(reducer(state, { type: GET_POST }).get('loading')).to.be.true;
      });
    });

    describe('GET_POST_FAILURE', () => {
      let newState;

      beforeEach(() => {
        const state = fromJS({ loading: true });
        newState = reducer(state, { type: GET_POST_FAILURE });
      });

      it('sets error to true', () => expect(newState.get('error')).to.be.true);
      it('sets loading to false', () => expect(newState.get('loading')).to.be.false);
    });

    /* describe('GET_POST_SUCCESS', () => {
      let content;
      let newState;
      const id = 'id';

      beforeEach(() => {
        const state = fromJS({ loading: true, posts: [{ id }] });
        content = 'neat post';
        newState = reducer(state, { type: GET_POST_SUCCESS, content, id });
      });

      it('sets loading to false', () => {
        expect(newState.get('loading')).to.be.false;
      });

      it('finds and updates post in state.posts with action.content', () => {
        expect(newState.getIn(['posts', 0, 'content'])).to.equal(content);
      });
    }); */

    describe('GET_POSTS', () => {
      it('sets loading to true', () => {
        const state = fromJS({});
        expect(reducer(state, { type: GET_POSTS }).get('loading')).to.be.true;
      });
    });

    describe('GET_POSTS_FAILURE', () => {
      let newState;

      beforeEach(() => {
        const state = fromJS({ loading: true });
        newState = reducer(state, { type: GET_POSTS_FAILURE });
      });

      it('sets error to true', () => expect(newState.get('error')).to.be.true);
      it('sets loading to false', () => expect(newState.get('loading')).to.be.false);
    });

    describe('GET_POSTS_SUCCESS', () => {
      let found;
      let newState;
      let posts;

      beforeEach(() => {
        found = 7;
        const state = fromJS({ loading: true, posts: [{ ID: 123 }] });
        posts = [{ ID: 456 }, { ID: 789 }];
        newState = reducer(state, { type: GET_POSTS_SUCCESS, found, posts });
      });

      it('sets found to action.found', () => {
        expect(newState.get('found')).to.equal(found);
      });

      it('sets loading to false', () => {
        expect(newState.get('loading')).to.be.false;
      });

      it('sets moreAvailable to posts.size < action.found', () => {
        expect(newState.get('moreAvailable')).to.be.true;
      });

      it('pushes actions.posts into state.posts', () => {
        expect(newState.get('posts').size).to.equal(3);
      });
    });

    describe('default', () => {
      it('returns old state', () => {
        const state = fromJS({});
        expect(reducer(state, { type: 'SOMETHING_ELSE' })).to.equal(state);
      });
    });
  });

  describe('getPost()', () => {
    let dispatch;
    const id = 'id';

    beforeEach(() => {
      dispatch = sinon.stub();
      sinon.stub(blogSvc, 'getPost');
    });

    afterEach(() => blogSvc.getPost.restore());

    it('dispatches GET_POST', () => {
      blogSvc.getPost.returns(Promise.resolve());
      blogModule.getPost(id)(dispatch);
      expect(dispatch).to.have.been.calledWith({ type: GET_POST });
    });

    it('calls blogService.getPost with id', () => {
      blogSvc.getPost.returns(Promise.resolve());
      blogModule.getPost(id)(dispatch);
      expect(blogSvc.getPost).to.have.been.calledWith(id);
    });

    it('dispatches GET_POST_SUCCESS with resolved payload on success', (done) => {
      const post = {};
      const action = { type: GET_POST_SUCCESS, post };

      blogSvc.getPost.returns(Promise.resolve(post));
      blogModule.getPost(id)(dispatch).then(() => {
        expect(dispatch).to.have.been.calledWith(action);
        done();
      });
    });

    it('dispatches GET_POST_FAILURE on error', (done) => {
      blogSvc.getPost.returns(Promise.reject());
      blogModule.getPost(id)(dispatch).then(() => {
        expect(dispatch).to.have.been.calledWith({ type: GET_POST_FAILURE });
        done();
      });
    });
  });

  describe('getPosts()', () => {
    let dispatch;
    let getState;

    beforeEach(() => {
      dispatch = sinon.stub();
      getState = () => ({
        blog: iMap({ posts: { size: 5 } })
      });
      sinon.stub(blogSvc, 'getPosts');
    });
    afterEach(() => blogSvc.getPosts.restore());

    it('dispatches GET_POSTS', () => {
      blogSvc.getPosts.returns(Promise.resolve());
      blogModule.getPosts()(dispatch, getState);
      expect(dispatch).to.have.been.calledWith({ type: GET_POSTS });
    });

    it('calls blogService.getPosts with state.blog.posts.size', () => {
      const offset = getState().blog.get('posts').size;
      blogSvc.getPosts.returns(Promise.resolve());
      blogModule.getPosts()(dispatch, getState);
      expect(blogSvc.getPosts).to.have.been.calledWith(offset);
    });

    it('dispatches GET_POSTS_SUCCESS with payload.found and payload.posts', (done) => {
      const payload = { found: 10, posts: [] };
      const action = { type: GET_POSTS_SUCCESS, found: payload.found, posts: payload.posts };
      blogSvc.getPosts.returns(Promise.resolve(payload));
      blogModule.getPosts()(dispatch, getState).then(() => {
        expect(dispatch).to.have.been.calledWith(action);
        done();
      });
    });

    it('dispatches GET_POSTS_FAILURE on error', (done) => {
      blogSvc.getPosts.returns(Promise.reject());
      blogModule.getPosts()(dispatch, getState).then(() => {
        expect(dispatch).to.have.been.calledWith({ type: GET_POSTS_FAILURE });
        done();
      });
    });
  });
});
