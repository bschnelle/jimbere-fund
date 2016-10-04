import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Container from '../Container/Container';
import ImageContainer from '../ImageContainer/ImageContainer';
import HomePurpose from './HomePurpose';
import classes from './HomePurpose.scss';

describe('HomePurpose', () => {
  let wrapper;

  beforeEach(() => { wrapper = shallow(<HomePurpose />); });

  describe('root element', () => {
    it('is of type ImageContainer', () => {
      expect(wrapper.type()).to.equal(ImageContainer);
    });
  });

  describe('Container', () => {
    let container;
    beforeEach(() => { container = wrapper.find(Container); });

    describe('props', () => {
      it('className = .section', () => {
        expect(container.prop('className')).to.equal(classes.section);
      });

      it('container = true', () => {
        expect(container.prop('container')).to.be.true;
      });

      it('section = true', () => {
        expect(container.prop('section')).to.be.true;
      });

      it('title = "Purpose"', () => {
        expect(container.prop('title')).to.equal('Purpose');
      });
    });
  });

  describe('content div', () => {
    let content;
    beforeEach(() => { content = wrapper.find(`.${classes.content}`); });

    it('is of type div', () => {
      expect(content.type()).to.equal('div');
    });

    it('contains 3 p elements', () => {
      expect(content.find('p')).to.have.length(3);
    });

    it('contains 2 h4 elements', () => {
      expect(content.find('h4')).to.have.length(2);
    });
  });
});
