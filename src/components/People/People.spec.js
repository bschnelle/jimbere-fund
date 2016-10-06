import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Container from '../Container/Container';
import People from './People';
import classes from './People.scss';

let setTheme;
let wrapper;

describe('People', () => {
  beforeEach(() => {
    setTheme = sinon.stub();
    wrapper = shallow(<People setTheme={setTheme} />);
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
        it('className = .people', () => {
          expect(wrapper.prop('className')).to.equal(classes.people);
        });

        it('title = "People"', () => {
          expect(wrapper.prop('title')).to.equal('People');
        });
      });
    });
  });
});
