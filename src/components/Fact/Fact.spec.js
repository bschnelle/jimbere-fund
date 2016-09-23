import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Fact from './Fact';
import classes from './Fact.scss';

const body = 'Body';
const header = 'Header';

describe('Fact', () => {
  it('renders a root div with props.className, if defined', () => {
    const className = 'myClass';
    const wrapper = shallow(<Fact body={body} className={className} header={header} />);
    expect(wrapper.type()).to.equal('div');
    expect(wrapper.is(`.${className}`)).to.be.true;
  });

  it('renders a div with a .fact class', () => {
    const wrapper = shallow(<Fact body={body} header={header} />);
    expect(wrapper.find(`.${classes.fact}`)).to.have.length(1);
  });

  it('contains an h1 with props.header and h5 with props.body', () => {
    const wrapper = shallow(<Fact body={body} header={header} />);
    const container = wrapper.find(`.${classes.fact}`);
    expect(container.contains([
      <h1>{header}</h1>,
      <h5>{body}</h5>
    ])).to.be.true;
  });
});