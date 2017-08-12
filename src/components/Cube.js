import React from 'react';
import PropTypes from 'prop-types';
import { TimelineMax } from 'gsap';
import VisibilitySensor from 'react-visibility-sensor';
import GSAP from 'react-gsap-enhancer';

function createAnim ({ options }) {
  const cubeTimeline = new TimelineMax();
  const {
    cubeWrap, cube, cubeFaceFront,
    cubeFaceBack, cubeFaceLeft, cubeFaceRight,
    cubeFaceTop, cubeFaceBottom
  } = options.refs;
  const { faceSize, start, end, duration } = options.props;
  cubeTimeline.set(cubeWrap, {
    width: faceSize * 2,
    height: faceSize * 2,
    left: start.x,
    top: start.y
  });
  cubeTimeline.set(cubeFaceLeft, { x: faceSize * -1, rotationY:90 });
  cubeTimeline.set(cubeFaceRight, { x: faceSize, rotationY:90 });
  cubeTimeline.set(cubeFaceFront, { z: faceSize });
  cubeTimeline.set(cubeFaceBack, { z: faceSize * -1 });
  cubeTimeline.set(cubeFaceTop, { y: faceSize * -1, rotationX:90 });
  cubeTimeline.set(cubeFaceBottom, { y: faceSize, rotationX:90 });
  cubeTimeline.set(cube, {
    rotationX: start.rotateX,
    rotationY: start.rotateY,
    rotationZ: start.rotateZ
  });
  cubeTimeline.to(cube, duration, {
    rotationX: 720,
    rotationY: 360,
    rotationZ: 1080,
    x: end.x,
    y: end.y,
    transformStyle:'preserve-3d',
    repeat: -1,
    yoyo: true,
    ease:Power0.easeNone
  });
  return cubeTimeline;
}

class Cube extends React.Component {
  componentDidMount () {
    this.cubeAnimation = this.addAnimation(createAnim, {
      props: this.props,
      refs: {
        cubeWrap: this.cubeWrap,
        cube: this.cube,
        cubeFaceFront: this.cubeFaceFront,
        cubeFaceBack: this.cubeFaceBack,
        cubeFaceLeft: this.cubeFaceLeft,
        cubeFaceRight: this.cubeFaceRight,
        cubeFaceTop: this.cubeFaceTop,
        cubeFaceBottom: this.cubeFaceBottom
      }
    });
  }
  onChange = (isVisible) => {
    if (this.cubeAnimation) {
      isVisible ? this.playTimeline() : this.pauseTimeline();
    }
  }
  playTimeline = () => {
    this.cubeAnimation.play();
  }
  pauseTimeline = () => {
    this.cubeAnimation.pause();
  }
  render () {
    return (
      <VisibilitySensor onChange={this.onChange}>
        <div
          className={`c-cube-wrapper ${this.props.above ? 'c-cube-wrapper--above' : ''}`}
          ref={(cubeWrap) => { this.cubeWrap = cubeWrap; }}>
          <div
            className='c-cube'
            ref={(cube) => { this.cube = cube; }}>
            <div
              className='c-cube__face c-cube__face--front'
              ref={(cubeFaceFront) => { this.cubeFaceFront = cubeFaceFront; }} />
            <div
              className='c-cube__face c-cube__face--back'
              ref={(cubeFaceBack) => { this.cubeFaceBack = cubeFaceBack; }} />
            <div
              className='c-cube__face c-cube__face--left'
              ref={(cubeFaceLeft) => { this.cubeFaceLeft = cubeFaceLeft; }} />
            <div
              className='c-cube__face c-cube__face--right'
              ref={(cubeFaceRight) => { this.cubeFaceRight = cubeFaceRight; }} />
            <div
              className='c-cube__face c-cube__face--top'
              ref={(cubeFaceTop) => { this.cubeFaceTop = cubeFaceTop; }} />
            <div
              className='c-cube__face c-cube__face--bottom'
              ref={(cubeFaceBottom) => { this.cubeFaceBottom = cubeFaceBottom; }} />
          </div>
        </div>
      </VisibilitySensor>
    );
  }
}

Cube.propTypes = {
  faceSize: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  above: PropTypes.bool,
  start: PropTypes.shape({
    x: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
    y: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
    rotateX: PropTypes.number.isRequired,
    rotateY: PropTypes.number.isRequired,
    rotateZ: PropTypes.number.isRequired
  }),
  end: PropTypes.shape({
    x: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
    y: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired
  })
};

export default GSAP()(Cube);
