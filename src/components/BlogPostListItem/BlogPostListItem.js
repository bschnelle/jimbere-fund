import React, { PropTypes } from 'react';
import { Map as iMap } from 'immutable';
import { Link } from 'react-router';
import moment from 'moment';
import classes from './BlogPostListItem.scss';

const BlogPostListItem = (props) => {
  const {
    author: { name },
    date,
    featured_image: featuredImage,
    slug,
    title
  } = props.post.toJS();
  const linkStyle = { background: `url(${featuredImage})` };
  const to = `/blog/${slug}`;
  let className = classes.post;
  if (props.className) className += ` ${props.className}`;

  return (
    <Link className={className} style={linkStyle} to={to}>
      <div className={classes.content}>
        <h4 className={classes.title}>{title}</h4>
        <div className={classes.footer}>
          <span>{name}</span>
          <span>{moment(new Date(date)).format('D MMM, YY')}</span>
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
