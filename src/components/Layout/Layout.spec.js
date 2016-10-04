import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Footer from '../Footer/Footer';
import Layout from './Layout';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import classes from './Layout.scss';

const child = <div>child</div>;
const theme = 'primary';

describe('Layout', () => {
  it('renders a root div with a .layout class', () => {
    const wrapper = shallow(<Layout theme={theme}>{child}</Layout>);
    expect(wrapper.type()).to.equal('div');
    expect(wrapper.is(`.${classes.layout}`)).to.be.true;
  });

  it('renders a Nav', () => {
    const wrapper = shallow(<Layout theme={theme}>{child}</Layout>);
    expect(wrapper.contains(<Nav />)).to.be.true;
  });

  it('renders its children', () => {
    const wrapper = shallow(<Layout theme={theme}>{child}</Layout>);
    expect(wrapper.contains(child)).to.be.true;
  });

  it('renders a Footer', () => {
    const wrapper = shallow(<Layout theme={theme}>{child}</Layout>);
    expect(wrapper.contains(<Footer />)).to.be.true;
  });

  describe('Logo has the following props', () => {
    it('className = .logo', () => {
      const wrapper = shallow(<Layout theme={theme}>{child}</Layout>);
      const logo = wrapper.find(Logo);
      expect(logo.prop('className')).to.equal(classes.logo);
    });

    it('link = true', () => {
      const wrapper = shallow(<Layout theme={theme}>{child}</Layout>);
      const logo = wrapper.find(Logo);
      expect(logo.prop('link')).to.be.true;
    });

    describe('secondary =', () => {
      it('false if props.theme != secondary', () => {
        const wrapper = shallow(<Layout theme={theme}>{child}</Layout>);
        const logo = wrapper.find(Logo);
        expect(logo.prop('secondary')).to.be.false;
      });

      it('true if props.theme = secondary', () => {
        const secondaryTheme = 'secondary';
        const wrapper = shallow(<Layout theme={secondaryTheme}>{child}</Layout>);
        const logo = wrapper.find(Logo);
        expect(logo.prop('secondary')).to.be.true;
      });
    });
  });
});
