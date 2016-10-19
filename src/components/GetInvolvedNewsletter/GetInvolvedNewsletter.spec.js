/* import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Container from '../Container/Container';
import ImageContainer from '../ImageContainer/ImageContainer';
import { GetInvolved } from './GetInvolved';
import classes from './GetInvolved.scss';

describe('GetInvolved', () => {
  let wrapper;
  beforeEach(() => { wrapper = shallow(<GetInvolved />); });

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

        it('title = "Get Involved"', () => {
          expect(container.prop('title')).to.equal('Get Involved');
        });
      });
    });

    describe('nested elements', () => {
      it('contains an h6', () => {
        expect(wrapper.find('h6')).to.have.length(1);
      });

      it('contains a div with a .positions class', () => {
        expect(wrapper.find(`.${classes.positions}`)).to.have.length(1);
      });
    });
  });
});
*/
