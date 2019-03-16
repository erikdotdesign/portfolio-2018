import React from 'react';
import PropTypes from 'prop-types';
import Lightbox from 'react-image-lightbox';
import WorkImage from './WorkImage';
import WorkGif from './WorkGif';

class BriefImages extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }
  handleClick = (e, index) => {
    e.preventDefault();
    this.setState(state => ({
      isOpen: true,
      photoIndex: index
    }));
  }
  _isRetinaDisplay = () => {
    if (window.matchMedia) {
      var mq = window.matchMedia('only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen  and (min-device-pixel-ratio: 1.3), only screen and (min-resolution: 1.3dppx)');
      return (mq && mq.matches || (window.devicePixelRatio > 1));
    }
  }
  render () {
    const { photoIndex, isOpen } = this.state;
    const images = this.props.images;
    const rawImages = this.props.images.map(image => image.retina && this._isRetinaDisplay() ? image.retina : image.url);
    const captions = this.props.images.map((image, index) => `${index + 1}. ${image.alt}`);

    return (
      <section className='section single'>
        {
          images.map((image, index) =>
            typeof (image.cover) !== 'undefined'
            ? <WorkGif gif={image} key={index} index={index} />
            : <a className='c-work-image-wrap' href="#" alt={image.alt} onClick={(e) => this.handleClick(e, index)} key={index} ><WorkImage image={image} index={index} blockId={this.props.blockId} /></a>
          )
        }
        {isOpen && (
          <Lightbox
            imageCaption={captions[photoIndex]}
            mainSrc={rawImages[photoIndex]}
            nextSrc={rawImages[(photoIndex + 1) % rawImages.length]}
            prevSrc={rawImages[(photoIndex + rawImages.length - 1) % rawImages.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + rawImages.length - 1) % rawImages.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % rawImages.length,
              })
            }
          />
        )}
      </section>
    );
  }
}

BriefImages.propTypes = {
  images: PropTypes.array,
  blockId: PropTypes.string
};

export default BriefImages;
