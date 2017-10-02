import React from 'react';
import TweenMax from 'gsap/TweenMax';
import TimelineMax from 'gsap/TimelineMax';
import ScrambleTextPlugin from 'gsap/ScrambleTextPlugin';
import PropTypes from 'prop-types';
import GSAP from 'react-gsap-enhancer';

function createAnim ({ options }) {
  const { delay, duration, text } = options.props;
  const { element } = options.refs;
  const scrambleTimeline = new TimelineMax({ paused: true });

  scrambleTimeline.to(element, duration, {
    scrambleText: {
      text: text,
      chars: '!#$%&?@\^_{|}~',
      ease: Linear.easeNone,
      revealDelay: 0.4,
      speed: 0.3
    }
  }, `+=${delay}`);

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
      this.scrambleAnimation.kill();
      this.element.textContent = this.props.text;
      this.scrambleAnimation = this.addAnimation(createAnim, {
        props: this.props,
        refs: {
          element: this.element
        }
      });
      if (this.props.forcePlay && (!prevProps.forcePlay || this.props.header)) {
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

};

export default GSAP()(Scrambler);
