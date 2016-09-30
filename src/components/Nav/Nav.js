import React, { Component } from 'react';
import Logo from '../Logo/Logo';
import MenuIconButton from '../MenuIconButton/MenuIconButton';
import NavItem from '../NavItem/NavItem';
import Social from '../Social/Social';
import classes from './Nav.scss';

/**
 * Navigation button and container
 */
class Nav extends Component {

  constructor(props) {
    super(props);
    this.state = { open: false };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.links = [
      { label: 'Home', to: '/' },
      { label: 'Projects', to: '/projects' },
      { label: 'Team', to: '/team' },
      { label: 'Join Us', to: '/join-us' },
      { label: 'Donate', to: '/donate' },
      { label: 'Blog', to: '/blog' },
      { label: 'Contact', to: '/contact' }
    ];
  }

  toggleMenu() {
    this.setState({ open: !this.state.open });
  }

  render() {
    const { links, state: { open }, toggleMenu } = this;
    let className = classes.nav;
    let expandStyle;

    /* scale rotating animation and animate in logo/links/social */
    if (open) {
      className += ` ${classes.open}`;
      const base = Math.max(window.innerWidth, window.innerHeight);
      const scale = Math.ceil((base * 2.6) / 45);
      const transform = `rotate(45deg) scale(${scale})`;
      expandStyle = { transform };
    }

    return (
      <div className={className}>
        <div className={classes.expand} style={expandStyle} />

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
