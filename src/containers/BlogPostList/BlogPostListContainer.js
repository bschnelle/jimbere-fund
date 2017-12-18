import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { List as iList } from 'immutable';
import { getPosts } from '../../redux/modules/blog/blogModule';
import BlogPostList from '../../components/BlogPostList/BlogPostList';

export class BlogPostListContainer extends Component {

  static propTypes = {
    getPosts: PropTypes.func.isRequired,
    loading: PropTypes.bool,
    nextPageToken: PropTypes.string,
    posts: PropTypes.instanceOf(iList)
  }

  componentWillMount() {
    if (!this.props.posts.size) {
      this.props.getPosts();
    }
  }

  render() {
    const { getPosts: loadMore, loading, nextPageToken, posts } = this.props;
    return (
      <BlogPostList
        loading={loading}
        loadMore={loadMore}
        nextPageToken={nextPageToken}
        posts={posts}
      />
    );
  }
}

export const stateToProps = (state) => {
  const { blog } = state;
  return {
    loading: blog.get('loading'),
    nextPageToken: blog.get('nextPageToken'),
    posts: blog.get('posts')
  };
};

const dispatchToProps = { getPosts };

export default connect(stateToProps, dispatchToProps)(BlogPostListContainer);
