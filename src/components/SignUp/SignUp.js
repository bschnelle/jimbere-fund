import React, { Component } from 'react';
import classes from './SignUp.scss';

class SignUp extends Component {

  componentDidMount() {
    const script = document.createElement('script');
    script.src = 'https://s3-eu-west-1.amazonaws.com/share.typeform.com/embed.js';
    document.body.appendChild(script);
  }

  render() {
    const formUrl = 'https://forms.typeform.io/to/iTzQ6tQwsW';
    return (
      <div className={classes.signUp}>
        <iframe id="typeform-full" frameBorder={0} src={formUrl} />
      </div>
    );
  }
}

export default SignUp;
