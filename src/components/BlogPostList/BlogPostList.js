import React, { PropTypes } from 'react';
import { List as iList } from 'immutable';
import FlipMove from 'react-flip-move';
import Button from '../Button/Button';
import BlogPostListItem from '../BlogPostListItem/BlogPostListItem';
import Loader from '../Loader/Loader';
import classes from './BlogPostList.scss';

const BlogPostList = (props) => (props.loading
? <Loader />
: (
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

    {props.moreAvailable && (
      <div className={classes.loadMore}>
        {props.loading
        ? <Loader />
        : <Button label="More" onClick={props.loadMore} />}
      </div>
    )}
  </div>
));

BlogPostList.propTypes = {
  loading: PropTypes.bool,
  loadMore: PropTypes.func.isRequired,
  moreAvailable: PropTypes.bool.isRequired,
  posts: PropTypes.instanceOf(iList)
};

export default BlogPostList;
