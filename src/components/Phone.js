import React from 'react';
import PropTypes from 'prop-types';
import { TimelineMax } from 'gsap';
import VisibilitySensor from 'react-visibility-sensor';
import GSAP from 'react-gsap-enhancer';
import '../DrawSVGPlugin';

function createAnim ({ options }) {
  const phoneTimeline = new TimelineMax({ paused: true });
  const { outline, screenOutline, screenMask } = options.refs;
  phoneTimeline
  .fromTo(outline, 0.75, {
    drawSVG: 0,
    strokeWidth: 2
  }, {
    drawSVG:'100%',
    strokeWidth: 2,
    immediateRender:false
  }, '+=0.25')
  .fromTo(screenOutline, 0.75, {
    drawSVG: '50% 50%',
    strokeWidth: 1
  }, {
    drawSVG:'100%',
    strokeWidth: 1,
    immediateRender:false
  }, '-=0.25')
  .fromTo(screenMask, 0.5, { opacity: 0 }, { opacity: 1 });

  return phoneTimeline;
}

class Phone extends React.Component {
  componentDidMount () {
    this.phoneAnimation = this.addAnimation(createAnim, {
      refs: {
        outline: this.outline,
        screenOutline: this.screenOutline,
        screenMask: this.screenMask
      }
    });
  }
  shouldComponentUpdate (nextProps, nextState) {
    if ((!this.props.forcePlay && nextProps.forcePlay) || (this.props.blockId !== nextProps.blockId)) {
      return true;
    } else {
      return false;
    }
  }
  componentDidUpdate (prevProps, prevState) {
    if (!prevProps.forcePlay && this.props.forcePlay) {
      this.playTimeline();
    } else if (this.props.blockId !== prevProps.blockId) {
      this.phoneAnimation.kill();
      this.phoneAnimation = this.addAnimation(createAnim, {
        refs: {
          outline: this.outline,
          screenOutline: this.screenOutline,
          screenMask: this.screenMask
        }
      });
      if (this.props.forcePlay && !prevProps.forcePlay) {
        this.playTimeline();
      }
    }
  }
  onChange = (isVisible) => {
    if (this.phoneAnimation && isVisible) {
      this.playTimeline();
    }
  }
  playTimeline = () => {
    this.phoneAnimation.play();
  }
  pauseTimeline = () => {
    this.phoneAnimation.pause();
  }
  render () {
    return (
      <VisibilitySensor onChange={this.onChange} delayedCall partialVisibility>
        <figure className='c-phone'>
          <svg width='254px'
            height='448px'
            viewBox='0 0 254 448'
            version='1.1'
            aria-labelledby='#phone-title'
            role='img'
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
            preserveAspectRatio='xMidYMin meet'>
            <title id='phone-title'>{this.props.image.alt}</title>
            <defs>
              <rect id='phone-path'
                x='0'
                y='0'
                width='224'
                height='396' />
            </defs>
            <rect
              ref={(outline) => { this.outline = outline; }}
              stroke='#000000'
              fill='none'
              strokeWidth='0'
              strokeMiterlimit='30'
              strokeLinecap='square'
              x='1'
              y='1'
              width='252'
              height='446'
              rx='20'
              vectorEffect='non-scaling-stroke' />
            <g transform='translate(15.000000, 25.000000)'>
              <mask id='phone-mask' fill='white'>
                <use xlinkHref='#phone-path' />
              </mask>
              <image
                ref={(screenMask) => { this.screenMask = screenMask; }}
                mask='url(#phone-mask)'
                x='1'
                y='1'
                width='222'
                height='395'
                xlinkHref={this.props.forcePlay ? this.props.image.url : null} />
              <rect
                ref={(screenOutline) => { this.screenOutline = screenOutline; }}
                stroke='#000000'
                fill='none'
                strokeWidth='0'
                strokeMiterlimit='30'
                strokeLinecap='square'
                x='0.5'
                y='0.5'
                width='223'
                height='396'
                vectorEffect='non-scaling-stroke' />
            </g>
          </svg>
        </figure>
      </VisibilitySensor>
    );
  }
}

Phone.propTypes = {
  image: PropTypes.object,
  blockId: PropTypes.string,
  forcePlay: PropTypes.bool
};

export default GSAP()(Phone);
