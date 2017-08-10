import React from 'react';
import PropTypes from 'prop-types';
import { TimelineMax, TweenMax } from 'gsap';
import GSAP from 'react-gsap-enhancer';
import VisibilitySensor from 'react-visibility-sensor';
import BlockReveal from '../../../components/BlockReveal';
import HalftoneCharacter from '../../../components/HalftoneCharacter';
import Button from '../../../components/Button';

function createAnim ({ options }) {
  const { cover, image, overlay } = options.refs;
  const { frames } = options.props.gif;
  const gifTimeline = new TimelineMax({ paused: true, repeat: -1 });

  gifTimeline.set(overlay, { visibility: 'hidden' }, 0.001);

  for (var i = 0; i < frames.length + 2; i++) {
    // add the last frame 2 more times so it doesn't get skipped
    if (i > frames.length - 1) {
      gifTimeline.set(image, { attr:{ src: frames[frames.length - 1]['2x'], srcSet: `${frames[frames.length - 1]['1x']}, ${frames[frames.length - 1]['2x']} 2x` } }, i);
    } else {
      gifTimeline.set(image, { attr:{ src: frames[i]['2x'], srcSet: `${frames[i]['1x']}, ${frames[i]['2x']} 2x` } }, i);
    }
  }

  return gifTimeline;
}

class WorkGif extends React.Component {
  componentDidMount () {
    this.gifAnimation = this.addAnimation(createAnim, {
      props: this.props,
      refs: {
        cover: this.cover,
        image: this.image,
        overlay: this.overlay
      }
    });
  }
  playTimeline = () => {
    this.gifAnimation.play();
  }
  pauseTimeline = (time) => {
    this.gifAnimation.pause(time);
  }
  togglePlay = () => {
    if (this.gifAnimation.isActive()) {
      this.pauseTimeline(0);
    } else {
      this.playTimeline();
    }
  }
  render () {
    return (
      <VisibilitySensor partialVisibility delayedCall>
        {({ isVisible }) =>
          <div className='c-work-gif'>
            <HalftoneCharacter className='c-work-item__index' character={this.props.index + 1} />
            <div className='c-work-gif__aspect' onClick={() => { this.togglePlay(); }}>
              <figure className='c-work-gif__image'>
                <BlockReveal blockColor={this.props.hex} forcePlay={isVisible} inline={false} delay={0} duration={0.5} direction={this.props.index % 2 == 0 ? 'leftRight' : 'rightLeft'}>
                  <img src={isVisible ? this.props.gif.cover['2x'] : null} srcSet={`${this.props.gif.cover['1x']}, ${this.props.gif.cover['2x']} 2x`} ref={image => { this.image = image; }} />
                </BlockReveal>
              </figure>
              <div className='c-work-gif__overlay' ref={overlay => { this.overlay = overlay; }}>
                <BlockReveal blockColor={this.props.hex} forcePlay={isVisible} inline={false} delay={0} duration={0.5} direction={this.props.index % 2 == 0 ? 'topBottom' : 'bottomTop'}>
                  <div className='c-work-gif__button'>
                    <Button className='button button--outline' text='Play' hex={this.props.hex} />
                  </div>
                </BlockReveal>
              </div>
              <div className='c-work-gif__bg' />
            </div>
            <div className='c-work-gif__caption-wrap'>
              <BlockReveal blockColor={this.props.hex} forcePlay={isVisible} inline={false} delay={0} duration={0.5} direction={this.props.index % 2 == 0 ? 'rightLeft' : 'leftRight'}>
                <p className='c-work-gif__caption'>{this.props.gif.alt}</p>
              </BlockReveal>
            </div>
          </div>
        }
      </VisibilitySensor>
    );
  }
}

WorkGif.propTypes = {

};

export default GSAP()(WorkGif);
