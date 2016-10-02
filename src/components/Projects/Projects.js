import React, { Component, PropTypes } from 'react';
import Container from '../Container/Container';
import classes from './Projects.scss';

class Projects extends Component {

  static propTypes = {
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
      <Container className={classes.projects} title="Projects">
        <div>
          <h6>Coming soon!</h6>
        </div>
      </Container>
    );
  }
}

export default Projects;
