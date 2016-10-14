import React, { PropTypes } from 'react';
import { Map as iMap } from 'immutable';
import moment from 'moment';
import Loader from '../Loader/Loader';
import classes from './BlogPost.scss';

const BlogPost = (props) => {
  const { loading, post } = props;

  if (loading) {
    return <Loader />;
  } else if (!post) {
    return <h6 className={classes.notFound}>Hmmm. We can't seem to find that post.</h6>;
  }

  return (
    <div>
      <div className={classes.header}>
        <h4>{post.get('title')}</h4>
        <span>{post.get('author')}</span>
        <span>|</span>
        <span>{moment(new Date(post.get('date'))).format('MMMM D, YYYY')}</span>
      </div>
      <div
        className={classes['markdown-body']}
        dangerouslySetInnerHTML={{ __html: post.get('content') }}
      />
    </div>
  );
};

BlogPost.propTypes = {
  loading: PropTypes.bool.isRequired,
  post: PropTypes.instanceOf(iMap)
};

export default BlogPost;
