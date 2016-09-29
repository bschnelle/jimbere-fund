import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import classes from './Blog.scss';

class Blog extends Component {

  static propTypes = {
    children: PropTypes.node,
    setTheme: PropTypes.func.isRequired
  }

  componentWillMount() {
    this.props.setTheme('primary');
  }

  componentWillUnmount() {
    this.props.setTheme('secondary');
  }

  render() {
    return (
      <div className={classes.blog}>
        <div className={classes.content}>
          <h1><Link className={classes.title} to="/blog">Blog</Link></h1>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Blog;
