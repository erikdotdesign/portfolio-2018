import React from 'react';
import PropTypes from 'prop-types';
import Preload from 'react-preload';
import Tablet from './Tablet';
import LoadingIndicator from './LoadingIndicator';

const initialState = {
  viewed: false,
  loaded: false,
  error: false
};

class LazyTablet extends React.Component {
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
  render () {
    var loadingIndicator = (
      <div className={`c-tablet-wrap ${this.props.className}`}>
        <LoadingIndicator />
      </div>
    );
    var images = [this.props.image.url];
    return (
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
          <Tablet
            className={this.props.className}
            image={this.props.image}
            blockId={this.props.blockId}
            forcePlay={this.props.forcePlay}
            index={this.props.index} />
        }
      </Preload>
      : null
    );
  }
}

LazyTablet.propTypes = {
  forcePlay: PropTypes.bool,
  blockId: PropTypes.string,
  className: PropTypes.string,
  image: PropTypes.object,
  index: PropTypes.number
};

export default LazyTablet;
