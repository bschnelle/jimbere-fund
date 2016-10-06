import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Button from '../Button/Button';
import Container from '../Container/Container';
import HomeStory from './HomeStory';
import classes from './HomeStory.scss';

describe('HomeStory', () => {
  describe('constructor()', () => {
    it('initializes state.readMore to false', () => {
      const wrapper = shallow(<HomeStory />);
      expect(wrapper.state('readMore')).to.be.false;
    });
  });

  describe('toggleReadMore()', () => {
    it('sets state.readMore to !state.readMore', () => {
      const wrapper = shallow(<HomeStory />);
      wrapper.instance().toggleReadMore();
      expect(wrapper.state('readMore')).to.be.true;
    });
  });

  describe('render()', () => {
    describe('root element', () => {
      it('is of type Container', () => {
        const wrapper = shallow(<HomeStory />);
        expect(wrapper.type()).to.equal(Container);
      });

      describe('props', () => {
        let wrapper;

        beforeEach(() => { wrapper = shallow(<HomeStory />); });

        it('className = .section', () => {
          expect(wrapper.prop('className')).to.equal(classes.section);
        });

        it('container = true', () => {
          expect(wrapper.prop('container')).to.be.true;
        });

        it('section = true', () => {
          expect(wrapper.prop('section')).to.be.true;
        });

        it('title = "Story"', () => {
          expect(wrapper.prop('title')).to.equal('Story');
        });
      });
    });

    describe('nested elements', () => {
      it('contains a div with a .story class', () => {
        const wrapper = shallow(<HomeStory />);
        expect(wrapper.find(`.${classes.story}`)).to.have.length(1);
      });

      describe('read more section', () => {
        it('is a div with a .readMore class', () => {
          const wrapper = shallow(<HomeStory />);
          expect(wrapper.find(`.${classes.readMore}`)).to.have.length(1);
        });

        it('it has a .readMoreOpen class if state.readMore is true', () => {
          const wrapper = shallow(<HomeStory />);
          wrapper.setState({ readMore: true });
          const readMore = wrapper.find(`.${classes.readMore}`);
          expect(readMore.hasClass(classes.readMoreOpen)).to.be.true;
        });

        describe('read more button', () => {
          let button;
          let wrapper;

          beforeEach(() => {
            wrapper = shallow(<HomeStory />);
            button = wrapper.find(Button);
          });

          describe('props', () => {
            it('label = "Read more" if state.readMore is false', () => {
              expect(button.prop('label')).to.equal('Read more');
            });

            it('label = "Read less" if state.readMore is true', () => {
              wrapper.setState({ readMore: true });
              expect(wrapper.find(Button).prop('label')).to.equal('Read less');
            });

            it('onClick = toggleReadMore()', () => {
              expect(button.prop('onClick')).to.equal(wrapper.instance().toggleReadMore);
            });

            it('small = true', () => {
              expect(button.prop('small')).to.be.true;
            });
          });
        });
      });
    });
  });
});
