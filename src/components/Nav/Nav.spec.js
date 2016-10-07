import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Logo from '../Logo/Logo';
import MenuIconButton from '../MenuIconButton/MenuIconButton';
import NavItem from '../NavItem/NavItem';
import Nav from './Nav';
import classes from './Nav.scss';

describe('Nav', () => {
  describe('constructor()', () => {
    it('initializes state.addBackground to false', () => {
      const wrapper = shallow(<Nav />);
      expect(wrapper.state('addBackground')).to.be.false;
    });

    it('initializes state.open to false', () => {
      const wrapper = shallow(<Nav />);
      expect(wrapper.state('open')).to.be.false;
    });

    it('sets this.links to an array of 7 objects containing "label" and "to" attributes', () => {
      const wrapper = shallow(<Nav />);
      const { links } = wrapper.instance();
      expect(links).to.have.length(7);
      links.forEach((link) => {
        expect(link.label).to.exist;
        expect(link.to).to.exist;
      });
    });
  });

  describe('componentDidMount()', () => {
    it('calls window.addEventListener with "scroll" and addBackgroundOnScroll()', (done) => {
      sinon.stub(window, 'addEventListener');
      const instance = shallow(<Nav />).instance();
      instance.componentDidMount();
      expect(window.addEventListener).to.have.been.calledWith(
        'scroll',
        instance.addBackgroundOnScroll
      );
      window.addEventListener.restore();
      done();
    });
  });

  describe('componentWillUnmount()', () => {
    it('calls window.removeEventListener with "scroll" and addBackgroundOnScroll()', (done) => {
      sinon.stub(window, 'removeEventListener');
      const instance = shallow(<Nav />).instance();
      instance.componentWillUnmount();
      expect(window.removeEventListener).to.have.been.calledWith(
        'scroll',
        instance.addBackgroundOnScroll
      );
      window.removeEventListener.restore();
      done();
    });

    it('sets document.body.style.overflow to an empty string', () => {
      const instance = shallow(<Nav />).instance();
      document.body.style.overflow = 'hidden';
      instance.componentWillUnmount();
      expect(document.body.style.overflow).to.equal('');
    });
  });

  describe('addBackgroundOnScroll()', () => {
    // TODO
  });

  describe('toggleMenu()', () => {
    it('sets state.open to the opposite of its current value', () => {
      const wrapper = shallow(<Nav />);
      wrapper.instance().toggleMenu();
      expect(wrapper.state('open')).to.be.true;
    });

    it('sets document.body.style.overflow to "hidden" when state.open is true', () => {
      const instance = shallow(<Nav />).instance();
      instance.toggleMenu();
      expect(document.body.style.overflow).to.equal('hidden');
    });

    it('sets document.body.style.overflow to an empty string when state.open is false', () => {
      const wrapper = shallow(<Nav />);
      wrapper.setState({ open: true });
      wrapper.instance().toggleMenu();
      expect(document.body.style.overflow).to.equal('');
    });
  });

  describe('render()', () => {
    it('renders a root div with a .nav class', () => {
      const wrapper = shallow(<Nav />);
      expect(wrapper.type()).to.equal('div');
      expect(wrapper.is(`.${classes.nav}`)).to.be.true;
    });

    it('renders a div with an .expand class', () => {
      const wrapper = shallow(<Nav />);
      expect(wrapper.find(`.${classes.expand}`).type()).to.equal('div');
    });

    describe('logo', () => {
      it('renders a div with a .logoWrapper class', () => {
        const wrapper = shallow(<Nav />);
        expect(wrapper.find(`.${classes.logoWrapper}`).type()).to.equal('div');
      });

      describe('Logo has the following props', () => {
        it('className = .logo', () => {
          const wrapper = shallow(<Nav />);
          const logo = wrapper.find(Logo);
          expect(logo.prop('className')).to.equal(classes.logo);
        });

        it('link = true', () => {
          const wrapper = shallow(<Nav />);
          const logo = wrapper.find(Logo);
          expect(logo.prop('link')).to.be.true;
        });

        describe('secondary =', () => {
          it('true if state.addBackground/open = false and props.secondary = true', () => {
            const wrapper = shallow(<Nav secondary />);
            const logo = wrapper.find(Logo);
            expect(logo.prop('secondary')).to.be.true;
          });

          describe('false if', () => {
            it('state.addBackground = true', () => {
              const wrapper = shallow(<Nav />);
              wrapper.setState({ addBackground: true });
              const logo = wrapper.find(Logo);
              expect(logo.prop('secondary')).to.be.false;
            });

            it('state.open = true', () => {
              const wrapper = shallow(<Nav />);
              wrapper.setState({ open: true });
              const logo = wrapper.find(Logo);
              expect(logo.prop('secondary')).to.be.false;
            });

            it('props.secondary = false', () => {
              const wrapper = shallow(<Nav secondary={false} />);
              const logo = wrapper.find(Logo);
              expect(logo.prop('secondary')).to.be.false;
            });
          });
        });
      });
    });

    describe('state.addBackground set to true', () => {
      it('adds a .expandBackground class to expand div', () => {
        const wrapper = shallow(<Nav />);
        wrapper.setState({ addBackground: true });
        expect(wrapper.find(`.${classes.expandBackground}`)).to.have.length(1);
      });
    });

    describe('state.open set to true', () => {
      it('adds an .open class if state.open is true', () => {
        const wrapper = shallow(<Nav />);
        wrapper.setState({ open: true });
        expect(wrapper.is(`.${classes.open}`)).to.be.true;
      });
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

      it('renders 7 NavItem components', () => {
        const wrapper = shallow(<Nav />);
        expect(wrapper.find(NavItem)).to.have.length(7);
      });
    });
  });
});
