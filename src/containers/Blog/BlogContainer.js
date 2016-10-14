import React, { PropTypes } from 'react';
import Blog from '../../components/Blog/Blog';

const BlogContainer = (props) => <Blog slug={props.params.slug}>{props.children}</Blog>;

BlogContainer.propTypes = {
  children: PropTypes.node,
  params: PropTypes.object.isRequired
};

export default BlogContainer;
