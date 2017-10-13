import React, { Component, PropTypes } from 'react';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import MenuIconButton from '../MenuIconButton/MenuIconButton';
import NavItem from '../NavItem/NavItem';
import Social from '../Social/Social';
import classes from './Nav.scss';

/**
 * nav bar/menu
 */
class Nav extends Component {

  static propTypes = {
    isSmall: PropTypes.bool.isRequired,
    secondary: PropTypes.bool.isRequired
  }

  constructor(props) {
    super(props);
    this.state = { addBackground: false, open: false };
    this.addBackgroundOnScroll = this.addBackgroundOnScroll.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.links = [
      { label: 'Home', to: '/' },
      { label: 'About', to: '/about' },
      { label: 'Work', to: '/work' },
      { label: 'People', to: '/people' },
      { label: 'Get Involved', to: '/get-involved' },
      { label: 'Donate', to: '/donate' },
      { label: 'Blog', to: '/blog' },
      { label: 'Contact', to: '/contact' }
    ];
  }

  componentDidMount() {
    window.addEventListener('scroll', this.addBackgroundOnScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.addBackgroundOnScroll);
    document.body.style.overflow = '';
  }

  addBackgroundOnScroll() {
    const scrollTop = window.pageYOffset
      || document.documentElement.scrollTop
      || document.body.scrollTop
      || 0;
    const { addBackground } = this.state;

    if (scrollTop > 15 && !addBackground) {
      this.setState({ addBackground: true });
    } else if (!scrollTop && addBackground) {
      this.setState({ addBackground: false });
    }
  }

  toggleMenu() {
    const open = !this.state.open;
    this.setState({ open });
    /* prevent background scroll when menu is open */
    document.body.style.overflow = open ? 'hidden' : '';
  }

  render() {
    const { links, state: { addBackground, open }, toggleMenu } = this;
    const secondary = !addBackground && !open && this.props.secondary;
    let className = classes.nav;
    let expandClassName = classes.expand;
    if (open) className += ` ${classes.open}`;
    if (addBackground) expandClassName += ` ${classes.expandBackground}`;

    return (
      <div id="jf-nav" className={className}>
        <div className={expandClassName}><div /></div>

        <div className={classes.logoWrapper}>
          <Logo className={classes.logo} link secondary={secondary} />
        </div>

        {!this.props.isSmall && (
          <Button
            className={classes.donate}
            flat
            label="Donate"
            secondary={secondary}
            small
            to="/donate"
          />
        )}

        <MenuIconButton
          className={classes.menuIconButton}
          onClick={toggleMenu}
          open={open}
        />

        <div className={classes.content}>
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
