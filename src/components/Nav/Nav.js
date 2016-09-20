import React, { Component } from 'react';
import MenuIconButton from '../MenuIconButton/MenuIconButton';
import classes from './Nav.scss';

class Layout extends Component {

  constructor(props) {
    super(props);
    this.state = { open: false };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({ open: !this.state.open });
  }

  render() {
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
            <li>Home</li>
            <li>Donate</li>
            <li>Projects</li>
            <li>Blog</li>
            <li>Join Us</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Layout;
