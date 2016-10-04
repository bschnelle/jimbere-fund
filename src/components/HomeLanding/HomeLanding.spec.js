import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Button from '../Button/Button';
import ImageContainer from '../ImageContainer/ImageContainer';
import HomeLanding from './HomeLanding';
import ScrollArrow from '../ScrollArrow/ScrollArrow';
import classes from './HomeLanding.scss';

let onScrollClick;

describe('HomeLanding', () => {
  beforeEach(() => { onScrollClick = sinon.stub(); });

  describe('root element', () => {
    it('is of type ImageContainer', () => {
      const wrapper = shallow(<HomeLanding onScrollClick={onScrollClick} />);
      expect(wrapper.type()).to.equal(ImageContainer);
    });

    it('has a .splash class', () => {
      const wrapper = shallow(<HomeLanding onScrollClick={onScrollClick} />);
      expect(wrapper.is(`.${classes.splash}`)).to.be.true;
    });

    it('has a "src" prop equal to /images/children-o.jpg', () => {
      const wrapper = shallow(<HomeLanding onScrollClick={onScrollClick} />);
      expect(wrapper.prop('src')).to.equal('/images/children-o.jpg');
    });
  });

  describe('nested elements', () => {
    it('5 spans in a div with a .slogan class', () => {
      const wrapper = shallow(<HomeLanding onScrollClick={onScrollClick} />);
      const slogan = wrapper.find(`.${classes.slogan}`);
      expect(slogan.find('span')).to.have.length(5);
    });

    describe('Button in a div with an .actions class', () => {
      let button;

      beforeEach(() => {
        const wrapper = shallow(<HomeLanding onScrollClick={onScrollClick} />);
        const actions = wrapper.find(`.${classes.actions}`);
        button = actions.find(Button);
      });

      it('is of type Button', () => {
        expect(button.type()).to.equal(Button);
      });

      describe('props', () => {
        it('label = "Join Us"', () => {
          expect(button.prop('label')).to.equal('Join Us');
        });

        it('to = "/join-us"', () => {
          expect(button.prop('to')).to.equal('/join-us');
        });
      });
    });

    describe('ScrollArrow', () => {
      let scrollArrow;

      beforeEach(() => {
        const wrapper = shallow(<HomeLanding onScrollClick={onScrollClick} />);
        scrollArrow = wrapper.find(ScrollArrow);
      });

      it('is of type ScrollArrow', () => {
        expect(scrollArrow.type()).to.equal(ScrollArrow);
      });

      describe('props', () => {
        it('className = .scrollToFacts', () => {
          expect(scrollArrow.prop('className')).to.equal(classes.scrollToFacts);
        });

        it('label = "facts"', () => {
          expect(scrollArrow.prop('label')).to.equal('facts');
        });

        it('onClick = props.onScrollClick', () => {
          expect(scrollArrow.prop('onClick')).to.equal(onScrollClick);
        });
      });
    });
  });
});
