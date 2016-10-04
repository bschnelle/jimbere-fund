import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Container from '../Container/Container';
import HomeProcess from './HomeProcess';
import classes from './HomeProcess.scss';

describe('HomeProcess', () => {
  describe('root element', () => {
    it('is of type Container', () => {
      const wrapper = shallow(<HomeProcess isSmall />);
      expect(wrapper.type()).to.equal(Container);
    });

    describe('props', () => {
      let wrapper;

      beforeEach(() => { wrapper = shallow(<HomeProcess isSmall />); });

      it('className = .section', () => {
        expect(wrapper.prop('className')).to.equal(classes.section);
      });

      it('container = true', () => {
        expect(wrapper.prop('container')).to.be.true;
      });

      it('section = true', () => {
        expect(wrapper.prop('section')).to.be.true;
      });

      it('title = "Process"', () => {
        expect(wrapper.prop('title')).to.equal('Process');
      });
    });
  });

  describe('nested elements', () => {
    it('contains a div with a .process class', () => {
      const wrapper = shallow(<HomeProcess isSmall />);
      expect(wrapper.find(`.${classes.process}`)).to.have.length(1);
    });

    describe('img has the following props', () => {
      it('alt = "Process infographic"', () => {
        const wrapper = shallow(<HomeProcess isSmall />);
        expect(wrapper.find('img').prop('alt')).to.equal('Process infographic');
      });

      describe('src', () => {
        it('process.isSmall = false, /images/process.svg', () => {
          const wrapper = shallow(<HomeProcess isSmall={false} />);
          expect(wrapper.find('img').prop('src')).to.equal('/images/process.svg');
        });

        it('process.isSmall = true, /images/process-compact.svg', () => {
          const wrapper = shallow(<HomeProcess isSmall />);
          expect(wrapper.find('img').prop('src')).to.equal('/images/process-compact.svg');
        });
      });
    });
  });
});
