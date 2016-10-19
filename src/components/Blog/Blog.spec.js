import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Blog from './Blog';
import Container from '../Container/Container';
import classes from './Blog.scss';

const child = <div>Child</div>;

describe('Blog', () => {
  it('is of type Container', () => {
    const wrapper = shallow(<Blog>{child}</Blog>);
    expect(wrapper.type()).to.equal(Container);
  });

  it('renders its children', () => {
    const wrapper = shallow(<Blog>{child}</Blog>);
    expect(wrapper.contains(child)).to.be.true;
  });

  describe('with the following props', () => {
    it('className = .blog', () => {
      const wrapper = shallow(<Blog>{child}</Blog>);
      expect(wrapper.prop('className')).to.equal(classes.blog);
    });

    it('fluid = !props.slug', () => {
      const slug = 'apple-juice';
      const wrapper = shallow(<Blog slug={slug}>{child}</Blog>);
      expect(wrapper.prop('fluid')).to.equal(!slug);
    });

    it('title = "Blog"', () => {
      const wrapper = shallow(<Blog>{child}</Blog>);
      expect(wrapper.prop('title')).to.equal('Blog');
    });
  });
});
