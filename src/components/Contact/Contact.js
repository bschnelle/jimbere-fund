import React from 'react';
import Container from '../Container/Container';
import ImageContainer from '../ImageContainer/ImageContainer';
import secondaryTheme from '../../containers/secondaryTheme/secondaryTheme';
import classes from './Contact.scss';

/**
 * /contact route component
 */
export const Contact = () => (
  <div>
    <ImageContainer
      className={classes.imageContainer}
      imageClassName={classes.image}
      src="/images/contact-o.jpg"
    >
      <Container className={classes.header} title="Contact Us">
        <h6>Have questions, ideas, or want to get involved? We'd love to hear from you.</h6>
      </Container>
    </ImageContainer>
    <div className={classes.info}>
      <div>
        <h4>Email</h4>
        <p>hello@jimberefund.org</p>
        <h4>Phone</h4>
        <p>917.224.2095</p>
        <h4>Address</h4>
        <p>1301 Wall Street West, 6203<br />Lyndhurst, NJ 07071</p>
      </div>
    </div>
  </div>
);

export default secondaryTheme(Contact);
