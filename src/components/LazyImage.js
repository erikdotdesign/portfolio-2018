import React from 'react';
import PropTypes from 'prop-types';
import Preload from 'react-preload';
import LoadingIndicator from './LoadingIndicator';

const initialState = {
  viewed: false,
  loaded: false,
  error: false
};

class LazyImage extends React.Component {
  constructor (props) {
    super(props);
    this.state = initialState;
  }
  componentWillReceiveProps (nextProps) {
    if ((nextProps.isVisible && !this.props.isVisible) && !this.state.viewed) {
      this.setState({ loaded : false, viewed: true, error: false });
    } else if (nextProps.blockId !== this.props.blockId) {
      this.setState(initialState);
    }
  }
  _handleImageLoadSuccess = () => {
    this.setState({ loaded : true, viewed: true, error: false });
  }
  _handleImageLoadError = () => {
    this.setState({ loaded : true, viewed: true, error: true });
  }
  _isRetinaDisplay = () => {
    if (window.matchMedia) {
      var mq = window.matchMedia('only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen  and (min-device-pixel-ratio: 1.3), only screen and (min-resolution: 1.3dppx)');
      return (mq && mq.matches || (window.devicePixelRatio > 1));
    }
  }
  render () {
    var loadingIndicator = (
      <LoadingIndicator />
    );
    var images = this.props.retina && this._isRetinaDisplay() ? [this.props.retina] : [this.props.imgSrc];
    return (
      <div className='c-work-image__aspect'>
        {
          this.state.viewed
          ? <Preload
            loadingIndicator={loadingIndicator}
            images={images}
            onError={this._handleImageLoadError}
            onSuccess={this._handleImageLoadSuccess}
            resolveOnError
            mountChildren
            >
            {
              <img
                className={`c-work-image__image c-work-image__image--loaded`}
                src={images[0]}
                alt={this.props.imgAlt}
                />
            }
          </Preload>
          : null
        }
      </div>
    );
  }
}

LazyImage.propTypes = {

};

export default LazyImage;
