import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Blog from '../../components/Blog/Blog';
import { BlogContainer } from './BlogContainer';

const child = <div>child</div>;
const setTheme = () => {};

describe('BlogContainer', () => {
  it('renders a Blog component', () => {
    const wrapper = shallow(<BlogContainer setTheme={setTheme}>{child}</BlogContainer>);
    expect(wrapper.type()).to.equal(Blog);
  });

  it('passes props.setTheme to Blog', () => {
    const wrapper = shallow(<BlogContainer setTheme={setTheme}>{child}</BlogContainer>);
    expect(wrapper.prop('setTheme')).to.equal(setTheme);
  });

  it('renders its children', () => {
    const wrapper = shallow(<BlogContainer setTheme={setTheme}>{child}</BlogContainer>);
    expect(wrapper.contains(child)).to.be.true;
  });
});
