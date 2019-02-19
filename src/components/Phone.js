import React from 'react';
import PropTypes from 'prop-types';
import TweenMax from 'gsap/TweenMax';
import TimelineMax from 'gsap/TimelineMax';
import DrawSVGPlugin from 'gsap/DrawSVGPlugin';
import VisibilitySensor from 'react-visibility-sensor';
import GSAP from 'react-gsap-enhancer';

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
          <svg width='280px'
            height='464px'
            viewBox='0 0 280 464'
            version='1.1'
            aria-labelledby='#phone-title'
            role='img'
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
            preserveAspectRatio='xMidYMin meet'>
            <title id='phone-title'>{this.props.image.alt}</title>
            <defs>
              <rect id='phone-path'
                x='20'
                y='20'
                rx='10'
                width='236'
                height='420' />
            </defs>
            <g transform='translate(2.000000, 2.000000)'>
              <rect
                ref={(outline) => { this.outline = outline; }}
                stroke='#000000'
                fill='none'
                strokeWidth='0'
                strokeMiterlimit='30'
                strokeLinecap='square'
                x='-1'
                y='-1'
                width='278'
                height='462'
                rx='25'
                vectorEffect='non-scaling-stroke' />
              <mask id='phone-mask' fill='white'>
                <use xlinkHref='#phone-path' />
              </mask>
              <image
                ref={(screenMask) => { this.screenMask = screenMask; }}
                mask='url(#phone-mask)'
                x='20'
                y='20'
                width='236'
                height='420'
                xlinkHref={this.props.forcePlay ? this.props.image.url : null} />
              <rect
                ref={(screenOutline) => { this.screenOutline = screenOutline; }}
                stroke='#000000'
                fill='none'
                strokeWidth='0'
                strokeMiterlimit='30'
                strokeLinecap='square'
                x='19.5'
                y='19.5'
                width='237'
                height='421'
                rx='10'
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
