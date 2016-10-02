import React, { Component, PropTypes } from 'react';
import Container from '../Container/Container';
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
      <Container className={classes.team} title="Team">
        <div>
          <div>
            <h6>Coming soon!</h6>
          </div>
        </div>
      </Container>
    );
  }
}

export default Team;
