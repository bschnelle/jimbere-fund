import React, { Component } from 'react';
import Logo from '../Logo/Logo';
import MenuIconButton from '../MenuIconButton/MenuIconButton';
import NavItem from '../NavItem/NavItem';
import Social from '../Social/Social';
import classes from './Nav.scss';

class Nav extends Component {

  constructor(props) {
    super(props);
    this.state = { open: false };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({ open: !this.state.open });
  }

  render() {
    const { state: { open }, toggleMenu } = this;
    const links = [
      { label: 'Home', to: '/' },
      { label: 'Projects', to: '/projects' },
      { label: 'Blog', to: '/blog' },
      { label: 'Donate', to: '/donate' },
      { label: 'Join Us', to: '/join-us' },
      { label: 'Contact', to: '/contact' }
    ];
    let className = classes.nav;
    let style;
    if (open) {
      className += ` ${classes.open}`;
      const scale = (Math.round(window.innerWidth * 2.4) / 45);
      const transform = `rotate(45deg) scale(${scale})`;
      style = { transform };
    }

    return (
      <div className={className}>
        <div className={classes.expand} style={style} />
        <MenuIconButton
          className={classes.menuIconButton}
          onClick={toggleMenu}
          open={open}
        />

        <div className={classes.content}>
          <Logo className={classes.logo} />
          <ul>
            {links.map((link) =>
              <NavItem {...link} className={classes.navItem} key={link.to} onClick={toggleMenu} />
            )}
          </ul>
          <Social className={classes.social} />
        </div>
      </div>
    );
  }
}

export default Nav;
