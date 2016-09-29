import React, { Component, PropTypes } from 'react';
import classes from './ImageContainer.scss';

/**
 * background image container that fades the image
 * in after it has been loaded
 */
class ImageContainer extends Component {

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    imageClassName: PropTypes.string,
    src: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
    this.state = { backgroundImage: undefined };

    /* load image */
    const newImage = new Image();
    newImage.onload = () => this.setState({ backgroundImage: newImage.src });
    newImage.src = props.src;
  }

  render() {
    const { children, className, imageClassName } = this.props;

    let containerClassName = classes.imageContainer;
    if (className) containerClassName += ` ${className}`;

    /* when image is loaded, fade in */
    let imageContainerStyle;
    if (this.state.backgroundImage) {
      imageContainerStyle = { backgroundImage: `url(${this.state.backgroundImage})`, opacity: 1 };
    }

    return (
      <div className={containerClassName}>
        <div className={imageClassName || ''} style={imageContainerStyle} />
        <div>{children}</div>
      </div>
    );
  }
}

export default ImageContainer;
