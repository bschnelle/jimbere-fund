import React, { Component, PropTypes } from 'react';
import classes from './ImageContainer.scss';

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

    const newImage = new Image();
    newImage.onload = () => this.setState({ backgroundImage: newImage.src });
    newImage.src = props.src;
  }

  render() {
    const { children, className, imageClassName } = this.props;

    let ImageContainerClassName = classes.ImageContainer;
    if (className) ImageContainerClassName += ` ${className}`;

    let imageContainerStyle;
    if (this.state.backgroundImage) {
      imageContainerStyle = { backgroundImage: `url(${this.state.backgroundImage})`, opacity: 1 };
    }

    return (
      <div className={ImageContainerClassName}>
        <div className={imageClassName || ''} style={imageContainerStyle} />
        <div>{children}</div>
      </div>
    );
  }
}

export default ImageContainer;
