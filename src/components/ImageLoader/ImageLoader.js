import React, { Component, PropTypes } from 'react';
import classes from './ImageLoader.scss';

class ImageLoader extends Component {

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    src: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
    this.state = { backgroundImage: undefined };

    const newImage = new Image();
    newImage.onload = () => this.setState({ backgroundImage: newImage.src });
    newImage.src = props.src;
  }

  setImage(image) {
    const newImage = new Image();
    newImage.onload = () => this.setState({ backgroundImage: newImage.src });
    newImage.src = image.getIn(['urls', 'custom']);
  }

  render() {
    const { children, className } = this.props;

    let imageLoaderClassName = classes.imageLoader;
    if (className) imageLoaderClassName += ` ${className}`;

    let imageLoaderStyle;
    if (this.state.backgroundImage) {
      imageLoaderStyle = { backgroundImage: `url(${this.state.backgroundImage})`, opacity: 1 };
    }

    return (
      <div className={imageLoaderClassName}>
        <div style={imageLoaderStyle} />
        <div>{children}</div>
      </div>
    );
  }
}

export default ImageLoader;
