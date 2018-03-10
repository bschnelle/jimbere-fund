import React, { Component } from 'react';
import ImageContainer from '../ImageContainer/ImageContainer';
import Container from '../Container/Container';
import secondaryTheme from '../../containers/secondaryTheme/secondaryTheme';
import classes from './Donate.scss';

/**
 * /donate route component
 */
export class Donate extends Component {

  componentDidMount() {
    /* initialize Razoo donation widget */
    window.r_params = {
      title: 'Jimbere Fund, Inc.',
      short_description: '',
      long_description: '',
      color: '#2f8435',
      errors: false,
      image: 'false',
      donation_options: {
        25: '',
        50: '',
        100: '',
        200: ''
      }
    };
    /* is this line necessary? (via Razoo docs) */
    window.r_protocol = document.location.protocol === 'https:' ? 'https://' : 'http://';
    window.r_identifier = 'Jimbere-Fund';
    /* inject script */
    const script = document.createElement('script');
    script.id = 'razoo_widget_loader_script';
    script.src = 'https://www.razoo.com/javascripts/widget_loader.js';
    document.body.appendChild(script);
  }

  render() {
    return (
      <div>
        <ImageContainer className={classes.imageContainer} src="/images/donate-o.jpg">
          <Container className={classes.donate} title="Donate">
            <h6>Your donation is an investment in a real, long-term change</h6>
            <p>
              Begin the ripple effect: help us mobilize, prepare, and position women
              entrepreneurs to have a positive, permanent effect on their communities and Congo.
            </p>
          </Container>
        </ImageContainer>

        <div className={classes.widget}>
          <div>
            <div className={classes.content}>
              <h4>Thank You</h4>
              <p>
                By choosing to support Jimbere Fund you're giving poverty
                stricken communities in Congo hope for a better tomorrow.
              </p>
              <p>
                Jimbere Fund is a registered 501(c)(3) nonprofit organization.
                All donations made to Jimbere Fund are tax deductible with the
                US Internal Revenue Service
              </p>
            </div>
          </div>
          <div id="razoo_donation_widget">
            <span>
              <a href="https://www.razoo.com/story/Jimbere-Fund">Donate to Jimbere Fund, Inc.</a> at <a href="https://www.razoo.com/">Razoo</a>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default secondaryTheme(Donate);
