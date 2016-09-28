import React, { PropTypes } from 'react';
import { Map as iMap } from 'immutable';
import classes from './BlogPost.scss';

const BlogPost = (props) => (
  <div className="blogPostWrapper">
    <div>
      <h4>{props.post.get('title')}</h4>
      <div
        dangerouslySetInnerHTML={{ __html: props.post.get('content') }}
      />
    </div>
  </div>
);

BlogPost.propTypes = {
  post: PropTypes.instanceOf(iMap)
};

export default BlogPost;
