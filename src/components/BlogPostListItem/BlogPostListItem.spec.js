import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';
import { Link } from 'react-router';
import BlogPostListItem from './BlogPostListItem';
import classes from './BlogPostListItem.scss';

describe('BlogPostListItem', () => {
  it('renders a root Link with a .post class', () => {
    const post = fromJS({ author: { name: 'Rob' } });
    const wrapper = shallow(<BlogPostListItem post={post} />);
    expect(wrapper.type()).to.equal(Link);
    expect(wrapper.is(`.${classes.post}`)).to.be.true;
  });
});
