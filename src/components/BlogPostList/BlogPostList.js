import React, { PropTypes } from 'react';
import { List as iList } from 'immutable';
import FlipMove from 'react-flip-move';
import BlogPostListItem from '../BlogPostListItem/BlogPostListItem';
import Button from '../Button/Button';
import Loader from '../Loader/Loader';
import classes from './BlogPostList.scss';

/**
 * tiled list of blog posts
 */
const BlogPostList = (props) => (
  <div>
    <FlipMove
      className={classes.posts}
      enterAnimation="fade"
      staggerDelayBy={50}
      staggerDurationBy={50}
    >
      {props.posts.map((post) =>
        <div className={classes.post} key={post.get('slug')}>
          <BlogPostListItem post={post} />
        </div>
      )}
    </FlipMove>

    {!!props.nextPageToken && (
      <div className={classes.loadMore}>
        {props.loading
        ? <Loader />
        : <Button label="More" onClick={props.loadMore} />}
      </div>
    )}
  </div>
);

BlogPostList.propTypes = {
  loading: PropTypes.bool,
  loadMore: PropTypes.func.isRequired,
  nextPageToken: PropTypes.string,
  posts: PropTypes.instanceOf(iList)
};

export default BlogPostList;
