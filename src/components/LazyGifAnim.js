import React from 'react';
import PropTypes from 'prop-types';
import TweenMax from 'gsap/TweenMax';
import TimelineMax from 'gsap/TimelineMax';
import GSAP from 'react-gsap-enhancer';
import OutlineButton from './OutlineButton';

function createAnim ({ options }) {
  const { image, overlay } = options.refs;
  const { frames } = options.props.gif;
  const gifTimeline = new TimelineMax({ paused: true, repeat: -1 });

  gifTimeline.set(overlay, { display: 'none' }, 0.001);

  for (var i = 0; i < frames.length + 2; i++) {
    // add the last frame 2 more times so it doesn't get skipped
    if (i > frames.length - 1) {
      gifTimeline.set(image, {
        attr: {
          src: options.props.retina ? frames[frames.length - 1]['2x'] : frames[frames.length - 1]['1x']
        }
      }, i);
    } else {
      gifTimeline.set(image, {
        attr: {
          src: options.props.retina ? frames[i]['2x'] : frames[i]['1x']
        }
      }, i);
    }
  }

  return gifTimeline;
}

class LazyGifAnim extends React.Component {
  componentDidMount () {
    this.gifAnimation = this.addAnimation(createAnim, {
      props: this.props,
      refs: {
        image: this.image,
        overlay: this.overlay
      }
    });
  }
  playTimeline = () => {
    this.gifAnimation.play();
  }
  pauseTimeline = (time) => {
    this.gifAnimation.pause(time);
  }
  togglePlay = () => {
    if (this.gifAnimation.isActive()) {
      this.pauseTimeline(0);
    } else {
      this.playTimeline();
    }
  }
  render () {
    return (
      <div className='c-work-gif__aspect' onClick={() => { this.togglePlay(); }}>
        <div className='c-work-gif__image'>
          <img
            src={this.props.retina ? this.props.gif.cover['2x'] : this.props.gif.cover['1x']}
            ref={image => { this.image = image; }}
            alt={this.props.gif.alt} />
        </div>
        <div className='c-work-gif__overlay' ref={overlay => { this.overlay = overlay; }}>
          <OutlineButton text='Play' />
        </div>
      </div>
    );
  }
}

LazyGifAnim.propTypes = {
  gif: PropTypes.object,
  retina: PropTypes.bool
};

export default GSAP()(LazyGifAnim);
