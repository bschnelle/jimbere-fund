import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Button from '../Button/Button';
import Container from '../Container/Container';
import { GetInvolvedFundraising } from './GetInvolvedFundraising';
import classes from './GetInvolvedFundraising.scss';

describe('GetInvolvedFundraising', () => {
  let wrapper;
  beforeEach(() => { wrapper = shallow(<GetInvolvedFundraising />); });

  describe('renders a root Container', () => {
    let container;
    beforeEach(() => {
      container = wrapper.find(Container);
    });

    describe('with props', () => {
      it('id = "gi-fundraising"', () => {
        expect(container.prop('id')).to.equal('gi-fundraising');
      });

      it('section = true', () => {
        expect(container.prop('section')).to.be.true;
      });

      it('title = "Fundraising"', () => {
        expect(container.prop('title')).to.equal('Fundraising');
      });
    });

    describe('with nested components', () => {
      let fundraising;
      beforeEach(() => {
        fundraising = wrapper.find(`.${classes.fundraising}`);
      });

      it('wrapped in a div with a .fundraising class', () => {
        expect(fundraising.type()).to.equal('div');
      });

      it('of four paragraphs', () => {
        expect(fundraising.find('p')).to.have.length(4);
      });

      describe('of one Button with props of', () => {
        let button;
        beforeEach(() => {
          button = fundraising.find(Button);
        });

        it('href = "https://www.razoo.com/story/new?subject=Jimbere-Fund"', () => {
          expect(button.prop('href')).to.equal('https://www.razoo.com/story/new?subject=Jimbere-Fund');
        });

        it('label = "Start Fundraising"', () => {
          expect(button.prop('label')).to.equal('Start Fundraising');
        });
      });

      describe('when props.isSmall is false', () => {
        it('contains three h4 elements', () => {
          expect(fundraising.find('h4')).to.have.length(3);
        });

        it('contains one img element', () => {
          expect(fundraising.find('img')).to.have.length(1);
        });
      });

      describe('when props.isSmall is true', () => {
        it('contains three img elements', () => {
          wrapper.setProps({ isSmall: true });
          expect(wrapper.find(`.${classes.fundraising}`).find('img')).to.have.length(3);
        });
      });
    });
  });
});
