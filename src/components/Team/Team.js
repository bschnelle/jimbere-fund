import React, { Component, PropTypes } from 'react';
import classes from './Team.scss';

class Team extends Component {

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
      <div className={classes.team}>
        <div>
          <div>
            <h1>Team</h1>
            <h6>Coming soon!</h6>
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
