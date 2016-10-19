import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import GIFundraising from '../GetInvolvedFundraising/GetInvolvedFundraising';
import GILanding from '../GetInvolvedLanding/GetInvolvedLanding';
import GINewsletter from '../GetInvolvedNewsletter/GetInvolvedNewsletter';
import GIWorkWithUs from '../GetInvolvedWorkWithUs/GetInvolvedWorkWithUs';
import { GetInvolved } from './GetInvolved';
import * as animations from '../../utils/animations';

describe('GetInvolved', () => {
  let wrapper;
  const isSmall = true;

  beforeEach(() => { wrapper = shallow(<GetInvolved isSmall={isSmall} />); });

  it('renders a root div', () => {
    expect(wrapper.type()).to.equal('div');
  });

  describe('it contains', () => {
    it('GetInvolvedNewsletter', () => {
      expect(wrapper.find(GINewsletter)).to.have.length(1);
    });

    it('GetInvolvedWorkWithUs', () => {
      expect(wrapper.find(GIWorkWithUs)).to.have.length(1);
    });

    describe('GetInvolvedLanding with onScrollClick prop', () => {
      let giLanding;
      beforeEach(() => {
        giLanding = wrapper.find(GILanding);
      });

      it('of type function', () => {
        expect(typeof giLanding.prop('onScrollClick')).to.equal('function');
      });

      describe('when called', () => {
        let event;
        beforeEach(() => {
          event = {
            currentTarget: {
              dataset: {
                id: '4'
              }
            },
            stopPropagation: sinon.stub()
          };
          sinon.stub(animations, 'smoothScrollTo');
          giLanding.prop('onScrollClick')(event);
        });

        afterEach(() => animations.smoothScrollTo.restore());

        it('calls event.stopPropagation', () => {
          expect(event.stopPropagation).to.have.been.calledOnce;
        });

        it('calls animations.smoothScrollTo with event.currentTarget.dataset.id', () => {
          const { id } = event.currentTarget.dataset;
          expect(animations.smoothScrollTo).to.have.been.calledWith(id);
        });
      });
    });

    describe('GetInvolvedFundraising with props', () => {
      it('isSmall set to props.isSmall', () => {
        expect(wrapper.find(GIFundraising).prop('isSmall')).to.equal(isSmall);
      });
    });
  });
});
