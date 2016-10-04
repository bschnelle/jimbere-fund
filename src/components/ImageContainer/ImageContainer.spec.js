import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import ImageContainer from './ImageContainer';
import classes from './ImageContainer.scss';

const image = {};
const src = '/path/to/image.jpg';

describe('ImageContainer', () => {
  before(() => { global.Image = () => image; });
  after(() => delete global.Image);

  describe('constructor()', () => {
    it('sets state.backgroundImage to props.src via Image.onload', () => {
      const wrapper = shallow(<ImageContainer src={src} />);
      image.onload();
      expect(wrapper.state('backgroundImage')).to.equal(src);
    });
  });

  describe('render()', () => {
    it('renders a root div with a .imageContainer class', () => {
      const wrapper = shallow(<ImageContainer src={src} />);
      expect(wrapper.is(`.${classes.imageContainer}`)).to.be.true;
    });

    it('if defined, adds props.className to root div', () => {
      const className = 'myClass';
      const wrapper = shallow(<ImageContainer className={className} src={src} />);
      expect(wrapper.is(`.${className}`)).to.be.true;
    });

    it('if defined, adds props.imageClassName to first nested div', () => {
      const imageClassName = 'myImageClass';
      const wrapper = shallow(<ImageContainer imageClassName={imageClassName} src={src} />);
      expect(wrapper.childAt(0).prop('className')).to.equal(imageClassName);
    });

    it('if state.backgroundImage is defined style to backgroundImage is set to its value', () => {
      const backgroundImage = '/path/to/image.jpg';
      const wrapper = shallow(<ImageContainer src={src} />);
      expect(wrapper.childAt(0).prop('style')).to.be.undefined;
      wrapper.setState({ backgroundImage });
      expect(wrapper.childAt(0).prop('style').backgroundImage).to.equal(`url(${backgroundImage})`);
    });

    it('renders its children', () => {
      const child = <div>child</div>;
      const wrapper = shallow(<ImageContainer src={src}>{child}</ImageContainer>);
      expect(wrapper.contains(child)).to.be.true;
    });
  });
});
