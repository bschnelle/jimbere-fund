import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Footer from '../Footer/Footer';
import Layout from './Layout';
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
    expect(wrapper.find(Nav)).to.have.length(1);
  });

  it('renders its children', () => {
    const wrapper = shallow(<Layout theme={theme}>{child}</Layout>);
    expect(wrapper.contains(child)).to.be.true;
  });

  it('renders a Footer', () => {
    const wrapper = shallow(<Layout theme={theme}>{child}</Layout>);
    expect(wrapper.contains(<Footer />)).to.be.true;
  });

  it('if props.simple is true it does not render a Footer', () => {
    const wrapper = shallow(<Layout simple theme={theme}>{child}</Layout>);
    expect(wrapper.contains(<Footer />)).to.be.false;
  });
});
