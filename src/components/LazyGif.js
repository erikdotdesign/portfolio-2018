import React from 'react';
import PropTypes from 'prop-types';
import Preload from 'react-preload';
import LazyGifAnim from './LazyGifAnim';
import LoadingIndicator from './LoadingIndicator';
import HalftoneCharacter from './HalftoneCharacter';

const initialState = {
  viewed: false,
  loaded: false,
  error: false
};

class LazyGif extends React.Component {
  constructor (props) {
    super(props);
    this.state = initialState;
  }
  componentWillReceiveProps (nextProps) {
    if ((nextProps.forcePlay && !this.props.forcePlay) && !this.state.viewed) {
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
      <div className='c-work-gif__aspect'>
        <LoadingIndicator />
      </div>
    );
    const images = this.props.gif.frames.map((image) => {
      if (this._isRetinaDisplay()) {
        return image['2x'];
      } else {
        return image['1x'];
      }
    });
    return (
      <div className='c-work-gif__aspect'>
        <div className='halftone-wrap'>
          <HalftoneCharacter
            className='c-work-item__index'
            character={`0${this.props.index + 1}`} />
        </div>
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
              <LazyGifAnim
                gif={this.props.gif}
                retina={this._isRetinaDisplay()}
                forcePlay={this.props.forcePlay}
                blockId={this.props.blockId}
                index={this.props.index} />
            }
          </Preload>
          : null
        }
      </div>
    );
  }
}

LazyGif.propTypes = {
  forcePlay: PropTypes.bool,
  blockId: PropTypes.string,
  gif: PropTypes.object
};

export default LazyGif;
