import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Fact from '../Fact/Fact';
import Container from '../Container/Container';
import AboutFacts from './AboutFacts';
import classes from './AboutFacts.scss';

const id = 'id';

describe('AboutFacts', () => {
  describe('root element', () => {
    it('is of type Container', () => {
      const wrapper = shallow(<AboutFacts id={id} />);
      expect(wrapper.type()).to.equal(Container);
    });

    it('is passed props.id as a prop', () => {
      const wrapper = shallow(<AboutFacts id={id} />);
      expect(wrapper.prop('id')).to.equal(id);
    });

    it('is passed "Facts" as a title', () => {
      const wrapper = shallow(<AboutFacts id={id} />);
      expect(wrapper.prop('title')).to.equal('Facts');
    });
  });

  describe('facts container', () => {
    it('is of type div', () => {
      const wrapper = shallow(<AboutFacts id={id} />);
      expect(wrapper.find('div')).to.have.length(1);
    });

    it('has a .facts class', () => {
      const wrapper = shallow(<AboutFacts id={id} />);
      expect(wrapper.find('div').is(`.${classes.facts}`)).to.be.true;
    });

    it('renders 8 Fact components', () => {
      const wrapper = shallow(<AboutFacts id={id} />);
      expect(wrapper.find(Fact)).to.have.length(8);
    });

    it('renders 4 Fact components if props.isSmall is true', () => {
      const wrapper = shallow(<AboutFacts id={id} isSmall />);
      expect(wrapper.find(Fact)).to.have.length(4);
    });

    it('Fact component has a .fact class', () => {
      const wrapper = shallow(<AboutFacts id={id} />);
      const facts = wrapper.find(Fact);
      expect(facts.first().is(`.${classes.fact}`)).to.be.true;
    });
  });
});
