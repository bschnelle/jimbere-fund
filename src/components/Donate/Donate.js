import React, { Component } from 'react';
import ImageContainer from '../ImageContainer/ImageContainer';
import Container from '../Container/Container';
import secondaryTheme from '../../containers/secondaryTheme/secondaryTheme';
import classes from './Donate.scss';

class Donate extends Component {

  componentDidMount() {
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
    /* is this line necessary? */
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
      <ImageContainer className={classes.imageContainer} src="/images/school-o.jpg">
        <Container className={classes.donate} title="Donate">
          <div>
            <div>
              <div>
                <h6>Congo is among the most destitute countries on Earth.</h6>
                <p>You can help change that.</p>
              </div>
            </div>
            <div>
              <div id="razoo_donation_widget">
                <span>
                  <a href="https://www.razoo.com/story/Jimbere-Fund">Donate to Jimbere Fund, Inc.</a> at <a href="https://www.razoo.com/">Razoo</a>
                </span>
              </div>
            </div>
          </div>
        </Container>
      </ImageContainer>
    );
  }
}

export default secondaryTheme(Donate);
