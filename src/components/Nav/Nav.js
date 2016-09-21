import React, { Component } from 'react';
import MenuIconButton from '../MenuIconButton/MenuIconButton';
import NavItem from '../NavItem/NavItem';
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
    const links = [
      { label: 'Home', to: '/' },
      { label: 'Projects', to: '/projects' },
      { label: 'Blog', to: '/blog' },
      { label: 'Donate', to: '/donate' },
      { label: 'Join Us', to: '/join-us' },
      { label: 'Contact', to: '/contact' }
    ];
    let className = classes.nav;
    if (this.state.open) className += ` ${classes.open}`;

    return (
      <div className={className}>
        <div className={classes.expand} />
        <MenuIconButton
          className={classes.menuIconButton}
          onClick={this.toggleMenu}
          open={this.state.open}
        />

        <div className={classes.content}>
          <ul>
            {links.map((link) =>
              <NavItem {...link} className={classes.navItem} onClick={this.toggleMenu} />
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default Nav;
