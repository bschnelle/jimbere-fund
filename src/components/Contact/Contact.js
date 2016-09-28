import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
import ImageLoader from '../ImageLoader/ImageLoader';
import classes from './Contact.scss';

class Contact extends Component {

  componentDidMount() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYnNjaG5lbGxlIiwiYSI6ImNpdGdicThsODAwZTkyem1rNjU3NGE5YjYifQ.-vW-e8wtnO_S9GBdFlZ2nw';
    const map = new mapboxgl.Map({
      // container id
      container: 'map',
      // style location
      style: 'mapbox://styles/bschnelle/citgbrv5n00022iqh7psitcc6',
      // starting position
      center: [-73.9377, 40.6507],
      zoom: 10
    });

    /* map.on('load', () => {
      map.addSource('terrain-data', {
        type: 'vector',
        url: 'mapbox://mapbox.citgch6lf00bi2nnv0k1ltnfy'
      });
    }); */
  }

  render() {
    return (
      <div className={classes.contact}>
        <ImageLoader className={classes.image} src="/images/phone-o.jpg" />
        <div className={classes.greeting}>
          <h1>Contact Us</h1>
        </div>
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

export default Contact;
