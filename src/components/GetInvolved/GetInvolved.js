import React, { PropTypes } from 'react';
import secondaryTheme from '../../containers/secondaryTheme/secondaryTheme';
import GIFundraising from '../GetInvolvedFundraising/GetInvolvedFundraising';
import GILanding from '../GetInvolvedLanding/GetInvolvedLanding';
import GINewsletter from '../GetInvolvedNewsletter/GetInvolvedNewsletter';
import GIWorkWithUs from '../GetInvolvedWorkWithUs/GetInvolvedWorkWithUs';
import * as animations from '../../utils/animations';

const scroll = (e) => {
  e.stopPropagation();
  const id = e.currentTarget.dataset.id;
  const duration = 750;
  const el = document.getElementById(id).getBoundingClientRect();
  const navYOffset = document.getElementById('jf-nav').offsetHeight;
  const startingY = window.pageYOffset;
  const distance = el.top - navYOffset;
  animations.scroll(duration, startingY, distance);
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
