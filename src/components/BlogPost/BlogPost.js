import React, { PropTypes } from 'react';
import { Map as iMap } from 'immutable';
import classes from './BlogPost.scss';

const BlogPost = (props) => (!props.post
? <h6 className={classes.notFound}>Hmm. We can't seem to find that post.</h6>
: (
  <div>
    <h4>{props.post.get('title')}</h4>
    <div dangerouslySetInnerHTML={{ __html: props.post.get('content') }} />
  </div>
));

BlogPost.propTypes = {
  post: PropTypes.instanceOf(iMap)
};

export default BlogPost;
