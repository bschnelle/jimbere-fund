import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';
import Layout from '../../components/Layout/Layout';
import { LayoutContainer, stateToProps } from './LayoutContainer';

const theme = 'primary';

describe('LayoutContainer', () => {
  describe('render()', () => {
    it('renders a Layout component', () => {
      const wrapper = shallow(<LayoutContainer />);
      expect(wrapper.type()).to.equal(Layout);
    });

    it('passes props.theme to Layout', () => {
      const wrapper = shallow(<LayoutContainer theme={theme} />);
      expect(wrapper.prop('theme')).to.equal(theme);
    });

    it('renders its children', () => {
      const child = <div>child</div>;
      const wrapper = shallow(<LayoutContainer theme={theme}>{child}</LayoutContainer>);
      expect(wrapper.contains(child)).to.be.true;
    });
  });

  describe('stateToProps()', () => {
    it('maps state.ui.theme to props.theme', () => {
      const state = { ui: fromJS({ theme }) };
      expect(stateToProps(state).theme).to.equal(state.ui.get('theme'));
    });
  });
});
