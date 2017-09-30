import React from 'react';
import PropTypes from 'prop-types';
import Preload from 'react-preload';
import Phone from './Phone';

const initialState = {
  viewed: false,
  loaded: false,
  error: false
}

class LazyPhone extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }
  componentWillReceiveProps(nextProps) {
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
      <div className='c-phone'>
        <div className='c-phone__loading'>
          <div className='c-phone__loader'>
          </div>
        </div>
      </div>
    );
    var images = [this.props.image.url];
    return (
      this.state.viewed
      ?
      <Preload
        loadingIndicator={loadingIndicator}
        images={images}
        onError={this._handleImageLoadError}
        onSuccess={this._handleImageLoadSuccess}
        resolveOnError={true}
        mountChildren={true}
        >
        {
          <Phone
            image={this.props.image}
            blockId={this.props.image}
            forcePlay={this.props.forcePlay} />
        }
      </Preload>
      :
      null
    );
  }
}

LazyPhone.propTypes = {

};

export default LazyPhone;



