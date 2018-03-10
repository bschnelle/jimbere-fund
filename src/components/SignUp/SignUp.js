import React, { Component } from 'react';
import classes from './SignUp.scss';

/**
 * /sign-up route component
 * renders a typeform.io form
 */
class SignUp extends Component {

  componentDidMount() {
    /* eslint-disable */
    let qs,
      js,
      q,
      s,
      d = document,
      gi = d.getElementById,
      ce = d.createElement,
      gt = d.getElementsByTagName,
      id = 'typef_orm',
      b = 'https://embed.typeform.com/';
    if (!gi.call(d, id)) {
      js = ce.call(d, 'script');
      js.id = id;
      js.src = `${b}embed.js`;
      q = gt.call(d, 'script')[0];
      q.parentNode.insertBefore(js, q);
    }
    /* eslint-enable */
  }

  render() {
    // const formUrl = 'https://forms.typeform.io/to/Vm8snKvsEu';
    return (
      <div className={classes.signUp}>
        <div
          className="typeform-widget"
          data-url="https://jimberefund.typeform.com/to/ryZ55E"
          data-transparency="50"
          data-hide-headers
          data-hide-footer
          style={{ width: '100%' }}
        />
      </div>
    );
  }
}

export default SignUp;
