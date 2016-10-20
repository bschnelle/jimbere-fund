import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Container from '../Container/Container';
import { Donate } from './Donate';
import ImageContainer from '../ImageContainer/ImageContainer';
import classes from './Donate.scss';

describe('Donate', () => {
  describe('componentDidMount()', () => {
    beforeEach(() => {
      shallow(<Donate />).instance().componentDidMount();
    });

    it('sets window.r_params to an object', () => {
      expect(typeof window.r_params).to.equal('object');
    });

    it('sets window.r_protocol based on document.location.protocol', () => {
      expect(/https?:\/\//.test(window.r_protocol)).to.be.true;
    });

    it('sets window.r_identifier to "Jimbere-Fund"', () => {
      expect(window.r_identifier).to.equal('Jimbere-Fund');
    });

    // TODO more tests
  });

  describe('render()', () => {
    it('renders a root div', () => {
      const wrapper = shallow(<Donate />);
      expect(wrapper.type()).to.equal('div');
    });

    describe('ImageContainer props', () => {
      let imageContainer;

      beforeEach(() => {
        const wrapper = shallow(<Donate />);
        imageContainer = wrapper.find(ImageContainer);
      });

      it('className = .imageContainer', () => {
        expect(imageContainer.prop('className')).to.equal(classes.imageContainer);
      });

      it('src = "/images/school-o.jpg"', () => {
        expect(imageContainer.prop('src')).to.equal('/images/school-o.jpg');
      });
    });

    describe('Container', () => {
      let container;

      beforeEach(() => {
        const wrapper = shallow(<Donate />);
        container = wrapper.find(Container);
      });

      it('has a class of .donate', () => {
        expect(container.is(`.${classes.donate}`)).to.be.true;
      });

      it('has a title prop equal to "Donate"', () => {
        expect(container.prop('title')).to.equal('Donate');
      });

      describe('nested elements/components', () => {
        it('contains an h6', () => {
          expect(container.find('h6')).to.have.length(1);
        });

        it('contains a p', () => {
          expect(container.find('p')).to.have.length(1);
        });
      });
    });
  });
});
