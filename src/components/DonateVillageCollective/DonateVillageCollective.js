import React, { Component } from 'react';
import Button from '../Button/Button';
import Container from '../Container/Container';
import classes from './DonateVillageCollective.scss';

/**
 * /donate route component
 */
class DonateVillageCollective extends Component {
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
              <h4>The Village Collective</h4>
              <p>
                The Village Collective is a special group of our core, committed
                monthly donors who sustain our work. When you join our Village
                Collective monthly giving program, you will become part of
                Jimbere Fund family and walk with us as we train and finance
                15,000 women entrepreneurs in Eastern Congo by 2025. Your
                commitment is to give a $25 per month or more over a year.
              </p>
              <p>
                All members of The Village Collective will:
                <ul>
                  <li>
                    Receive an autographed book of How Dare the Sun Rise by
                    our co-founder Sandra Uwiringiyimana
                  </li>
                  <li>
                    Have the opportunity to join us for a trip in Congo to
                    see our work firsthand (interested members will shoulder
                    their expenses)
                  </li>
                  <li>
                    Have the opportunity get involved in our work up-close, and
                    access to exclusive content and updates from our co-founders
                    and staff
                  </li>
                  <li>
                    Enjoy special recognition in our Annual Report
                  </li>
                </ul>
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
            <iframe
              src="https://donorbox.org/embed/jimberefund"
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
            <Button className={classes.buttonMobile} label="Go Back" to="/donate" nowrap />
          </div>
        </div>
      </Container>
    );
  }
}

export default DonateVillageCollective;
