import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { fromJS } from 'immutable';
import BlogPost from '../../components/BlogPost/BlogPost';
import { BlogPostContainer, stateToProps } from './BlogPostContainer';

describe('BlogPostContainer', () => {
  let getPosts;
  let loading;
  let params;
  let post;
  let wrapper;

  beforeEach(() => {
    getPosts = sinon.stub();
    loading = false;
    params = {};
    post = fromJS({ slug: 'post-1' });
    wrapper = shallow(
      <BlogPostContainer
        getPosts={getPosts}
        loading={loading}
        params={params}
        post={post}
      />
    );
  });

  describe('render()', () => {
    it('renders a BlogPost component', () => {
      expect(wrapper.type()).to.equal(BlogPost);
    });

    it('passes props.loading to BlogPost', () => {
      expect(wrapper.prop('loading')).to.equal(loading);
    });

    it('passes props.post to BlogPost', () => {
      expect(wrapper.prop('post')).to.equal(post);
    });
  });

  describe('stateToProps()', () => {
    let state;
    let props;
    beforeEach(() => {
      state = {
        blog: fromJS({
          loading: true,
          posts: [
            { slug: 'post-2' },
            { slug: 'post-3' },
            post
          ]
        })
      };
      props = { params: { slug: 'post-1' } };
    });

    it('maps state.blog.loading to props.loading', () => {
      expect(stateToProps(state, props).loading).to.equal(state.blog.get('loading'));
    });

    it('maps the blog post with slug of props.params.slug to props.post', () => {
      expect(stateToProps(state, props).post).to.equal(post);
    });
  });
});
