import React from 'react';
import TweenMax from 'gsap/TweenMax';
import TimelineMax from 'gsap/TimelineMax';
import PropTypes from 'prop-types';
import GSAP from 'react-gsap-enhancer';

function createAnim ({ options }) {
  const { direction, delay, duration } = options.props;
  const { element, block } = options.refs;

  const blockTimeline = new TimelineMax({ paused: true });

  switch (direction) {
    case 'leftRight':
      blockTimeline
      .set(block, {
        transformOrigin: '0 50%'
      }, `+=${delay}`)
      .from(block, duration, {
        transform: 'scale3d(0,1,1)',
        ease: Quint.easeInOut
      })
      .set(element, {
        opacity: 1
      })
      .to(block, duration, {
        transform: 'scale3d(0,1,1)',
        transformOrigin: '100% 50%',
        ease: Quint.easeInOut
      });
      break;
    case 'rightLeft':
      blockTimeline
      .set(block, {
        transformOrigin: '100% 50%'
      }, `+=${delay}`)
      .from(block, duration, {
        transform: 'scale3d(0,1,1)',
        ease: Quint.easeInOut
      })
      .set(element, {
        opacity: 1
      })
      .to(block, duration, {
        transform: 'scale3d(0,1,1)',
        transformOrigin: '0 50%',
        ease: Quint.easeInOut
      });
      break;
    case 'topBottom':
      blockTimeline
      .set(block, {
        transformOrigin: '50% 0'
      }, `+=${delay}`)
      .from(block, duration, {
        transform: 'scale3d(1,0,1)',
        ease: Quint.easeInOut })
      .set(element, {
        opacity: 1
      })
      .to(block, duration, {
        transform: 'scale3d(1,0,1)',
        transformOrigin: '50% 100%',
        ease: Quint.easeInOut
      });
      break;
    case 'bottomTop':
      blockTimeline
      .set(block, {
        transformOrigin: '50% 100%'
      }, `+=${delay}`)
      .from(block, duration, {
        transform: 'scale3d(1,0,1)',
        ease: Quint.easeInOut
      })
      .set(element, {
        opacity: 1
      })
      .to(block, duration, {
        transform: 'scale3d(1,0,1)',
        transformOrigin: '50% 0',
        ease: Quint.easeInOut
      });
      break;
    default:
      blockTimeline
      .set(block, {
        transformOrigin: '0 50%'
      }, `+=${delay}`)
      .from(block, duration, {
        transform: 'scale3d(0,1,1)',
        ease: Quint.easeInOut
      })
      .set(element, {
        opacity: 1
      })
      .to(block, duration, {
        transform: 'scale3d(0,1,1)',
        transformOrigin: '100% 50%',
        ease: Quint.easeInOut
      });
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
    if ((this.props.forcePlay !== nextProps.forcePlay) || (this.props.blockId !== nextProps.blockId)) {
      return true;
    } else {
      return false;
    }
  }
  componentDidUpdate (prevProps, prevState) {
    if (this.props.forcePlay) {
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
    );
  }
}

BlockReveal.propTypes = {
  children: PropTypes.node.isRequired,
  inline: PropTypes.bool.isRequired,
  delay: PropTypes.number.isRequired,
  blockId: PropTypes.string,
  duration: PropTypes.number.isRequired,
  forcePlay: PropTypes.bool,
  header: PropTypes.bool
};

export default GSAP()(BlockReveal);
