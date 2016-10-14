import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { fromJS } from 'immutable';
import BlogPostList from '../../components/BlogPostList/BlogPostList';
import { BlogPostListContainer, stateToProps } from './BlogPostListContainer';

let getPosts;
let loading;
let moreAvailable;
let posts;
let wrapper;

describe('BlogPostListContainer', () => {
  beforeEach(() => {
    getPosts = sinon.stub();
    loading = false;
    moreAvailable = true;
    posts = fromJS([{ ID: '1' }]);
    wrapper = shallow(
      <BlogPostListContainer
        getPosts={getPosts}
        loading={loading}
        moreAvailable={moreAvailable}
        posts={posts}
      />
    );
  });

  /* describe('componentWillMount()', () => {
    it('calls props.getPosts()', () => {
      expect(getPosts).to.have.been.calledOnce;
    });
  }); */

  describe('render()', () => {
    it('renders a BlogPostList', () => {
      expect(wrapper.type()).to.equal(BlogPostList);
    });

    describe('with the following props', () => {
      it('loading = props.loading', () => {
        expect(wrapper.prop('loading')).to.equal(loading);
      });

      it('loadMore = props.getPosts', () => {
        expect(wrapper.prop('loadMore')).to.equal(getPosts);
      });

      it('moreAvailable = props.moreAvailable', () => {
        expect(wrapper.prop('moreAvailable')).to.equal(moreAvailable);
      });

      it('posts = props.posts', () => {
        expect(wrapper.prop('posts')).to.equal(posts);
      });
    });
  });

  describe('stateToProps', () => {
    let state;
    let newState;

    beforeEach(() => {
      state = { blog: fromJS({ loading, moreAvailable, posts }) };
      newState = stateToProps(state);
    });

    it('maps state.blog.loading to props.loading', () => {
      expect(newState.loading).to.equal(loading);
    });

    it('maps state.blog.moreAvailable to props.moreAvailable', () => {
      expect(newState.moreAvailable).to.equal(moreAvailable);
    });

    it('maps state.blog.posts to props.posts', () => {
      expect(newState.posts).to.equal(posts);
    });
  });
});
