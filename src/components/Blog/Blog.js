import React, { PropTypes } from 'react';
import classes from './Blog.scss';

const Blog = (props) => (
  <div className={classes.blog}>
    <div className={classes.splashTitle}>Blog</div>
    <div className={classes.content}>{props.children}</div>
  </div>
);

Blog.propTypes = {
  children: PropTypes.node
};

export default Blog;
