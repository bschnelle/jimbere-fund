import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import classes from './Blog.scss';

const Blog = (props) => (
  <div className={classes.blog}>
    <div className={classes.content}>
      <h1><Link className={classes.title} to="/blog">Blog</Link></h1>
      {props.children}
    </div>
  </div>
);

Blog.propTypes = {
  children: PropTypes.node
};

export default Blog;
