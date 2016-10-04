import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';
import moment from 'moment';
import { Link } from 'react-router';
import BlogPostListItem from './BlogPostListItem';
import classes from './BlogPostListItem.scss';

let post;

describe('BlogPostListItem', () => {
  beforeEach(() => {
    post = fromJS({
      author: {
        name: 'Rob'
      },
      date: new Date(),
      featured_image: '/path/to/image.jpg',
      slug: 'my-blog-post',
      title: 'My Blog Post'
    });
  });

  describe('root Link', () => {
    it('of type Link with a .post class', () => {
      const wrapper = shallow(<BlogPostListItem post={post} />);
      expect(wrapper.type()).to.equal(Link);
    });

    it('sets the root Link\'s background image to props.post.featured_image', () => {
      const wrapper = shallow(<BlogPostListItem post={post} />);
      expect(wrapper.prop('style').background).to.equal(`url(${post.get('featured_image')})`);
    });

    it('links to /blog/props.post.slug', () => {
      const wrapper = shallow(<BlogPostListItem post={post} />);
      expect(wrapper.prop('to')).to.equal(`/blog/${post.get('slug')}`);
    });

    it('has a .post class', () => {
      const wrapper = shallow(<BlogPostListItem post={post} />);
      expect(wrapper.is(`.${classes.post}`)).to.be.true;
    });

    it('if props.className is passed it is added to the root Link', () => {
      const className = 'myClass';
      const wrapper = shallow(<BlogPostListItem className={className} post={post} />);
      expect(wrapper.is(`.${className}`)).to.be.true;
    });
  });

  describe('nested elements', () => {
    it('renders a h5 with a .title class containing the blog post\'s title', () => {
      const wrapper = shallow(<BlogPostListItem post={post} />);
      expect(wrapper.contains(<h5 className={classes.title}>{post.get('title')}</h5>)).to.be.true;
    });

    it('renders a footer with the author and a formatted date', () => {
      const wrapper = shallow(<BlogPostListItem post={post} />);
      const footer = wrapper.find(`.${classes.footer}`);
      expect(footer.contains([
        <span>{post.get('author')}</span>,
        <span>{moment(new Date(post.get('date'))).format('D MMM, YY')}</span>
      ])).to.be.true;
    });
  });
});
