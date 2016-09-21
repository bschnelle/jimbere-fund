import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import MenuIconButton from '../MenuIconButton/MenuIconButton';
import NavItem from '../NavItem/NavItem';
import Nav from './Nav';
import classes from './Nav.scss';

describe('Nav', () => {
  describe('constructor()', () => {
    it('initializes state.open to false', () => {
      const wrapper = shallow(<Nav />);
      expect(wrapper.state('open')).to.be.false;
    });
  });

  describe('toggleMenu()', () => {
    it('sets state.open to the opposite of its current value', () => {
      const wrapper = shallow(<Nav />);
      wrapper.instance().toggleMenu();
      expect(wrapper.state('open')).to.be.true;
    });
  });

  describe('render()', () => {
    it('renders a root div with a .nav class', () => {
      const wrapper = shallow(<Nav />);
      expect(wrapper.type()).to.equal('div');
      expect(wrapper.is(`.${classes.nav}`)).to.be.true;
    });

    it('adds an .open class if state.open is true', () => {
      const wrapper = shallow(<Nav />);
      wrapper.setState({ open: true });
      expect(wrapper.is(`.${classes.open}`)).to.be.true;
    });

    it('renders a div with an .expand class', () => {
      const wrapper = shallow(<Nav />);
      expect(wrapper.contains(<div className={classes.expand} />)).to.be.true;
    });

    describe('MenuIconButton props', () => {
      it('className of .menuIconButton', () => {
        const wrapper = shallow(<Nav />);
        expect(wrapper.find(MenuIconButton).prop('className')).to.equal(classes.menuIconButton);
      });

      it('onClick of toggleMenu()', () => {
        const wrapper = shallow(<Nav />);
        const onClick = wrapper.find(MenuIconButton).prop('onClick');
        expect(onClick).to.equal(wrapper.instance().toggleMenu);
      });

      it('open of state.open', () => {
        const wrapper = shallow(<Nav />);
        expect(wrapper.find(MenuIconButton).prop('open')).to.equal(wrapper.state('open'));
      });
    });

    describe('content element', () => {
      it('has a class of .content', () => {
        const wrapper = shallow(<Nav />);
        expect(wrapper.find(`.${classes.content}`)).to.have.length(1);
      });

      it('renders a 6 NavItem components', () => {
        const wrapper = shallow(<Nav />);
        expect(wrapper.find(NavItem)).to.have.length(6);
      });
    });
  });
});