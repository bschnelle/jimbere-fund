import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Blog from './Blog';
import Container from '../Container/Container';
import classes from './Blog.scss';

let child;
let setTheme;

describe('Blog', () => {
  beforeEach(() => {
    child = <div>child</div>;
    setTheme = sinon.stub();
  });

  describe('componentWillMount()', () => {
    it('calls props.setTheme with "primary"', () => {
      shallow(<Blog setTheme={setTheme}>{child}</Blog>);
      expect(setTheme).to.have.been.calledWith('primary');
    });
  });

  describe('componentWillUnmount()', () => {
    it('calls props.setTheme with "secondary"', () => {
      const wrapper = shallow(<Blog setTheme={setTheme}>{child}</Blog>);
      wrapper.instance().componentWillUnmount();
      expect(setTheme).to.have.been.calledWith('secondary');
    });
  });

  describe('render()', () => {
    it('is of type Container', () => {
      const wrapper = shallow(<Blog setTheme={setTheme}>{child}</Blog>);
      expect(wrapper.type()).to.equal(Container);
    });

    it('has a .blog class', () => {
      const wrapper = shallow(<Blog setTheme={setTheme}>{child}</Blog>);
      expect(wrapper.is(`.${classes.blog}`)).to.be.true;
    });

    it('renders its children', () => {
      const wrapper = shallow(<Blog setTheme={setTheme}>{child}</Blog>);
      expect(wrapper.contains(child)).to.be.true;
    });
  });
});
