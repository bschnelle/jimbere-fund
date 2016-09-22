import React, { PropTypes } from 'react';
import { List as iList } from 'immutable';
import FlipMove from 'react-flip-move';
import Button from '../Button/Button';
import BlogPostListItem from '../BlogPostListItem/BlogPostListItem';
import classes from './BlogPostList.scss';

const BlogPostList = (props) => (
  <div>
    {props.posts && props.posts.size && (
      <FlipMove
        className={classes.posts}
        enterAnimation="fade"
        staggerDelayBy={50}
        staggerDurationBy={50}
      >
        {props.posts.map((post) =>
          <div className={classes.post} key={post.get('ID')}>
            <BlogPostListItem post={post} />
          </div>
        )}
      </FlipMove>
    )}

    {props.moreAvailable && (
      <div className={classes.loadMore}>
        <Button label="More" onClick={props.loadMore} />
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
