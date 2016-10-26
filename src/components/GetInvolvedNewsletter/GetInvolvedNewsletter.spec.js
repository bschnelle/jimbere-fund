import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Button from '../Button/Button';
import Container from '../Container/Container';
import ImageContainer from '../ImageContainer/ImageContainer';
import { GetInvolvedNewsletter } from './GetInvolvedNewsletter';
import classes from './GetInvolvedNewsletter.scss';

describe('GetInvolvedNewsletter', () => {
  let onScrollClick;
  let wrapper;

  beforeEach(() => {
    onScrollClick = sinon.stub();
    wrapper = shallow(<GetInvolvedNewsletter onScrollClick={onScrollClick} />);
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

        it('src = "/images/news-o.jpg"', () => {
          expect(wrapper.prop('src')).to.equal('/images/news-o.jpg');
        });
      });
    });

    describe('Container', () => {
      let container;
      beforeEach(() => { container = wrapper.find(Container); });

      describe('props', () => {
        it('id = newsletter', () => {
          expect(container.prop('id')).to.equal('newsletter');
        });

        it('className = .newsletter', () => {
          expect(container.prop('className')).to.equal(classes.newsletter);
        });

        it('section = true', () => {
          expect(container.prop('section')).to.be.true;
        });

        it('title = "Newsletter"', () => {
          expect(container.prop('title')).to.equal('Newsletter');
        });
      });

      describe('nested elements', () => {
        it('contains a paragraph', () => {
          expect(container.childAt(0).type()).to.equal('p');
        });

        describe('Button with props', () => {
          let button;
          beforeEach(() => { button = container.find(Button); });

          it('label = "Sign Up"', () => {
            expect(button.prop('label')).to.equal('Sign Up');
          });

          expect('to = "/sign-up"', () => {
            expect(button.prop('to')).to.equal('/sign-up');
          });
        });
      });
    });
  });
});
