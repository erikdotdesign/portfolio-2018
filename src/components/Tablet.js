import React from 'react';
import PropTypes from 'prop-types';
import Cube from './Cube';
import { TimelineMax } from 'gsap';
import VisibilitySensor from 'react-visibility-sensor';
import GSAP from 'react-gsap-enhancer';
import '../DrawSVGPlugin';

function createAnim({ options }) {
  const tabletTimeline = new TimelineMax();
  const { outline, screen, screenOutline, screenMask } = options.refs;
  const { index } = options.props;
  tabletTimeline.fromTo(outline, 0.75, {drawSVG: index % 2 == 0 ? 0 : "50% 50%", strokeWidth: 2}, {drawSVG:"100%", strokeWidth: 2, immediateRender:false}, "+=0.25")
                .fromTo(screenOutline, 0.75, {drawSVG: index % 2 == 0 ? "50% 50%" : 0, strokeWidth: 1}, {drawSVG:"100%", strokeWidth: 1, immediateRender:false}, "-=0.25")
                .fromTo(screenMask, 0.5, {opacity: 0}, {opacity: 1});

  return tabletTimeline;
}

class Tablet extends React.Component {
  componentDidMount() {
    this.tabletAnimation = this.addAnimation(createAnim, {
      props: this.props,
      refs: {
        outline: this.outline,
        screen: this.outline,
        screenOutline: this.screenOutline,
        screenMask: this.screenMask
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
    if (this.tabletAnimation) {
      isVisible || this.props.forcePlay ? this.playTimeline() : this.pauseTimeline();
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
      <VisibilitySensor onChange={this.onChange} delayedCall={true} partialVisibility={true}>
        <div className="c-tablet">
          <svg width="624px" height="429px" viewBox="0 0 624 429" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <defs>
              <rect ref={(screenMask) => {this.screenMask = screenMask}} id={`path-${this.props.index}`} x="0" y="0" width="499" height="374" opacity="0"></rect>
            </defs>
            <g stroke="none" strokeWidth="0" fill="none" fillRule="evenodd">
              <rect ref={(outline) => {this.outline = outline}} id="outline" stroke="#000000" strokeMiterlimit="30" strokeLinecap="square" strokeWidth="0" x="1" y="1" width="622" height="427" rx="20"></rect>
              <g id="screen" transform="translate(62.000000, 27.000000)" ref={(screen) => {this.screen = screen}}>
                <mask id={`mask-${this.props.index}`} fill="white">
                  <use xlinkHref={`#path-${this.props.index}`}></use>
                </mask>
                <image id="ironandale" mask={`url(#mask-${this.props.index})`} x="0" y="0" width="499" height="374.25" xlinkHref={this.props.img}></image>
                <rect ref={(screenOutline) => {this.screenOutline = screenOutline}} stroke="#000000" strokeMiterlimit="30" strokeLinecap="square" strokeWidth="0" x="0.5" y="0.5" width="498" height="373"></rect>
              </g>
            </g>
          </svg>
        </div>
      </VisibilitySensor>
    );
  }
}

Tablet.propTypes = {

};

export default GSAP()(Tablet);
