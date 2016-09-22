import React, { PropTypes } from 'react';
import classes from './Blog.scss';

const Blog = (props) => (
  <div className={classes.blog}>
    <div className={classes.content}>
      <h1 className={classes.title}>Blog</h1>
      {props.children}
    </div>
  </div>
);

Blog.propTypes = {
  children: PropTypes.node
};

export default Blog;
