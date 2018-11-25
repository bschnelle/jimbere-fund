import React, { Component } from 'react';
import Button from '../Button/Button';
import Container from '../Container/Container';
import classes from './DonateOneTime.scss';

/**
 * /donate route component
 */
class DonateOneTime extends Component {
  componentDidMount() {
    /* inject script */
    const script = document.createElement('script');
    script.id = 'donorbox_widget_loader_script';
    script.src = 'https://donorbox.org/widget.js';
    script.setAttribute('paypalExpress', 'true');
    document.body.appendChild(script);
  }

  render() {
    return (
      <Container className={classes.donate}>
        <div className={classes.wrapper}>
          <div>
            <div className={classes.content}>
              <h4 className={classes.titleDesktop}>One-Time Donation</h4>
              <p>
                By choosing to support Jimbere Fund, you are giving women
                in Congo an opportunity to thrive and hope for a better tomorrow
              </p>
              <p>
                Jimbere Fund is a registered 501(c)(3) nonprofit organization.
                All donations made to Jimbere Fund are tax deductible with the
                US Internal Revenue Service
              </p>
              <Button label="Go Back" to="/donate" nowrap />
            </div>
          </div>
          <div id="donorbox_donation_widget" className={classes.widget}>
            <h4 className={classes.titleMobile}>One-Time Donation</h4>
            <iframe
              src="https://donorbox.org/embed/jf-one-time-donation"
              height="685px"
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
              allowPaymentRequest
            />
          </div>
        </div>
      </Container>
    );
  }
}

export default DonateOneTime;
