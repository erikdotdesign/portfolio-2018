import React from 'react';
import PropTypes from 'prop-types';
import TweenMax from 'gsap/TweenMax';
import TimelineMax from 'gsap/TimelineMax';
import DrawSVGPlugin from 'gsap/DrawSVGPlugin';
import VisibilitySensor from 'react-visibility-sensor';
import GSAP from 'react-gsap-enhancer';

function createAnim ({ options }) {
  const tabletTimeline = new TimelineMax({ paused: true });
  const { outline, screenOutline, screenMask } = options.refs;
  const { index } = options.props;
  tabletTimeline
    .fromTo(outline, 1, {
      drawSVG: index % 2 === 0 ? 0 : '50% 50%',
      strokeWidth: 2
    }, {
      drawSVG:'100%',
      strokeWidth: 2,
      immediateRender:false
    })
    .fromTo(screenOutline, 1, {
      drawSVG: index % 2 === 0 ? '50% 50%' : 0,
      strokeWidth: 1
    }, {
      drawSVG:'100%',
      strokeWidth: 1,
      immediateRender:false
    }, '-=0.5')
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
    if (this.props.forcePlay !== nextProps.forcePlay) {
      return true;
    } else {
      return false;
    }
  }
  componentDidUpdate (prevProps, prevState) {
    if (this.props.forcePlay) {
      this.playTimeline();
    }
    // if (!prevProps.forcePlay && this.props.forcePlay) {
    //   this.playTimeline();
    // } else if (this.props.blockId !== prevProps.blockId) {
    //   this.tabletAnimation.kill();
    //   this.tabletAnimation = this.addAnimation(createAnim, {
    //     props: this.props,
    //     refs: {
    //       outline: this.outline,
    //       screenOutline: this.screenOutline,
    //       screenMask: this.screenMask
    //     }
    //   });
    //   if (this.props.forcePlay && !prevProps.forcePlay) {
    //     this.playTimeline();
    //   }
    // }
  }
  playTimeline = () => {
    this.tabletAnimation.play();
  }
  pauseTimeline = () => {
    this.tabletAnimation.pause();
  }
  render () {
    return (
      <div className={`c-tablet-wrap ${this.props.className ? this.props.className : null}`}>
        <figure className='c-tablet'>
          <svg width='1104px'
            height='854px'
            viewBox='0 0 1104 854'
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
            aria-labelledby={`#tablet-title-${this.props.index}`}
            role='img'
            preserveAspectRatio='xMidYMin meet'>
            <title id={`tablet-title-${this.props.index}`}>{this.props.image.alt}</title>
            <defs>
              <rect id={`tablet-path-${this.props.index}`}
                x='51.5'
                y='51.5'
                rx='10'
                width='997'
                height='747' />
            </defs>
            <g transform='translate(2.000000, 2.000000)'>
              <rect ref={(outline) => { this.outline = outline; }}
                fill='none'
                stroke='#000000'
                strokeMiterlimit='30'
                strokeLinecap='square'
                strokeWidth='0'
                x='1'
                y='1'
                width='1098'
                height='848'
                rx='40'
                vectorEffect='non-scaling-stroke' />
              <mask id={`tablet-mask-${this.props.index}`} fill='white'>
                <use xlinkHref={`#tablet-path-${this.props.index}`} />
              </mask>
              <image ref={(screenMask) => { this.screenMask = screenMask; }}
                mask={`url(#tablet-mask-${this.props.index})`}
                x='51'
                y='51'
                width='998'
                height='748'
                xlinkHref={this.props.forcePlay ? this.props.image.url : null} />
              <rect ref={(screenOutline) => { this.screenOutline = screenOutline; }}
                fill='none'
                stroke='#000000'
                strokeMiterlimit='30'
                strokeLinecap='square'
                strokeWidth='0'
                x='51.5'
                y='51.5'
                width='997'
                height='747'
                rx='10'
                vectorEffect='non-scaling-stroke' />
            </g>
          </svg>
        </figure>
      </div>
    );
  }
}

Tablet.propTypes = {
  image: PropTypes.object,
  forcePlay: PropTypes.bool,
  blockId: PropTypes.string,
  index: PropTypes.number,
  className: PropTypes.string
};

export default GSAP()(Tablet);
