import React, { Component, PropTypes } from 'react';
import secondaryTheme from '../../containers/secondaryTheme/secondaryTheme';
import GIFundraising from '../GetInvolvedFundraising/GetInvolvedFundraising';
import GILanding from '../GetInvolvedLanding/GetInvolvedLanding';
import GINewsletter from '../GetInvolvedNewsletter/GetInvolvedNewsletter';
import GIWorkWithUs from '../GetInvolvedWorkWithUs/GetInvolvedWorkWithUs';
import * as animations from '../../utils/animations';

const scroll = (e) => {
  e.stopPropagation();
  animations.smoothScrollTo(e.currentTarget.dataset.id);
};

/**
 * /get-involved route component
 */
export class GetInvolved extends Component {

  componentDidMount() {
    if (window.location.hash) {
      animations.smoothScrollTo(window.location.hash.slice(1), 0);
    }
  }

  render() {
    return (
      <div>
        <GILanding onScrollClick={scroll} />
        <GIFundraising isSmall={this.props.isSmall} />
        <GINewsletter />
        <GIWorkWithUs />
      </div>
    );
  }
}

GetInvolved.propTypes = {
  isSmall: PropTypes.bool.isRequired
};

export default secondaryTheme(GetInvolved);
