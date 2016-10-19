import React, { PropTypes } from 'react';
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

export const GetInvolved = (props) => (
  <div>
    <GILanding onScrollClick={scroll} />
    <GIFundraising isSmall={props.isSmall} />
    <GINewsletter />
    <GIWorkWithUs />
  </div>
);

GetInvolved.propTypes = {
  isSmall: PropTypes.bool.isRequired
};

export default secondaryTheme(GetInvolved);
