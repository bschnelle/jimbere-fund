import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Container from './Container';
import classes from './Container.scss';

describe('Container', () => {
  it('renders its children into a div with a class of .container', () => {
    const child = <div>child</div>;
    const wrapper = shallow(<Container>{child}</Container>);
    expect(wrapper.contains(child)).to.be.true;
    expect(wrapper.is(`.${classes.container}`)).to.be.true;
  });

  it('adds props.className to the root div if present', () => {
    const className = 'someClass';
    const child = <div>child</div>;
    const wrapper = shallow(<Container className={className}>{child}</Container>);
    expect(wrapper.is(`.${className}`)).to.be.true;
  });
});
