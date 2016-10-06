import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Container from '../Container/Container';
import Work from './Work';
import classes from './Work.scss';

let wrapper;

describe('Work', () => {
  beforeEach(() => {
    wrapper = shallow(<Work />);
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
