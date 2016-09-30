import React, { Component, PropTypes } from 'react';
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
      <div className={classes.projects}>
        <div>
          <h1>Projects</h1>
          <h6>Coming soon!</h6>
        </div>
      </div>
    );
  }
}

export default Projects;
