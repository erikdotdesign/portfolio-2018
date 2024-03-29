import React from 'react';
import PropTypes from 'prop-types';
import GSAP from 'react-gsap-enhancer';
import TweenMax from 'gsap/TweenMax';
import TimelineMax from 'gsap/TimelineMax';
import { Link } from 'react-router';
import DrawSVGPlugin from '../gsapPlugins/DrawSVGPlugin';
import ScrambleTextPlugin from '../gsapPlugins/ScrambleTextPlugin';

function createAnim ({ options }) {
  const { text } = options.props;
  const buttonTimeline = new TimelineMax({ paused: true });
  const { outline, textValue } = options.refs;
  buttonTimeline
  .fromTo(outline, 0.75, {
    drawSVG: 0,
    strokeWidth: 2
  }, {
    drawSVG:'100%',
    strokeWidth: 2,
    immediateRender:false
  })
  .set(textValue, { opacity: 1 }, `-=0.25`)
  .to(textValue, 1, {
    scrambleText: {
      text: text,
      chars: '!#}$%&?@{*+=-',
      ease: Linear.easeNone,
      revealDelay: 0.4,
      speed: 0.3
    }
  }, `-=0.25`);

  return buttonTimeline;
}

class OutlineButton extends React.Component {
  componentDidMount () {
    this.buttonAnimation = this.addAnimation(createAnim, {
      props: this.props,
      refs: {
        outline: this.outline,
        textValue: this.textValue
      }
    });
  }
  shouldComponentUpdate (nextProps, nextState) {
    if ((this.props.forcePlay !== nextProps.forcePlay) || (this.props.blockId !== nextProps.blockId) || this.props.gifForcePlay) {
      return true;
    } else {
      return false;
    }
  }
  componentDidUpdate (prevProps, prevState) {
    if ((!prevProps.forcePlay && this.props.forcePlay) || this.props.gifForcePlay) {
      this.playTimeline();
    } else if (this.props.blockId !== prevProps.blockId) {
      this.buttonAnimation.kill();
      this.buttonAnimation = this.addAnimation(createAnim, {
        props: this.props,
        refs: {
          outline: this.outline,
          textValue: this.textValue
        }
      });
    }
  }
  playTimeline = () => {
    this.buttonAnimation.play();
  }
  pauseTimeline = () => {
    this.buttonAnimation.pause();
  }
  render () {
    const buttonGuts = (
      <span>
        <svg
          width='100%'
          height='100%'
          viewBox='0 0 30 20'
          version='1.1'
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
          preserveAspectRatio='none'>
          <rect
            ref={(outline) => { this.outline = outline; }}
            stroke='#000000'
            fill='none'
            strokeWidth='0'
            strokeMiterlimit='30'
            strokeLinecap='square'
            x='1'
            y='1'
            width='28'
            height='18'
            vectorEffect='non-scaling-stroke' />
        </svg>
        <span
          className='c-button__text'
          ref={textValue => { this.textValue = textValue; }}>
          {this.props.text}
        </span>
      </span>
    );
    return (
      this.props.router
      ? <Link
        className='c-button c-button--outline'
        role='button'
        aria-label={this.props.text}
        to={this.props.link}>
        {buttonGuts}
      </Link>
      : this.props.link
      ? <a
        className='c-button c-button--outline'
        role='button'
        href={this.props.link}
        aria-label={this.props.text}
        target='_blank'>
        {buttonGuts}
      </a>
      : <button
        className='c-button c-button--outline'
        role='button'
        aria-label={this.props.text}>
        {buttonGuts}
      </button>
    );
  }
}

OutlineButton.propTypes = {
  router: PropTypes.bool,
  blockId: PropTypes.string,
  forcePlay: PropTypes.bool,
  gifForcePlay: PropTypes.bool,
  text: PropTypes.string,
  link: PropTypes.string
};

export default GSAP()(OutlineButton);
