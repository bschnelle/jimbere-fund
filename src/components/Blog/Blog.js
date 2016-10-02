import React, { Component, PropTypes } from 'react';
import Container from '../Container/Container';
import classes from './Blog.scss';

class Blog extends Component {

  static propTypes = {
    children: PropTypes.node,
    setTheme: PropTypes.func.isRequired
  }

  componentWillMount() {
    this.props.setTheme('primary');
  }

  componentWillUnmount() {
    this.props.setTheme('secondary');
  }

  render() {
    return (
      <Container className={classes.blog} fluid title="Blog">
        {this.props.children}
      </Container>
    );
  }
}

export default Blog;
