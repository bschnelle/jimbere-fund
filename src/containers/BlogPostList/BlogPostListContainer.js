import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { List as iList } from 'immutable';
import { getPosts } from '../../redux/modules/blog/blogModule';
import BlogPostList from '../../components/BlogPostList/BlogPostList';

class BlogPostListContainer extends Component {

  static propTypes = {
    getPosts: PropTypes.func.isRequired,
    posts: PropTypes.instanceOf(iList)
  }

  componentWillMount() {
    this.props.getPosts();
  }

  render() {
    return <BlogPostList posts={this.props.posts} />;
  }
}

const stateToProps = (state) => ({ posts: state.blog.get('posts') });
const dispatchToProps = { getPosts };

export default connect(stateToProps, dispatchToProps)(BlogPostListContainer);
