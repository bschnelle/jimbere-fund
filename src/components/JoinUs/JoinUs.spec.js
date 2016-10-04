import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Container from '../Container/Container';
import ImageContainer from '../ImageContainer/ImageContainer';
import JoinUs from './JoinUs';
import classes from './JoinUs.scss';

describe('JoinUs', () => {
  let wrapper;
  beforeEach(() => { wrapper = shallow(<JoinUs />); });

  describe('onCardClick()', () => {
    it('sets state.activeCard to argument', () => {
      const activeCard = 'Story';
      wrapper.instance().onCardClick(activeCard);
      expect(wrapper.state('activeCard')).to.equal(activeCard);
    });
  });

  describe('closeCard()', () => {
    it('calls event.stopPropagation', () => {
      const event = { stopPropagation: sinon.stub() };
      wrapper.instance().closeCard(event);
      expect(event.stopPropagation).to.have.been.calledOnce;
    });

    it('sets state.activeCard to null', () => {
      const event = { stopPropagation: sinon.stub() };
      wrapper.instance().closeCard(event);
      expect(wrapper.state('activeCard')).to.be.null;
    });
  });

  describe('render()', () => {
    describe('root element', () => {
      it('is of type ImageContainer', () => {
        expect(wrapper.type()).to.equal(ImageContainer);
      });

      describe('props', () => {
        it('className = .imageContainer', () => {
          expect(wrapper.prop('className')).to.equal(classes.imageContainer);
        });

        it('src = "/images/new_york-o.jpg"', () => {
          expect(wrapper.prop('src')).to.equal('/images/new_york-o.jpg');
        });
      });
    });

    describe('Container', () => {
      let container;
      beforeEach(() => { container = wrapper.find(Container); });

      describe('props', () => {
        it('className = .container', () => {
          expect(container.prop('className')).to.equal(classes.container);
        });

        it('fluid = true', () => {
          expect(container.prop('fluid')).to.be.true;
        });

        it('title = "Join Us"', () => {
          expect(container.prop('title')).to.equal('Join Us');
        });
      });
    });

    describe('nested elements', () => {
      it('contains an h6', () => {
        expect(wrapper.find('h6')).to.have.length(1);
      });

      it('contains a div with a .story class', () => {
        expect(wrapper.find(`.${classes.story}`)).to.have.length(1);
      });

      it('contains a div with a .positions class', () => {
        expect(wrapper.find(`.${classes.positions}`)).to.have.length(1);
      });
    });
  });
});
