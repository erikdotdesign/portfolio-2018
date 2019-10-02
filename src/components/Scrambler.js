import React from 'react';
import TweenMax from 'gsap/TweenMax';
import TimelineMax from 'gsap/TimelineMax';
import PropTypes from 'prop-types';
import GSAP from 'react-gsap-enhancer';
import ScrambleTextPlugin from '../gsapPlugins/ScrambleTextPlugin';

function createAnim ({ options }) {
  const { delay, duration, text, secondStep, secondStepText, secondStepDelay } = options.props;
  const { element } = options.refs;

  const scrambleTimeline = new TimelineMax({ paused: true });

  const scramblerConstants = {
    chars: '!#}$%&?@{*+=-',
    ease: Linear.easeNone,
    revealDelay: 0.4,
    speed: 0.3
  };

  scrambleTimeline.to(element, duration, {
    scrambleText: {
      text: text,
      ...scramblerConstants
    }
  }, `+=${delay}`);

  if (secondStep) {
    const scrambleTimelineChild = new TimelineMax({
      paused: false,
      repeat: -1,
      repeatDelay: 2,
      yoyo: true
    });
    scrambleTimelineChild.to(element, duration, {
      scrambleText: {
        text: secondStepText,
        ...scramblerConstants
      }
    }, `+=${secondStepDelay}`);

    scrambleTimeline.add([scrambleTimelineChild]);
  }

  return scrambleTimeline;
}

class Scrambler extends React.Component {
  componentDidMount () {
    this.scrambleAnimation = this.addAnimation(createAnim, {
      props: this.props,
      refs: {
        element: this.element
      }
    });
  }
  shouldComponentUpdate (nextProps, nextState) {
    if ((this.props.forcePlay !== nextProps.forcePlay) || (this.props.blockId !== nextProps.blockId)) {
      return true;
    } else if ((this.props.forcePlay && !nextProps.forcePlay) && (this.scrambleAnimation.isActive() && this.props.secondStep)) {
      return true;
    } else {
      return false;
    }
  }
  componentDidUpdate (prevProps, prevState) {
    if (!prevProps.forcePlay && this.props.forcePlay) {
      this.playTimeline();
    } else if ((prevProps.forcePlay && !this.props.forcePlay) && (this.scrambleAnimation.isActive() && this.props.secondStep)) {
      this.pauseTimeline();
    } else if (this.props.blockId !== prevProps.blockId) {
      this.scrambleAnimation.kill();
      this.element.textContent = this.props.text;
      this.scrambleAnimation = this.addAnimation(createAnim, {
        props: this.props,
        refs: {
          element: this.element
        }
      });
      if (this.props.header) {
        this.playTimeline();
      }
    }
  }
  playTimeline = () => {
    this.scrambleAnimation.play();
  }
  pauseTimeline = () => {
    this.scrambleAnimation.pause();
  }
  render () {
    return (
      <span ref={element => { this.element = element; }}>{this.props.text}</span>
    );
  }
}

Scrambler.propTypes = {
  delay: PropTypes.number,
  duration: PropTypes.number,
  forcePlay: PropTypes.bool,
  blockId: PropTypes.string,
  text: PropTypes.string,
  header: PropTypes.bool,
  secondStep: PropTypes.bool,
  secondStepText: PropTypes.string,
  secondStepDelay: PropTypes.number
};

export default GSAP()(Scrambler);
