import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Button from '../Button/Button';
import Container from '../Container/Container';
import { Donate } from './Donate';
import ImageContainer from '../ImageContainer/ImageContainer';
import classes from './Donate.scss';

describe('Donate', () => {
  it('renders a root ImageContainer with a .imageContainer class', () => {
    const wrapper = shallow(<Donate />);
    expect(wrapper.type()).to.equal(ImageContainer);
    expect(wrapper.is(`.${classes.imageContainer}`)).to.be.true;
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

      describe('Button with the following props', () => {
        let button;
        beforeEach(() => { button = container.find(Button); });

        it('label = "Give Now"', () => {
          expect(button.prop('label')).to.equal('Give Now');
        });

        it('href = "https://www.razoo.com/us/story/Jimbere-Fund"', () => {
          expect(button.prop('href')).to.equal('https://www.razoo.com/us/story/Jimbere-Fund');
        });
      });
    });
  });
});
