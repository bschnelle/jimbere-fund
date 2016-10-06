import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Container from '../Container/Container';
import People from './People';
import classes from './People.scss';

let wrapper;

describe('People', () => {
  beforeEach(() => {
    wrapper = shallow(<People />);
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
