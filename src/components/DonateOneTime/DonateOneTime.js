import React from 'react';
import Button from '../Button/Button';
import Container from '../Container/Container';
import classes from './DonateOneTime.scss';

/**
 * /donate route component
 */
const DonateOneTime = () => (
  <Container className={classes.donate}>
    <div className={classes.wrapper}>
      <div>
        <div className={classes.content}>
          <h4>One-Time Donation</h4>
          <p>
            By choosing to support Jimbere Fund, you are giving women
            in Congo an opportunity to thrive and hope for a better tomorrow
          </p>
          <p>
            Jimbere Fund is a registered 501(c)(3) nonprofit organization.
            All donations made to Jimbere Fund are tax deductible with the
            US Internal Revenue Service
          </p>
          <Button className={classes.buttonDesktop} label="Go Back" to="/donate" nowrap />
        </div>
      </div>
      <div id="donorbox_donation_widget" className={classes.widget}>
        <script src="https://donorbox.org/widget.js" />
        <iframe
          src="https://donorbox.org/embed/jf-one-time-donation"
          height="600px"
          width="100%"
          style={{
            maxWidth: '500px',
            minWidth: '310px',
            maxHeight: 'none !important',
          }}
          seamless="seamless"
          name="donorbox"
          frameBorder="0"
          scrolling="no"
        />
        <Button className={classes.buttonMobile} label="Go Back" to="/donate" nowrap />
      </div>
    </div>
  </Container>
);

export default DonateOneTime;
