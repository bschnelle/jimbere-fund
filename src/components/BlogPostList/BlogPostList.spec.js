import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { fromJS } from 'immutable';
import FlipMove from 'react-flip-move';
import BlogPostListItem from '../BlogPostListItem/BlogPostListItem';
import Button from '../Button/Button';
import BlogPostList from './BlogPostList';
import classes from './BlogPostList.scss';

describe('BlogPostList', () => {
  let loadMore;
  let more;
  let posts;

  beforeEach(() => {
    loadMore = sinon.stub();
    more = true;
    posts = fromJS([{ ID: '1' }]);
  });

  describe('posts', () => {
    describe('renders a FlipMove component', () => {
      it('is of type FlipMove', () => {
        const wrapper = shallow(
          <BlogPostList loadMore={loadMore} moreAvailable={more} posts={posts} />
        );
        expect(wrapper.find(FlipMove)).to.have.length(1);
      });

      it('isn\'t rendered if props.posts is undefined', () => {
        posts = undefined;
        const wrapper = shallow(
          <BlogPostList loadMore={loadMore} moreAvailable={more} posts={posts} />
        );
        expect(wrapper.find(FlipMove)).to.have.length(0);
      });

      describe('with the following props', () => {
        it('className = .posts', () => {
          const wrapper = shallow(
            <BlogPostList loadMore={loadMore} moreAvailable={more} posts={posts} />
          );
          expect(wrapper.find(FlipMove).prop('className')).to.equal(classes.posts);
        });

        it('enterAnimation = "fade"', () => {
          const wrapper = shallow(
            <BlogPostList loadMore={loadMore} moreAvailable={more} posts={posts} />
          );
          expect(wrapper.find(FlipMove).prop('enterAnimation')).to.equal('fade');
        });

        it('staggerDelayBy = 50', () => {
          const wrapper = shallow(
            <BlogPostList loadMore={loadMore} moreAvailable={more} posts={posts} />
          );
          expect(wrapper.find(FlipMove).prop('staggerDelayBy')).to.equal(50);
        });

        it('staggerDurationBy = 50', () => {
          const wrapper = shallow(
            <BlogPostList loadMore={loadMore} moreAvailable={more} posts={posts} />
          );
          expect(wrapper.find(FlipMove).prop('staggerDurationBy')).to.equal(50);
        });
      });

      describe('posts', () => {
        it('renders a BlogPostListItem for every props.posts', () => {
          posts = fromJS([{ ID: '1' }, { ID: '2' }, { ID: '3' }]);
          const wrapper = shallow(
            <BlogPostList loadMore={loadMore} moreAvailable={more} posts={posts} />
          );
          expect(wrapper.find(BlogPostListItem)).to.have.length(3);
        });
      });
    });
  });

  describe('load more', () => {
    it('renders a div with class .loadMore if props.moreAvailable is true', () => {
      const wrapper = shallow(
        <BlogPostList loadMore={loadMore} moreAvailable={more} posts={posts} />
      );
      expect(wrapper.find(`.${classes.loadMore}`)).to.have.length(1);
      wrapper.setProps({ loadMore, moreAvailable: false, posts });
      expect(wrapper.find(`.${classes.loadMore}`)).to.have.length(0);
    });

    it('contains a button with props.label of "More" and props.onClick set to loadMore', () => {
      const wrapper = shallow(
        <BlogPostList loadMore={loadMore} moreAvailable={more} posts={posts} />
      );
      const button = wrapper.find(Button);
      expect(button.prop('label')).to.equal('More');
      expect(button.prop('onClick')).to.equal(loadMore);
    });
  });
});
