import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Container from '../Container/Container';
import Work from './Work';
import classes from './Work.scss';

let setTheme;
let wrapper;

describe('Work', () => {
  beforeEach(() => {
    setTheme = sinon.stub();
    wrapper = shallow(<Work setTheme={setTheme} />);
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
        it('className = .work', () => {
          expect(wrapper.prop('className')).to.equal(classes.work);
        });

        it('title = "Work"', () => {
          expect(wrapper.prop('title')).to.equal('Work');
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
