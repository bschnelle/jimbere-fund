import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
import classes from './Contact.scss';

class Contact extends Component {

  componentDidMount() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYnNjaG5lbGxlIiwiYSI6ImNpdGdicThsODAwZTkyem1rNjU3NGE5YjYifQ.-vW-e8wtnO_S9GBdFlZ2nw';
    const map = new mapboxgl.Map({
      // container id
      container: 'map',
      // style location
      style: 'mapbox://styles/bschnelle/citgejb9400032iqh1owo598z',
      // starting position
      center: [-74.50, 40],
      zoom: 9
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
        <div className={classes.image} />
        <div className={classes.greeting}>
          <h1>Contact Us</h1>
        </div>
        <div className={classes.info}>
          <div>
            <h2>Email</h2>
            <span>obadiasndaba@gmail.com</span>
            <h2>Phone</h2>
            <span>917.224.2095</span>
          </div>
          <div id="map" />
        </div>
      </div>
    );
  }
}

export default Contact;
