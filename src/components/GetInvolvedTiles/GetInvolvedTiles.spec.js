import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import GetInvolvedTiles from './GetInvolvedTiles';
import classes from './GetInvolvedTiles.scss';

describe('GetInvolvedwrapper', () => {
  let onTileClick;
  let wrapper;

  describe('root element', () => {
    beforeEach(() => {
      onTileClick = sinon.stub();
      wrapper = shallow(<GetInvolvedTiles onTileClick={onTileClick} />);
    });

    it('is a div', () => {
      expect(wrapper.type()).to.equal('div');
    });

    it('has a .tiles class', () => {
      expect(wrapper.prop('className')).to.equal(classes.tiles);
    });

    describe('fundraising tile', () => {
      let fundraising;
      beforeEach(() => {
        fundraising = wrapper.childAt(0);
      });

      it('has a data-id prop set to "fundraising"', () => {
        expect(fundraising.prop('data-id')).to.equal('fundraising');
      });

      /* it('has an onClick prop set to props.onScrollClick', () => {
        expect(fundraising.prop('onClick')).to.equal(onScrollClick);
      }); */

      it('contains two h5 elements', () => {
        expect(fundraising.find('h5')).to.have.length(2);
      });
    });

    describe('newsletter tile', () => {
      let fundraising;
      beforeEach(() => {
        fundraising = wrapper.childAt(1);
      });

      it('has a data-id prop set to "newsletter"', () => {
        expect(fundraising.prop('data-id')).to.equal('newsletter');
      });

      /* it('has an onClick prop set to props.onScrollClick', () => {
        expect(fundraising.prop('onClick')).to.equal(onScrollClick);
      }); */

      it('contains two h5 elements', () => {
        expect(fundraising.find('h5')).to.have.length(2);
      });
    });

    describe('work with us tile', () => {
      let fundraising;
      beforeEach(() => {
        fundraising = wrapper.childAt(2);
      });

      it('has a data-id prop set to "work-with-us"', () => {
        expect(fundraising.prop('data-id')).to.equal('work-with-us');
      });

      /* it('has an onClick prop set to props.onScrollClick', () => {
        expect(fundraising.prop('onClick')).to.equal(onScrollClick);
      }); */

      it('contains two h5 elements', () => {
        expect(fundraising.find('h5')).to.have.length(2);
      });
    });
  });
});
