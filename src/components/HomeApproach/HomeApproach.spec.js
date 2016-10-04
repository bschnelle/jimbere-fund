import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import FlipMove from 'react-flip-move';
import Container from '../Container/Container';
import HomeApproach from './HomeApproach';
import HomeApproachIcon from '../HomeApproachIcon/HomeApproachIcon';
import classes from './HomeApproach.scss';

describe('HomeApproach', () => {
  describe('constructor()', () => {
    it('initializes state.activeContainer to "Collaborative"', () => {
      const wrapper = shallow(<HomeApproach isSmall />);
      expect(wrapper.state('activeContainer')).to.equal('Collaborative');
    });
  });

  describe('updateContainer()', () => {
    it('sets state.activeContainer to event.currentTarget.dataset.title', () => {
      const event = { currentTarget: { dataset: { title: 'Holistic' } } };
      const wrapper = shallow(<HomeApproach isSmall />);
      wrapper.instance().updateContainer(event);
      expect(wrapper.state('activeContainer')).to.equal(event.currentTarget.dataset.title);
    });
  });

  describe('render()', () => {
    describe('root Container has the following props', () => {
      it('is of type Container', () => {
        const wrapper = shallow(<HomeApproach isSmall />);
        expect(wrapper.type()).to.equal(Container);
      });

      it('className = .section', () => {
        const wrapper = shallow(<HomeApproach isSmall />);
        expect(wrapper.prop('className')).to.equal(classes.section);
      });

      it('container = true', () => {
        const wrapper = shallow(<HomeApproach isSmall />);
        expect(wrapper.prop('container')).to.be.true;
      });

      it('section = true', () => {
        const wrapper = shallow(<HomeApproach isSmall />);
        expect(wrapper.prop('section')).to.be.true;
      });

      it('title = "Approach"', () => {
        const wrapper = shallow(<HomeApproach isSmall />);
        expect(wrapper.prop('title')).to.equal('Approach');
      });
    });

    describe('nested elements', () => {
      it('contains a div with a .content class', () => {
        const wrapper = shallow(<HomeApproach isSmall />);
        expect(wrapper.find(`.${classes.content}`).type()).to.equal('div');
      });

      it('contains a div with a .sections class', () => {
        const wrapper = shallow(<HomeApproach isSmall />);
        expect(wrapper.find(`.${classes.sections}`).type()).to.equal('div');
      });

      describe('FlipMove component', () => {
        let flipMove;

        beforeEach(() => {
          const wrapper = shallow(<HomeApproach isSmall />);
          flipMove = wrapper.find(FlipMove);
        });

        it('contains a div with a .detail class', () => {
          expect(flipMove.find(`.${classes.detail}`)).to.have.length(1);
        });

        describe('has the following props', () => {
          it('duration = 200', () => {
            expect(flipMove.prop('duration')).to.equal(200);
          });

          it('enterAnimation is an object', () => {
            expect(typeof flipMove.prop('enterAnimation')).to.equal('object');
          });

          it('leaveAnimation is an object', () => {
            expect(typeof flipMove.prop('leaveAnimation')).to.equal('object');
          });
        });
      });

      describe('props.isSmall is false', () => {
        let wrapper;

        beforeEach(() => {
          wrapper = shallow(<HomeApproach isSmall={false} />);
        });

        it('renders 3 h4 elements', () => {
          expect(wrapper.find('h4')).to.have.length(3);
        });
      });

      describe('props.isSmall is true', () => {
        let wrapper;

        beforeEach(() => {
          wrapper = shallow(<HomeApproach isSmall />);
        });

        it('renders 3 HomeApproachIcons', () => {
          expect(wrapper.find(HomeApproachIcon)).to.have.length(3);
        });
      });
    });
  });
});
