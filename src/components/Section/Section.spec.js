import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Section from './Section';
import classes from './Section.scss';

describe('Section', () => {
  it('renders its children into a div with a class of .section', () => {
    const child = <div>child</div>;
    const wrapper = shallow(<Section>{child}</Section>);
    expect(wrapper.contains(child)).to.be.true;
    expect(wrapper.is(`.${classes.section}`)).to.be.true;
  });

  it('adds props.className to the root div if present', () => {
    const className = 'someClass';
    const child = <div>child</div>;
    const wrapper = shallow(<Section className={className}>{child}</Section>);
    expect(wrapper.is(`.${className}`)).to.be.true;
  });
});
