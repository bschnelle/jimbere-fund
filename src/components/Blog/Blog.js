import React, { PropTypes } from 'react';
import { List as iList } from 'immutable';
import BlogPostListItem from '../BlogPostListItem/BlogPostListItem';
import classes from './Blog.scss';

const Blog = (props) => (
  <div className={classes.blog}>
    <div className={classes.splashTitle}>Blog</div>
    <div className={classes.posts}>
      {props.posts.map((post) =>
        <div className={classes.post} key={post.get('ID')}><BlogPostListItem post={post} /></div>
      )}
    </div>
  </div>
);

Blog.propTypes = {
  posts: PropTypes.instanceOf(iList)
};

export default Blog;
