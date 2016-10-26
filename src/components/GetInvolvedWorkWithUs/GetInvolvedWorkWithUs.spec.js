import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
// import Button from '../Button/Button';
import Container from '../Container/Container';
import { GetInvolvedWorkWithUs } from './GetInvolvedWorkWithUs';
// import classes from './GetInvolvedWorkWithUs.scss';

describe('GetInvolvedWorkWithUs', () => {
  let onScrollClick;
  let wrapper;

  beforeEach(() => {
    onScrollClick = sinon.stub();
    wrapper = shallow(<GetInvolvedWorkWithUs onScrollClick={onScrollClick} />);
  });

  describe('render()', () => {
    describe('Container', () => {
      let container;
      beforeEach(() => { container = wrapper.find(Container); });

      describe('props', () => {
        it('id = work-with-us', () => {
          expect(container.prop('id')).to.equal('work-with-us');
        });

        it('section = true', () => {
          expect(container.prop('section')).to.be.true;
        });

        it('title = "Work With Us"', () => {
          expect(container.prop('title')).to.equal('Work With Us');
        });
      });
    });
  });
});
