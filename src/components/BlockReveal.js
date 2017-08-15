import React from 'react';
import { TimelineMax } from 'gsap';
import PropTypes from 'prop-types';
import VisibilitySensor from 'react-visibility-sensor';
import GSAP from 'react-gsap-enhancer';

function createAnim ({ options }) {
  const { direction, delay, duration, textShift, blockColor } = options.props;
  const { element, block } = options.refs;
  const defaultBlockColor = 'yellow';

  const blockTimeline = new TimelineMax({ paused: true });

  switch (direction) {
    case 'leftRight':
      blockTimeline
      .set(block, {
        transformOrigin: '0 50%',
        background: blockColor || defaultBlockColor,
        left: textShift ? -5 : 0,
        width: `calc(100% + ${textShift ? '5px' : '0px'})` }, `+=${delay}`)
      .from(block, duration, {
        transform: 'scale3d(0,1,1)',
        ease: Quint.easeInOut })
      .set(element, { opacity: 1 })
      .from(element, duration, { x: textShift ? -5 : 0 })
      .to(block, duration, {
        transform: 'scale3d(0,1,1)',
        transformOrigin: '100% 50%',
        ease: Quint.easeInOut }, `-=${duration}`);
      break;
    case 'rightLeft':
      blockTimeline
      .set(block, {
        transformOrigin: '100% 50%',
        background: blockColor || defaultBlockColor,
        right: textShift ? -5 : 0,
        width: `calc(100% + ${textShift ? '5px' : '0px'})` }, `+=${delay}`)
      .from(block, duration, {
        transform: 'scale3d(0,1,1)',
        ease: Quint.easeInOut })
      .set(element, { opacity: 1 })
      .from(element, duration, { x: textShift ? 5 : 0 })
      .to(block, duration, {
        transform: 'scale3d(0,1,1)',
        transformOrigin: '0 50%',
        ease: Quint.easeInOut }, `-=${duration}`);
      break;
    case 'topBottom':
      blockTimeline
      .set(block, {
        transformOrigin: '50% 0',
        background: blockColor || defaultBlockColor,
        y: textShift ? -5 : 0,
        height: `calc(100% + ${textShift ? '5px' : '0px'})` }, `+=${delay}`)
      .from(block, duration, {
        transform: 'scale3d(1,0,1)',
        ease: Quint.easeInOut })
      .set(element, { opacity: 1 })
      .from(element, duration, { y: textShift ? -5 : 0 })
      .to(block, duration, {
        transform: 'scale3d(1,0,1)',
        transformOrigin: '50% 100%',
        ease: Quint.easeInOut }, `-=${duration}`);
      break;
    case 'bottomTop':
      blockTimeline
      .set(block, {
        transformOrigin: '50% 100%',
        background: blockColor || defaultBlockColor,
        y: textShift ? -5 : 0,
        height: `calc(100% + ${textShift ? '5px' : '0px'})` }, `+=${delay}`)
      .from(block, duration, { transform: 'scale3d(1,0,1)', ease: Quint.easeInOut })
      .set(element, { opacity: 1 })
      .from(element, duration, { y: textShift ? 5 : 0 })
      .to(block, duration, {
        transform: 'scale3d(1,0,1)',
        transformOrigin: '50% 0',
        ease: Quint.easeInOut }, `-=${duration}`);
      break;
    default:
      blockTimeline
      .set(block, {
        transformOrigin: '0 50%',
        background: blockColor || defaultBlockColor,
        left: textShift ? -5 : 0,
        width: `calc(100% + ${textShift ? '5px' : '0px'})` }, `+=${delay}`)
      .from(block, duration, {
        transform: 'scale3d(0,1,1)',
        ease: Quint.easeInOut })
      .set(element, { opacity: 1 })
      .from(element, duration, { x: textShift ? -5 : 0 })
      .to(block, duration, {
        transform: 'scale3d(0,1,1)',
        transformOrigin: '100% 50%',
        ease: Quint.easeInOut }, `-=${duration}`);
  }

  return blockTimeline;
}

class BlockReveal extends React.Component {
  componentDidMount () {
    this.blockAnimation = this.addAnimation(createAnim, {
      props: this.props,
      refs: {
        element: this.element,
        block: this.block
      }
    });
  }
  shouldComponentUpdate (nextProps, nextState) {
    if (!this.props.forcePlay && nextProps.forcePlay || this.props.blockId !== nextProps.blockId) {
      return true;
    }
    else {
      return false;
    }
  }
  componentDidUpdate (prevProps, prevState) {
    if (!prevProps.forcePlay && this.props.forcePlay) {
      this.playTimeline();
    } else if (this.props.blockId !== prevProps.blockId) {
      this.blockAnimation.kill();
      this.blockAnimation = this.addAnimation(createAnim, {
        props: this.props,
        refs: {
          element: this.element,
          block: this.block
        }
      });
      if (this.props.forcePlay && !prevProps.forcePlay) {
        this.playTimeline();
      }
    }
  }
  onChange = (isVisible) => {
    if (this.blockAnimation && isVisible) {
      this.playTimeline();
    }
  }
  playTimeline = () => {
    this.blockAnimation.play();
  }
  pauseTimeline = () => {
    this.blockAnimation.pause();
  }
  render () {
    return (
      <VisibilitySensor
        onChange={this.onChange}
        delayedCall>
        <span className={this.props.inline ? 'c-block-reveal-inline' : null}>
          <span className='c-block-reveal'>
            <span
              className='c-block-reveal__element'
              ref={element => { this.element = element; }}>
              {this.props.children}
            </span>
            <span
              className='c-block-reveal__block'
              ref={block => { this.block = block; }} />
          </span>
        </span>
      </VisibilitySensor>
    );
  }
}

BlockReveal.propTypes = {
  children: PropTypes.node.isRequired,
  inline: PropTypes.bool.isRequired,
  delay: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  textShift: PropTypes.bool,
  background: PropTypes.string,
  forcePlay: PropTypes.bool
};

export default GSAP()(BlockReveal);
