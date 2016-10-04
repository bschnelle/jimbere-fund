import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Container from '../Container/Container';
import Projects from './Projects';
import classes from './Projects.scss';

let setTheme;
let wrapper;

describe('Projects', () => {
  beforeEach(() => {
    setTheme = sinon.stub();
    wrapper = shallow(<Projects setTheme={setTheme} />);
  });

  describe('componentWillMount()', () => {
    it('calls props.setTheme with "primary"', () => {
      expect(setTheme).to.have.been.calledWith('primary');
    });
  });

  describe('componentWillUnmount()', () => {
    it('calls props.setTheme with "primary"', () => {
      wrapper.instance().componentWillUnmount();
      expect(setTheme).to.have.been.calledWith('secondary');
    });
  });

  describe('render()', () => {
    describe('root element', () => {
      it('is of type Container', () => {
        expect(wrapper.type()).to.equal(Container);
      });

      describe('props', () => {
        it('className = .projects', () => {
          expect(wrapper.prop('className')).to.equal(classes.projects);
        });

        it('title = "Projects"', () => {
          expect(wrapper.prop('title')).to.equal('Projects');
        });
      });
    });

    describe('nested elements', () => {
      it('renders an h6 with "Coming soon!"', () => {
        expect(wrapper.contains(<h6>Coming soon!</h6>)).to.be.true;
      });
    });
  });
});
