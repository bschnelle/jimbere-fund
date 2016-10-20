import React, { PropTypes } from 'react';
import Container from '../Container/Container';
import classes from './Blog.scss';

/**
 * wrapper component for BlogPostList/BlogPost
 */
const Blog = (props) => (
  <Container className={classes.blog} fluid={!props.slug} title="Blog">
    {props.children}
  </Container>
);

Blog.propTypes = {
  children: PropTypes.node,
  slug: PropTypes.string
};

export default Blog;
