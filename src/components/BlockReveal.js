import React from 'react';
import { TweenLite, TimelineLite } from 'gsap';
import PropTypes from 'prop-types';

class BlockReveal extends React.Component {
  componentDidMount() {
    const BlockRevealTimeline = new TimelineLite({delay: this.props.delay});

    switch(this.props.direction) {
      case 'leftRight':
        this.leftRight(BlockRevealTimeline);
        break;
      case 'rightLeft':
        this.rightLeft(BlockRevealTimeline);
        break;
      case 'topBottom':
        this.topBottom(BlockRevealTimeline);
        break;
      case 'bottomTop':
        this.bottomTop(BlockRevealTimeline);
        break;
      default:
        this.leftRight(BlockRevealTimeline);
    }
  }
  leftRight = (timeline) => {
    timeline.set(this.block, {transformOrigin: '0 50%', left: -20, width: 'calc(100% + 20px)'})
            .from(this.block, this.props.duration, {transform: 'scale3d(0,1,1)', ease: Quint.easeInOut})
            .set(this.element, {opacity: 1})
            .from(this.element, this.props.duration, {x: -20})
            .to(this.block, this.props.duration, {transform: 'scale3d(0,1,1)', transformOrigin: '100% 50%', ease: Quint.easeInOut}, `-=${this.props.duration}`);
  }
  rightLeft = (timeline) => {
    timeline.set(this.block, {transformOrigin: '100% 50%', right: 20, width: 'calc(100% + 20px)'})
            .from(this.block, this.props.duration, {transform: 'scale3d(0,1,1)', ease: Quint.easeInOut})
            .set(this.element, {opacity: 1})
            .from(this.element, this.props.duration, {x: 20})
            .to(this.block, this.props.duration, {transform: 'scale3d(0,1,1)', transformOrigin: '0 50%', ease: Quint.easeInOut}, `-=${this.props.duration}`);
  }
  topBottom = (timeline) => {
    timeline.set(this.block, {transformOrigin: '50% 0'})
            .from(this.block, this.props.duration, {transform: 'scale3d(1,0,1)', ease: Quint.easeInOut})
            .set(this.element, {opacity: 1})
            .from(this.element, this.props.duration, {y: -10})
            .to(this.block, this.props.duration, {transform: 'scale3d(1,0,1)', transformOrigin: '50% 100%', ease: Quint.easeInOut}, `-=${this.props.duration}`);
  }
  bottomTop = (timeline) => {
    timeline.set(this.block, {transformOrigin: '50% 100%'})
            .from(this.block, this.props.duration, {transform: 'scale3d(1,0,1)', ease: Quint.easeInOut})
            .set(this.element, {opacity: 1})
            .from(this.element, this.props.duration, {y: 10})
            .to(this.block, this.props.duration, {transform: 'scale3d(1,0,1)', transformOrigin: '50% 0', ease: Quint.easeInOut}, `-=${this.props.duration}`);
  }
  render () {
    return (
      <div className={`c-block-reveal ${this.props.inline ? 'c-block-reveal--inline' : ''}`}>
        <div className="c-block-reveal__element" ref={element => {this.element = element}}>
          {this.props.children}
        </div>
        <div className="c-block-reveal__block" ref={block => {this.block = block}}></div>
      </div>
    );
  }
}

BlockReveal.propTypes = {
  children: PropTypes.node.isRequired,
  inline: PropTypes.bool.isRequired,
  delay: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired
};

export default BlockReveal;
