import React, { PropTypes } from 'react';
import { List as iList } from 'immutable';
import BlogPostListItem from '../BlogPostListItem/BlogPostListItem';
import classes from './BlogPostList.scss';

const BlogPostList = (props) => (
  <div className={classes.posts}>
    {props.posts.map((post) =>
      <div className={classes.post} key={post.get('ID')}>
        <BlogPostListItem post={post} />
      </div>
    )}
  </div>
);

BlogPostList.propTypes = {
  posts: PropTypes.instanceOf(iList)
};

export default BlogPostList;
