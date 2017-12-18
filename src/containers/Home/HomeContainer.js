import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { List as iList } from 'immutable';
import { getPosts } from '../../redux/modules/blog/blogModule';
import HomeComp from '../../components/Home/Home';

export class HomeContainer extends Component {
  componentWillMount() {
    if (!this.props.posts.size) {
      this.props.getPosts();
    }
  }

  render() {
    const { isLarge, isMedium, isSmall, loading, posts } = this.props;
    return (
      <HomeComp
        isLarge={isLarge}
        isMedium={isMedium}
        isSmall={isSmall}
        loading={loading}
        posts={posts}
      />
    );
  }
}

HomeContainer.propTypes = {
  getPosts: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  posts: PropTypes.instanceOf(iList),
  isLarge: PropTypes.bool.isRequired,
  isMedium: PropTypes.bool.isRequired,
  isSmall: PropTypes.bool.isRequired
};

export const stateToProps = ({ blog, browser }) => ({
  isLarge: browser.greaterThan.large,
  isMedium: browser.greaterThan.medium,
  isSmall: browser.lessThan.medium,
  loading: blog.get('loading'),
  posts: blog.get('posts').slice(0, 3)
});

const dispatchToProps = { getPosts };

export default connect(stateToProps, dispatchToProps)(HomeContainer);
