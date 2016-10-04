import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import * as mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
import Contact from './Contact';
import Container from '../Container/Container';
import ImageContainer from '../ImageContainer/ImageContainer';
import classes from './Contact.scss';

describe('Contact', () => {
  beforeEach(() => sinon.stub(mapboxgl.default, 'Map'));
  afterEach(() => mapboxgl.default.Map.restore());

  describe('componentDidMount()', () => {
    it('it calls mapboxgl.default.Map with an options object', () => {
      shallow(<Contact />).instance().componentDidMount();
      expect(mapboxgl.default.Map).to.have.been.calledWith(sinon.match({ container: 'map' }));
    });
  });

  describe('render()', () => {
    it('renders a root div', () => {
      const wrapper = shallow(<Contact />);
      expect(wrapper.type()).to.equal('div');
    });

    describe('header', () => {
      describe('ImageContainer has the following props', () => {
        let imageContainer;

        beforeEach(() => {
          const wrapper = shallow(<Contact />);
          imageContainer = wrapper.find(ImageContainer);
        });

        it('className = .imageContainer', () => {
          expect(imageContainer.prop('className')).to.equal(classes.imageContainer);
        });

        it('imageClassName = .image', () => {
          expect(imageContainer.prop('imageClassName')).to.equal(classes.image);
        });

        it('src = /images/phone-o.jpg', () => {
          expect(imageContainer.prop('src')).to.equal('/images/phone-o.jpg');
        });
      });

      describe('Container has the following props', () => {
        let container;

        beforeEach(() => {
          const wrapper = shallow(<Contact />);
          container = wrapper.find(Container);
        });

        it('className = .heaer', () => {
          expect(container.prop('className')).to.equal(classes.header);
        });

        it('fluid = true', () => {
          expect(container.prop('fluid')).to.be.true;
        });

        it('title = "Contact Us"', () => {
          expect(container.prop('title')).to.equal('Contact Us');
        });
      });
    });

    describe('info section', () => {
      let info;
      beforeEach(() => {
        const wrapper = shallow(<Contact />);
        info = wrapper.find(`.${classes.info}`);
      });

      it('is a div with an .info class', () => {
        expect(info.type()).to.equal('div');
      });

      it('contains two h3 elements', () => {
        expect(info.find('h3')).to.have.length(2);
      });

      it('contains two p elements', () => {
        expect(info.find('p')).to.have.length(2);
      });

      it('contains a div with id of "map"', () => {
        const map = info.find('#map');
        expect(map).to.have.length(1);
        expect(map.type()).to.equal('div');
      });
    });
  });
});
