import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import WorkPriorityPanes from './WorkPriorityPanes';
import classes from './WorkPriorityPanes.scss';

describe('WorkPriorityPanes', () => {
  let panes;
  let wrapper;

  beforeEach(() => {
    panes = [
      { title: 'title 1', image: '/images/1.jpg', imageAlt: '1', content: <div>1</div> },
      { title: 'title 2', image: '/images/2.jpg', imageAlt: '2', content: <div>2</div> },
      { title: 'title 3', image: '/images/3.jpg', imageAlt: '3', content: <div>3</div> }
    ];
    wrapper = shallow(<WorkPriorityPanes panes={panes} />);
  });

  describe('closePane()', () => {
    it('sets state.active to null', () => {
      wrapper.setState({ active: 'something' });
      wrapper.instance().closePane();
      expect(wrapper.state('active')).to.equal(null);
    });
  });

  describe('togglePane()', () => {
    let event;
    beforeEach(() => {
      event = {
        currentTarget: {
          dataset: {
            name: '2'
          }
        },
        stopPropagation: sinon.stub()
      };
    });

    it('calls event.stopPropagation()', () => {
      wrapper.instance().togglePane(event);
      expect(event.stopPropagation).to.have.been.calledOnce;
    });

    describe('props.compact = false', () => {
      it('clicking a pane sets state.active to that pane', () => {
        wrapper.instance().togglePane(event);
        expect(wrapper.state('active')).to.equal(event.currentTarget.dataset.name);
      });
    });

    describe('props.compact = true', () => {
      beforeEach(() => wrapper.setProps({ compact: true }));

      describe('no panes are open, one is clicked', () => {
        it('sets state.active to that pane', () => {
          wrapper.instance().togglePane(event);
          expect(wrapper.state('active')).to.equal(event.currentTarget.dataset.name);
        });
      });

      describe('pane is open, then clicked', () => {
        it('sets state.active to null', () => {
          wrapper.setState({ active: event.currentTarget.dataset.name });
          wrapper.instance().togglePane(event);
          expect(wrapper.state('active')).to.equal(null);
        });
      });

      describe('pane is open, then a different one is clicked', () => {
        it('sets state.active to the clicked pane', () => {
          wrapper.setState({ active: '1' });
          wrapper.instance().togglePane(event);
          expect(wrapper.state('active')).to.equal(event.currentTarget.dataset.name);
        });
      });
    });
  });

  describe('render()', () => {
    it('renders a root div with a .panesWrapper class', () => {
      expect(wrapper.type()).to.equal('div');
      expect(wrapper.is(`.${classes.panesWrapper}`)).to.be.true;
    });
  });
});
