import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
import Container from '../Container/Container';
import ImageContainer from '../ImageContainer/ImageContainer';
import secondaryTheme from '../../containers/secondaryTheme/secondaryTheme';
import classes from './Contact.scss';

export class Contact extends Component {

  componentDidMount() {
    // eslint-disable-next-line
    mapboxgl.accessToken = 'pk.eyJ1IjoiYnNjaG5lbGxlIiwiYSI6ImNpdGdicThsODAwZTkyem1rNjU3NGE5YjYifQ.-vW-e8wtnO_S9GBdFlZ2nw';
    // eslint-disable-next-line
    const map = new mapboxgl.Map({
      container: 'map',
      dragPan: false,
      scrollZoom: false,
      style: 'mapbox://styles/bschnelle/citgbrv5n00022iqh7psitcc6',
      center: [-73.9377, 40.6507],
      zoom: 10
    });
  }

  render() {
    return (
      <div>
        <ImageContainer
          className={classes.imageContainer}
          imageClassName={classes.image}
          src="/images/phone-o.jpg"
        >
          <Container className={classes.header} fluid title="Contact Us" />
        </ImageContainer>
        <div className={classes.info}>
          <div>
            <h3>Email</h3>
            <p>obadiasndaba@gmail.com</p>
            <h3>Phone</h3>
            <p>917.224.2095</p>
          </div>
          <div id="map" />
        </div>
      </div>
    );
  }
}

export default secondaryTheme(Contact);
