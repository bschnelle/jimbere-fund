import React, { PropTypes } from 'react';
import { Map as iMap } from 'immutable';
import { Link } from 'react-router';
import moment from 'moment';
import classes from './BlogPostListItem.scss';

/**
 * individual tile for BlogPostList
 */
const BlogPostListItem = (props) => {
  const {
    author,
    image,
    published,
    slug,
    title
  } = props.post.toJS();
  const imageStyle = { backgroundImage: `url(${image})` };
  const to = `/blog/${slug}`;
  let className = classes.post;
  if (props.className) className += ` ${props.className}`;

  return (
    <Link className={className} to={to}>
      <div className={classes.image} style={imageStyle} />
      <div className={classes.content}>
        <h5 className={classes.title}>{title}</h5>
        <div className={classes.footer}>
          <span>{author.displayName}</span>
          <span>{moment(new Date(published)).format('MMM D, YYYY')}</span>
        </div>
      </div>
    </Link>
  );
};

BlogPostListItem.propTypes = {
  className: PropTypes.string,
  post: PropTypes.instanceOf(iMap).isRequired
};

export default BlogPostListItem;
