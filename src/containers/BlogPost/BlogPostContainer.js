import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Map as iMap } from 'immutable';
import BlogPost from '../../components/BlogPost/BlogPost';

const BlogPostContainer = (props) => (
  <BlogPost post={props.post} />
);

BlogPostContainer.propTypes = {
  params: PropTypes.object.isRequired,
  post: PropTypes.instanceOf(iMap)
};

const stateToProps = (state, props) => ({
  post: state.blog.get('posts').find((post) => post.get('slug') === props.params.slug)
});

export default connect(stateToProps)(BlogPostContainer);
