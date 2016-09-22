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

    {props.moreAvailable && (
      <div className={classes.loadMore}>
      {props.loading
      ? <h3>LOADING</h3>
      : <button onClick={props.loadMore}>Click</button>}
      </div>
    )}
  </div>
);

BlogPostList.propTypes = {
  loading: PropTypes.bool,
  loadMore: PropTypes.func.isRequired,
  moreAvailable: PropTypes.bool.isRequired,
  posts: PropTypes.instanceOf(iList)
};

export default BlogPostList;
