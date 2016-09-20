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

  it('renders a root div with a .button class otherwise', () => {
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

  it('adds props.class if defined', () => {
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
