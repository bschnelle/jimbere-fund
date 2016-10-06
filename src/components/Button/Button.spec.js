import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { Link } from 'react-router';
import Button from './Button';
import classes from './Button.scss';

describe('Button', () => {
  it('renders a Link with a .button class if props.to is defined', () => {
    const label = 'label';
    const to = '/join-us';
    const wrapper = shallow(<Button label={label} to={to} />);
    expect(wrapper.type()).to.equal(Link);
    expect(wrapper.is(`.${classes.button}`)).to.be.true;
  });

  it('renders an anchor with a .button class if props.href is defined', () => {
    const label = 'label';
    const href = 'www.site.com';
    const wrapper = shallow(<Button label={label} href={href} />);
    expect(wrapper.type()).to.equal('a');
    expect(wrapper.is(`.${classes.button}`)).to.be.true;
  });

  it('renders a div with a .button class otherwise', () => {
    const label = 'label';
    const onClick = sinon.stub();
    const wrapper = shallow(<Button label={label} onClick={onClick} />);
    expect(wrapper.type()).to.equal('div');
    expect(wrapper.is(`.${classes.button}`)).to.be.true;
  });

  it('renders props.label into div', () => {
    const label = 'label';
    const onClick = sinon.stub();
    const wrapper = shallow(<Button label={label} onClick={onClick} />);
    expect(wrapper.contains(label)).to.be.true;
  });

  it('if props.accent is defined, adds .accent class', () => {
    const label = 'label';
    const onClick = sinon.stub();
    const wrapper = shallow(<Button accent label={label} onClick={onClick} />);
    expect(wrapper.is(`.${classes.accent}`)).to.be.true;
  });

  it('if props.flat is defined, adds .flat class', () => {
    const label = 'label';
    const onClick = sinon.stub();
    const wrapper = shallow(<Button flat label={label} onClick={onClick} />);
    expect(wrapper.is(`.${classes.flat}`)).to.be.true;
  });

  it('if props.secondary is defined, adds .secondary class', () => {
    const label = 'label';
    const onClick = sinon.stub();
    const wrapper = shallow(<Button label={label} onClick={onClick} secondary />);
    expect(wrapper.is(`.${classes.secondary}`)).to.be.true;
  });

  it('if props.small is defined, adds .small class', () => {
    const label = 'label';
    const onClick = sinon.stub();
    const wrapper = shallow(<Button label={label} onClick={onClick} small />);
    expect(wrapper.is(`.${classes.small}`)).to.be.true;
  });

  it('adds props.className if defined', () => {
    const className = 'myClass';
    const label = 'label';
    const onClick = sinon.stub();
    const wrapper = shallow(<Button className={className} label={label} onClick={onClick} />);
    expect(wrapper.is(`.${className}`)).to.be.true;
  });

  it('clicking fires props.onClick', () => {
    const label = 'label';
    const onClick = sinon.stub();
    const wrapper = shallow(<Button label={label} onClick={onClick} />);
    wrapper.simulate('click');
    expect(onClick).to.have.been.calledOnce;
  });
});
