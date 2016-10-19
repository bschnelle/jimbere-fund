import React, { PropTypes } from 'react';
import Button from '../Button/Button';
import Container from '../Container/Container';
import classes from './GetInvolvedFundraising.scss';

export const GetInvolvedFundraising = (props) => (
  <Container id="gi-fundraising" section title="Fundraising">
    <div className={classes.fundraising}>
      <p>
        Ready to join the hard work of rebuilding communities in Congo?
        Our fundraisers help expand opportunities to those who need help
        most; one community at time.
      </p>
      {!props.isSmall && <img src="/images/fundraising.svg" alt="Fundraising infographic" />}
      <div>
        {props.isSmall
        ? <img src="/images/fundraising_creative.svg" alt="Fundraising step 1" />
        : <h4>Step 1</h4>}
        <p>
          Choose an event or activity: throw a party, run
          a marathon, or organize a meeting.  Be creative!
        </p>
      </div>
      <div>
        {props.isSmall
        ? <img src="/images/fundraising_goal.svg" alt="Fundraising step 2" />
        : <h4>Step 2</h4>}
        <p>
          Set an amount as your fundraising goal.
        </p>
      </div>
      <div>
        {props.isSmall
        ? <img src="/images/fundraising_share.svg" alt="Fundraising step 3" />
        : <h4>Step 3</h4>}
        <p>
          Create an online fundraising page below, add information,
          and share with family and friends via social media/email.
        </p>
      </div>
      <div>
        <Button href="https://www.razoo.com/story/new?subject=Jimbere-Fund" label="Start Fundraising" />
      </div>
    </div>
  </Container>
);

GetInvolvedFundraising.propTypes = {
  isSmall: PropTypes.bool.isRequired
};

export default GetInvolvedFundraising;
