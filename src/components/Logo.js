import React from 'react';
import TweenMax from 'gsap/TweenMax';
import TimelineMax from 'gsap/TimelineMax';
import GSAP from 'react-gsap-enhancer';

function createAnim ({ options }) {
  const logoTimeline = new TimelineMax({ paused: true });
  const { outline, eTop, eBottom, mLeft, mRight } = options.refs;

  logoTimeline
    .fromTo(outline, 0.5, {
      drawSVG: 0,
      strokeWidth: 3
    }, {
      drawSVG:'100%',
      strokeWidth: 3,
      immediateRender:false
    }, `+=0.5`)
    .fromTo(eTop, 0.25, {
      attr: { width: 0 }
    }, {
      attr: { width: 9 }
    })
    .fromTo(eBottom, 0.25, {
      attr: { width: 0 }
    }, {
      attr: { width: 9 }
    }, `-=0.12`)
    .fromTo(mLeft, 0.25, {
      attr: { height: 0 }
    }, {
      attr: { height: 9 }
    }, `-=0.12`)
    .fromTo(mRight, 0.25, {
      attr: { height: 0 }
    }, {
      attr: { height: 9 }
    }, `-=0.12`);

  return logoTimeline;
}

class Logo extends React.Component {
  componentDidMount () {
    this.logoTimeline = this.addAnimation(createAnim, {
      props: this.props,
      refs: {
        outline: this.outline,
        eTop: this.eTop,
        eBottom: this.eBottom,
        mLeft: this.mLeft,
        mRight: this.mRight
      }
    });
    this.playTimeline();
  }
  playTimeline = () => {
    this.logoTimeline.play();
  }
  pauseTimeline = () => {
    this.logoTimeline.pause();
  }
  render () {
    return (
      <div className='c-logo'>
        <svg
          width='37px'
          height='23px'
          viewBox='0 0 37 23'
          version='1.1'
          xmlns='http://www.w3.org/2000/svg'>
          <rect
            ref={(outline) => { this.outline = outline; }}
            stroke='#fcfcfc'
            strokeWidth='0'
            fill='none'
            x='1.5'
            y='1.5'
            width='34'
            height='20' />
          <rect
            ref={(eTop) => { this.eTop = eTop; }}
            fill='#fcfcfc'
            x='7'
            y='7'
            width='0'
            height='3' />
          <rect
            ref={(eBottom) => { this.eBottom = eBottom; }}
            fill='#fcfcfc'
            x='7'
            y='13'
            width='0'
            height='3' />
          <rect
            ref={(mLeft) => { this.mLeft = mLeft; }}
            fill='#fcfcfc'
            x='20'
            y='7'
            width='3'
            height='0' />
          <rect
            ref={(mRight) => { this.mRight = mRight; }}
            fill='#fcfcfc'
            x='27'
            y='7'
            width='3'
            height='0' />
        </svg>
      </div>
    );
  }
}

export default GSAP()(Logo);
