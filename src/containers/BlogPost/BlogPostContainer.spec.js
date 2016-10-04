import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';
import BlogPost from '../../components/BlogPost/BlogPost';
import { BlogPostContainer, stateToProps } from './BlogPostContainer';

const post = fromJS({ slug: 'post-1' });

describe('BlogPostContainer', () => {
  describe('render()', () => {
    it('renders a BlogPost component', () => {
      const wrapper = shallow(<BlogPostContainer />);
      expect(wrapper.type()).to.equal(BlogPost);
    });

    it('passes props.post to BlogPost', () => {
      const wrapper = shallow(<BlogPostContainer post={post} />);
      expect(wrapper.prop('post')).to.equal(post);
    });
  });

  describe('stateToProps()', () => {
    it('find the blog.posts with a slog matching props.params.slug', () => {
      const state = {
        blog: fromJS({
          posts: [
            { slug: 'post-2' },
            { slug: 'post-3' },
            post
          ]
        })
      };
      const props = { params: { slug: 'post-1' } };
      expect(stateToProps(state, props).post).to.equal(post);
    });
  });
});
