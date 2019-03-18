import React from 'react';
import PropTypes from 'prop-types';
import TweenMax from 'gsap/TweenMax';
import TimelineMax from 'gsap/TimelineMax';
import DrawSVGPlugin from 'gsap/DrawSVGPlugin';
import GSAP from 'react-gsap-enhancer';

function createAnim ({ options }) {
  const arrowTimeline = new TimelineMax({ paused: true });
  const { chevron, stem, arrowGroup } = options.refs;

  arrowTimeline.set(arrowGroup, { visibility: 'visible' });
  arrowTimeline.set(stem, { drawSVG: 0 });
  arrowTimeline.set(chevron, { drawSVG: '50% 50%' });

  arrowTimeline
    .to(stem, 0.5, {
      drawSVG: true,
      immediateRender: false
    })
    .to(chevron, 0.5, {
      drawSVG: true,
      immediateRender: false
    });

  const arrowTimelineChild = new TimelineMax({
    paused: false,
    repeat: -1,
    yoyo: true
  });

  arrowTimelineChild
    .to(arrowGroup, 1, {
      y: -20
    });

  arrowTimeline.add([arrowTimelineChild]);

  return arrowTimeline;
}

class DownArrow extends React.Component {
  componentDidMount () {
    this.arrowAnimation = this.addAnimation(createAnim, {
      props: this.props,
      refs: {
        chevron: this.chevron,
        stem: this.stem,
        arrowGroup: this.arrowGroup
      }
    });
  }
  shouldComponentUpdate (nextProps, nextState) {
    if ((!this.props.forcePlay && nextProps.forcePlay) || (this.props.blockId !== nextProps.blockId)) {
      return true;
    } else if ((this.props.forcePlay && !nextProps.forcePlay) && this.arrowAnimation.isActive()) {
      return true;
    } else {
      return false;
    }
  }
  componentDidUpdate (prevProps, prevState) {
    if (!prevProps.forcePlay && this.props.forcePlay) {
      this.playTimeline();
    } else if ((prevProps.forcePlay && !this.props.forcePlay) && this.arrowAnimation.isActive()) {
      this.pauseTimeline();
    } else if (this.props.blockId !== prevProps.blockId) {
      this.arrowAnimation.kill();
      this.arrowAnimation = this.addAnimation(createAnim, {
        props: this.props,
        refs: {
          chevron: this.chevron,
          stem: this.stem,
          arrowGroup: this.arrowGroup
        }
      });
      if (this.props.forcePlay && !prevProps.forcePlay) {
        this.playTimeline();
      }
    }
  }
  playTimeline = () => {
    this.arrowAnimation.play();
  }
  pauseTimeline = () => {
    this.arrowAnimation.pause();
  }
  render () {
    return (
      <div className='c-down-arrow'>
        <svg
          ref={(arrowGroup) => { this.arrowGroup = arrowGroup; }}
          visibility='hidden'
          width='36px'
          height='55px'
          viewBox='0 0 36 55'
          version='1.1'
          xmlns='http://www.w3.org/2000/svg'>
          <g
            transform='translate(1.000000, 1.000000)'
            stroke='#000000'
            strokeWidth='2'>
            <polyline
              ref={(chevron) => { this.chevron = chevron; }}
              fill='none'
              transform='translate(17.000000, 41.500000) rotate(-180.000000) translate(-17.000000, -41.500000)'
              points='0 52 17 31 17 31 34 52' />
            <path
              ref={(stem) => { this.stem = stem; }}
              d='M17,0 L17,50'
              strokeLinecap='square' />
          </g>
        </svg>
      </div>
    );
  }
}

DownArrow.propTypes = {
  forcePlay: PropTypes.bool,
  blockId: PropTypes.string
};

export default GSAP()(DownArrow);
