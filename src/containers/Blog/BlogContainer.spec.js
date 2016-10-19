import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Blog from '../../components/Blog/Blog';
import BlogContainer from './BlogContainer';

const child = <div>child</div>;
const params = { slug: 'apple-juice' };

describe('BlogContainer', () => {
  it('renders a Blog component', () => {
    const wrapper = shallow(<BlogContainer params={params}>{child}</BlogContainer>);
    expect(wrapper.type()).to.equal(Blog);
  });

  it('passes props.params.slug to Blog as props.slug', () => {
    const wrapper = shallow(<BlogContainer params={params}>{child}</BlogContainer>);
    expect(wrapper.prop('slug')).to.equal(params.slug);
  });

  it('renders its children', () => {
    const wrapper = shallow(<BlogContainer params={params}>{child}</BlogContainer>);
    expect(wrapper.contains(child)).to.be.true;
  });
});
