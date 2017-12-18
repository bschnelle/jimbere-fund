import React, { Component, PropTypes } from 'react';
import FlipMove from 'react-flip-move';
import classNames from 'classnames';
import { List as iList } from 'immutable';
import { Link } from 'react-router';
import moment from 'moment';
import Button from '../Button/Button';
import Loader from '../Loader/Loader';
import ImageContainer from '../ImageContainer/ImageContainer';
import classes from './HomeLanding.scss';

/**
 * landing section of root route
 */
class HomeLanding extends Component {
  constructor(props) {
    super(props);
    this.state = { index: 0 };
  }

  setIndex = index => this.setState({ index })

  backward = () => {
    const maxIndex = this.props.posts.size - 1;
    const nextIndex = this.state.index + 1;
    this.setIndex(nextIndex > maxIndex ? 0 : nextIndex);
  }

  forward = () => {
    const maxIndex = this.props.posts.size - 1;
    const prevIndex = this.state.index - 1;
    this.setIndex(prevIndex > -1 ? prevIndex : maxIndex);
  }

  render() {
    const { isMedium, loading, posts } = this.props;
    const { index } = this.state;
    const post = !posts.size ? null : posts.get(index);
    const blogUrl = post && `/blog/${post.get('slug')}`;

    return (
      <ImageContainer className={classes.splash} src="/images/children-o.jpg">
        <div className={classes.landing}>
          <div className={classes.slogan}>
            <div className={classes.message}>
              <div>Connecting communities</div>
              <div>beyond the reach of the road</div>
              <div>to opportunities.</div>
            </div>
            <div>
              <Button label="Join Us" to="/get-involved" nowrap />
              {isMedium && <Button label="Donate" to="/donate" light nowrap />}
            </div>
          </div>
        </div>
        <div className={classes.recent}>
          <span className={classes.header}>Recent Posts</span>
          {loading || !post ? <Loader alt /> : (
            <div className={classes.wrapper}>
              <FlipMove className={classes.post} enterAnimation="fade" leaveAnimation={false}>
                <Link key={this.state.index} to={blogUrl}>
                  <div
                    className={classes.image}
                    style={{ backgroundImage: `url(${post.get('image')})` }}
                  />
                  <div className={classes.recentContent}>
                    <h5 className={classes.title}>
                      {post.get('title').length > 60
                        ? `${post.get('title').slice(0, 60)}…`
                        : post.get('title')}
                    </h5>
                    <div className={classes.subtitle}>
                      <div>{post.getIn(['author', 'displayName'])}</div>
                      <div>
                        {moment(new Date(post.get('published'))).format('MMMM D, YYYY')}
                      </div>
                    </div>
                    <span className={classes.readMore} to={blogUrl}>
                      Read more.
                    </span>
                  </div>
                </Link>
              </FlipMove>
              <div className={classes.controls}>
                <a onClick={this.forward}>
                  <img src="/images/arrow-left.png" alt="arrow left" />
                </a>
                {posts.map((_, i) => (
                  <a
                    key={i}
                    className={classNames(classes.dot, i === this.state.index && classes.active)}
                    onClick={() => this.setIndex(i)}
                  />
                ))}
                <a onClick={this.backward}>
                  <img src="/images/arrow-right.png" alt="arrow right" />
                </a>
              </div>
            </div>
          )}

        </div>
      </ImageContainer>
    );
  }
}

HomeLanding.propTypes = {
  onScrollClick: PropTypes.func.isRequired,
  isMedium: PropTypes.bool.isRequired,
  loading: PropTypes.bool,
  posts: PropTypes.instanceOf(iList),
};

export default HomeLanding;
