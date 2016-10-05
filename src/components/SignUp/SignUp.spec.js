import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import SignUp from './SignUp';
import classes from './SignUp.scss';

describe('SignUp', () => {
  describe('componentDidMount()', () => {
    after(() => {
      document.createElement.restore();
      document.body.appendChild.restore();
    });

    it('creates a script tag with typeform url and appends to body', () => {
      const script = {};
      sinon.stub(document, 'createElement').withArgs('script').returns(script);
      sinon.stub(document.body, 'appendChild');

      const wrapper = shallow(<SignUp />);
      wrapper.instance().componentDidMount();
      expect(script.src).to.equal('https://s3-eu-west-1.amazonaws.com/share.typeform.com/embed.js');
      expect(document.body.appendChild).to.have.been.calledWith(script);
    });
  });

  describe('render()', () => {
    it('renders a root div with a .signUp class', () => {
      const wrapper = shallow(<SignUp />);
      expect(wrapper.type()).to.equal('div');
      expect(wrapper.is(`.${classes.signUp}`)).to.be.true;
    });

    it('renders a nested iframe with an id of "typeform-full"', () => {
      const wrapper = shallow(<SignUp />);
      const el = wrapper.find('#typeform-full');
      expect(el.type()).to.equal('iframe');
    });
  });
});
