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
    date,
    image,
    slug,
    title
  } = props.post.toJS();
  const linkStyle = { backgroundImage: `url(${image})` };
  const to = `/blog/${slug}`;
  let className = classes.post;
  if (props.className) className += ` ${props.className}`;

  return (
    <Link className={className} style={linkStyle} to={to}>
      <div className={classes.content}>
        <h5 className={classes.title}>{title}</h5>
        <div className={classes.footer}>
          <span>{author}</span>
          <span>{moment(new Date(date)).format('MMM D, YYYY')}</span>
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
