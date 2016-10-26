import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Container from '../Container/Container';
import ImageContainer from '../ImageContainer/ImageContainer';
import { GetInvolvedLanding } from './GetInvolvedLanding';
import classes from './GetInvolvedLanding.scss';

describe('GetInvolvedLanding', () => {
  let onScrollClick;
  let wrapper;

  beforeEach(() => {
    onScrollClick = sinon.stub();
    wrapper = shallow(<GetInvolvedLanding onScrollClick={onScrollClick} />);
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

        it('src = "/images/hands-o.jpg"', () => {
          expect(wrapper.prop('src')).to.equal('/images/hands-o.jpg');
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

      describe('nested elements', () => {
        describe('header', () => {
          let header;
          beforeEach(() => {
            header = container.childAt(0);
          });

          it('is a div', () => {
            expect(header.type()).to.equal('div');
          });

          it('has a .header class', () => {
            expect(header.prop('className')).to.equal(classes.header);
          });

          it('contains a h6', () => {
            expect(header.find('h6')).to.have.length(1);
          });
        });
      });
    });
  });
});
