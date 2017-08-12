import React from 'react';
import PropTypes from 'prop-types';
import { TimelineMax } from 'gsap';
import VisibilitySensor from 'react-visibility-sensor';
import GSAP from 'react-gsap-enhancer';
import '../DrawSVGPlugin';

function createAnim ({ options }) {
  const tabletTimeline = new TimelineMax({ paused: true });
  const { outline, screenOutline, screenMask } = options.refs;
  const { index } = options.props;
  tabletTimeline
    .fromTo(outline, 0.75, {
      drawSVG: index % 2 === 0 ? 0 : '50% 50%',
      strokeWidth: 2
    }, {
      drawSVG:'100%',
      strokeWidth: 2,
      immediateRender:false
    }, '+=0.25')
    .fromTo(screenOutline, 0.75, {
      drawSVG: index % 2 === 0 ? '50% 50%' : 0,
      strokeWidth: 1
    }, {
      drawSVG:'100%',
      strokeWidth: 1,
      immediateRender:false
    }, '-=0.25')
    .fromTo(screenMask, 0.5, { opacity: 0 }, { opacity: 1 });

  return tabletTimeline;
}

class Tablet extends React.Component {
  componentDidMount () {
    this.tabletAnimation = this.addAnimation(createAnim, {
      props: this.props,
      refs: {
        outline: this.outline,
        screenOutline: this.screenOutline,
        screenMask: this.screenMask
      }
    });
  }
  shouldComponentUpdate (nextProps, nextState) {
    if (!this.props.forcePlay && nextProps.forcePlay) {
      return true;
    } else {
      return false;
    }
  }
  componentDidUpdate (prevProps, prevState) {
    if (!prevProps.forcePlay && this.props.forcePlay) {
      this.playTimeline();
    }
  }
  onChange = (isVisible) => {
    if (this.tabletAnimation && isVisible) {
      this.playTimeline();
    }
  }
  playTimeline = () => {
    this.tabletAnimation.play();
  }
  pauseTimeline = () => {
    this.tabletAnimation.pause();
  }
  render () {
    return (
      <VisibilitySensor onChange={this.onChange} delayedCall partialVisibility>
        <div className={`c-tablet-wrap ${this.props.className ? this.props.className : null}`}>
          <div className='c-tablet'>
            <svg width='624px'
              height='429px'
              viewBox='0 0 624 429'
              version='1.1'
              xmlns='http://www.w3.org/2000/svg'
              xmlnsXlink='http://www.w3.org/1999/xlink'
              aria-labelledby={`#tablet-title-${this.props.index}`}
              role='img'
              preserveAspectRatio='xMidYMin meet'>
              <title id={`tablet-title-${this.props.index}`}>{this.props.image.alt}</title>
              <defs>
                <rect id={`tablet-path-${this.props.index}`}
                  x='0'
                  y='0'
                  width='499'
                  height='374' />
              </defs>
              <rect ref={(outline) => { this.outline = outline; }}
                fill='none'
                stroke='#000000'
                strokeMiterlimit='30'
                strokeLinecap='square'
                strokeWidth='0'
                x='1'
                y='1'
                width='622'
                height='427'
                rx='20' />
              <g transform='translate(62.000000, 27.000000)'>
                <mask id={`tablet-mask-${this.props.index}`} fill='white'>
                  <use xlinkHref={`#tablet-path-${this.props.index}`} />
                </mask>
                <image ref={(screenMask) => { this.screenMask = screenMask; }}
                  mask={`url(#tablet-mask-${this.props.index})`}
                  x='0'
                  y='0'
                  width='499'
                  height='374.25'
                  xlinkHref={this.props.forcePlay ? this.props.image.url : null} />
                <rect ref={(screenOutline) => { this.screenOutline = screenOutline; }}
                  fill='none'
                  stroke='#000000'
                  strokeMiterlimit='30'
                  strokeLinecap='square'
                  strokeWidth='0'
                  x='0.5'
                  y='0.5'
                  width='498'
                  height='373' />
              </g>
            </svg>
          </div>
        </div>
      </VisibilitySensor>
    );
  }
}

Tablet.propTypes = {
  image: PropTypes.object,
  forcePlay: PropTypes.bool,
  index: PropTypes.number,
  className: PropTypes.string
};

export default GSAP()(Tablet);
