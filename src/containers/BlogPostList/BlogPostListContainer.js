import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { List as iList } from 'immutable';
import { getPosts } from '../../redux/modules/blog/blogModule';
import BlogPostList from '../../components/BlogPostList/BlogPostList';

class BlogPostListContainer extends Component {

  static propTypes = {
    getPosts: PropTypes.func.isRequired,
    loading: PropTypes.bool,
    moreAvailable: PropTypes.bool.isRequired,
    posts: PropTypes.instanceOf(iList)
  }

  componentWillMount() {
    this.props.getPosts();
  }

  render() {
    const { getPosts: loadMore, loading, moreAvailable, posts } = this.props;
    return (
      <BlogPostList
        loading={loading}
        loadMore={loadMore}
        moreAvailable={moreAvailable}
        posts={posts}
      />
    );
  }
}

const stateToProps = (state) => {
  const { blog } = state;
  return {
    loading: blog.get('loading'),
    moreAvailable: blog.get('moreAvailable'),
    posts: blog.get('posts')
  };
};

const dispatchToProps = { getPosts };

export default connect(stateToProps, dispatchToProps)(BlogPostListContainer);
