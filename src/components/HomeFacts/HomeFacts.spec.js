import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Fact from '../Fact/Fact';
import Section from '../Section/Section';
import HomeFacts from './HomeFacts';
import classes from './HomeFacts.scss';

const id = 'id';

describe('HomeFacts', () => {
  describe('root element', () => {
    it('is of type Section', () => {
      const wrapper = shallow(<HomeFacts id={id} />);
      expect(wrapper.type()).to.equal(Section);
    });

    it('has a .section class', () => {
      const wrapper = shallow(<HomeFacts id={id} />);
      expect(wrapper.is(`.${classes.section}`)).to.be.true;
    });

    it('is passed props.id as a prop', () => {
      const wrapper = shallow(<HomeFacts id={id} />);
      expect(wrapper.prop('id')).to.equal(id);
    });
  });

  describe('nested elements', () => {
    it('renders an h1 with "Facts"', () => {
      const wrapper = shallow(<HomeFacts id={id} />);
      expect(wrapper.contains(<h1>Facts</h1>)).to.be.true;
    });

    describe('facts container', () => {
      it('is of type div', () => {
        const wrapper = shallow(<HomeFacts id={id} />);
        expect(wrapper.find('div')).to.have.length(1);
      });

      it('has a .facts class', () => {
        const wrapper = shallow(<HomeFacts id={id} />);
        expect(wrapper.find('div').is(`.${classes.facts}`)).to.be.true;
      });

      it('renders six Fact components', () => {
        const wrapper = shallow(<HomeFacts id={id} />);
        expect(wrapper.find(Fact)).to.have.length(6);
      });

      it('Fact component has a .fact class', () => {
        const wrapper = shallow(<HomeFacts id={id} />);
        const facts = wrapper.find(Fact);
        expect(facts.first().is(`.${classes.fact}`)).to.be.true;
      });
    });
  });
});
