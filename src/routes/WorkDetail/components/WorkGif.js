import React from 'react';
import PropTypes from 'prop-types';
import TweenMax from 'gsap/TweenMax';
import TimelineMax from 'gsap/TimelineMax';
import GSAP from 'react-gsap-enhancer';
import VisibilitySensor from 'react-visibility-sensor';
import BlockReveal from '../../../components/BlockReveal';
import HalftoneCharacter from '../../../components/HalftoneCharacter';
import LazyGif from '../../../components/LazyGif';
import Button from '../../../components/Button';

class WorkGif extends React.Component {
  render () {
    return (
      <VisibilitySensor partialVisibility delayedCall>
        {({ isVisible }) =>
          <figure className='c-work-gif'>
            <HalftoneCharacter
              className='c-work-item__index'
              character={this.props.index + 1} />
            <LazyGif isVisible={isVisible} gif={this.props.gif} />
            <figcaption className='c-work-gif__caption top-stroke--strong top-stroke--inline'>
              <BlockReveal
                blockColor={this.props.hex}
                forcePlay={isVisible}
                blockId={this.props.blockId}
                inline={false}
                delay={0}
                duration={0.5}
                direction={
                  this.props.index % 2 === 0
                  ? 'rightLeft'
                  : 'leftRight'}>
                {this.props.gif.alt}
              </BlockReveal>
            </figcaption>
          </figure>
        }
      </VisibilitySensor>
    );
  }
}

WorkGif.propTypes = {
  gif: PropTypes.object,
  blockId: PropTypes.string,
  index: PropTypes.number,
  hex: PropTypes.string
};

export default WorkGif;
