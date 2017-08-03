import React from 'react';
import { TimelineMax } from 'gsap';
import PropTypes from 'prop-types';
import VisibilitySensor from 'react-visibility-sensor';
import GSAP from 'react-gsap-enhancer';

function createAnim({ options }) {
  const { direction, delay, duration, textShift, blockColor } = options.props;
  const { element, block } = options.refs;
  const defaultBlockColor = 'yellow';

  const blockTimeline = new TimelineMax({ delay });

  switch(direction) {
    case 'leftRight':
      blockTimeline.set(block, {transformOrigin: '0 50%', background: blockColor ? blockColor : defaultBlockColor, left: textShift ? -20 : 0, width: `calc(100% + ${textShift ? '20px' : '0px'})`})
                   .from(block, duration, {transform: 'scale3d(0,1,1)', ease: Quint.easeInOut})
                   .set(element, {opacity: 1})
                   .from(element, duration, {x: textShift ? -20 : 0})
                   .to(block, duration, {transform: 'scale3d(0,1,1)', transformOrigin: '100% 50%', ease: Quint.easeInOut}, `-=${duration}`);
      break;
    case 'rightLeft':
      blockTimeline.set(block, {transformOrigin: '100% 50%', background: blockColor ? blockColor : defaultBlockColor, right: textShift ? 20 : 0, width: `calc(100% + ${textShift ? '20px' : '0px'})`})
                   .from(block, duration, {transform: 'scale3d(0,1,1)', ease: Quint.easeInOut})
                   .set(element, {opacity: 1})
                   .from(element, duration, {x: textShift ? 20 : 0})
                   .to(block, duration, {transform: 'scale3d(0,1,1)', transformOrigin: '0 50%', ease: Quint.easeInOut}, `-=${duration}`);
      break;
    case 'topBottom':
      blockTimeline.set(block, {transformOrigin: '50% 0', background: blockColor ? blockColor : defaultBlockColor, top: textShift ? -20 : 0, height: `calc(100% + ${textShift ? '20px' : '0px'})`})
                   .from(block, duration, {transform: 'scale3d(1,0,1)', ease: Quint.easeInOut})
                   .set(element, {opacity: 1})
                   .from(element, duration, {y: textShift ? -20 : 0})
                   .to(block, duration, {transform: 'scale3d(1,0,1)', transformOrigin: '50% 100%', ease: Quint.easeInOut}, `-=${duration}`);
      break;
    case 'bottomTop':
      blockTimeline.set(block, {transformOrigin: '50% 100%', background: blockColor ? blockColor : defaultBlockColor, bottom: textShift ? -20 : 0, height: `calc(100% + ${textShift ? '20px' : '0px'})`})
                   .from(block, duration, {transform: 'scale3d(1,0,1)', ease: Quint.easeInOut})
                   .set(element, {opacity: 1})
                   .from(element, duration, {y: textShift ? 20 : 0})
                   .to(block, duration, {transform: 'scale3d(1,0,1)', transformOrigin: '50% 0', ease: Quint.easeInOut}, `-=${duration}`);
      break;
    default:
      blockTimeline.set(block, {transformOrigin: '0 50%', background: blockColor ? blockColor : defaultBlockColor, left: textShift ? -20 : 0, width: `calc(100% + ${textShift ? '20px' : '0px'})`})
                   .from(block, duration, {transform: 'scale3d(0,1,1)', ease: Quint.easeInOut})
                   .set(element, {opacity: 1})
                   .from(element, duration, {x: textShift ? -20 : 0})
                   .to(block, duration, {transform: 'scale3d(0,1,1)', transformOrigin: '100% 50%', ease: Quint.easeInOut}, `-=${duration}`);
  }

  return blockTimeline;
}

class BlockReveal extends React.Component {
  componentDidMount() {
    this.blockAnimation = this.addAnimation(createAnim, {
      props: this.props,
      refs: {
        element: this.element,
        block: this.block
      }
    });
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.forcePlay == true && nextProps.forcePlay == false) {
      return false;
    } else {
      return true;
    }
  }
  onChange = (isVisible) => {
    if (this.blockAnimation) {
      this.props.forcePlay || isVisible ? this.playTimeline() : this.pauseTimeline();
    }
  }
  playTimeline = () => {
    this.blockAnimation.play();
  }
  pauseTimeline = () => {
    this.blockAnimation.pause();
  }
  render () {
    const baseComponent = (
      <div className="c-block-reveal">
        <div className="c-block-reveal__element" ref={element => {this.element = element}}>
          {this.props.children}
        </div>
        <div className="c-block-reveal__block" ref={block => {this.block = block}}></div>
      </div>
    );
    return (
      <VisibilitySensor onChange={this.onChange} partialVisibility={true} delayedCall={true}>
        {
          this.props.inline
          ?
          baseComponent
          :
          <div>
            {baseComponent}
          </div>
        }
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
  background: PropTypes.string
};

export default GSAP()(BlockReveal);
