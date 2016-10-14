import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Map as iMap } from 'immutable';
import { getPosts } from '../../redux/modules/blog/blogModule';
import BlogPost from '../../components/BlogPost/BlogPost';

export class BlogPostContainer extends Component {

  static propTypes = {
    getPosts: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    params: PropTypes.object.isRequired,
    post: PropTypes.instanceOf(iMap)
  }

  componentWillMount() {
    // TODO update to grab single post after creating blog service
    if (!this.props.post) {
      this.props.getPosts();
    }
  }

  render() {
    const { loading, post } = this.props;

    return (
      <BlogPost loading={loading} post={post} />
    );
  }
}

export const stateToProps = (state, props) => ({
  loading: state.blog.get('loading'),
  post: state.blog.get('posts').find((post) => post.get('slug') === props.params.slug)
});

export default connect(stateToProps, { getPosts })(BlogPostContainer);
