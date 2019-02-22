import React from 'react';
import PropTypes from 'prop-types';
import VisibilitySensor from 'react-visibility-sensor';
import DownArrow from './DownArrow';
import BlockReveal from './BlockReveal';
import Scrambler from './Scrambler';

class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isExposed: false
    };
  }
  shouldComponentUpdate (nextProps, nextState) {
    if ((this.props.blockId !== nextProps.blockId) || (this.state.isExposed !== nextState.isExposed)) {
      return true;
    } else {
      return false;
    }
  }
  componentDidUpdate (prevProps, prevState) {
    if (this.props.blockId !== prevProps.blockId) {
      this.unExpose();
    }
  }
  onChange = (isVisible) => {
    if (isVisible && !this.state.isExposed) {
      this.setExposed();
    }
  }
  setExposed = () => {
    this.setState({
      isExposed: true
    });
  }
  unExpose = () => {
    this.setState({
      isExposed: false
    });
  }
  render () {
    return (
      <VisibilitySensor delayedCall onChange={this.onChange}>
        <header className='section c-hero' role='banner'>
          <div className='single c-work-hero__content'>
            <h1 className='epsilon--display-condensed'>
              <BlockReveal
                inline={false}
                forcePlay={this.state.isExposed}
                blockId={this.props.blockId}
                header
                delay={0}
                duration={0.5}>
                <Scrambler
                  forcePlay={this.state.isExposed}
                  blockId={this.props.blockId}
                  duration={1}
                  header
                  delay={0.5}
                  text={this.props.title}
                  secondStep={this.props.secondStep}
                  secondStepText={this.props.titleTwo}
                  secondStepDelay={2}>
                  {this.props.title}
                </Scrambler>
              </BlockReveal>
            </h1>
            <span className='c-hero__subtitle'>
              <BlockReveal
                inline={false}
                forcePlay={this.state.isExposed}
                blockId={this.props.blockId}
                header
                delay={0}
                duration={0.5}
                direction='rightLeft'>
                <Scrambler
                  forcePlay={this.state.isExposed}
                  blockId={this.props.blockId}
                  duration={1}
                  header
                  delay={0.5}
                  text={this.props.subtitle}
                  secondStep={this.props.secondStep}
                  secondStepText={this.props.subtitleTwo}
                  secondStepDelay={2.5}>
                  {this.props.subtitle}
                </Scrambler>
              </BlockReveal>
            </span>
            <DownArrow forcePlay={this.state.isExposed} />
          </div>
        </header>
      </VisibilitySensor>
    );
  }
}

// const Hero = ({ forcePlay, title, subtitle, secondStep, titleTwo, subtitleTwo }) => (
//   <header className='section c-hero' role='banner'>
//     <div className='single c-work-hero__content'>
//       <h1 className='epsilon--display-condensed'>
//         <BlockReveal
//           inline={false}
//           forcePlay={forcePlay}
//           delay={0}
//           duration={0.5}>
//           <Scrambler
//             forcePlay={forcePlay}
//             duration={1}
//             delay={0.6}
//             text={title}
//             secondStep={secondStep}
//             secondStepText={titleTwo}
//             secondStepDelay={2}>
//             {title}
//           </Scrambler>
//         </BlockReveal>
//       </h1>
//       <span className='c-hero__subtitle'>
//         <BlockReveal
//           inline={false}
//           forcePlay={forcePlay}
//           delay={0.15}
//           duration={0.5}
//           direction='rightLeft'>
//           <Scrambler
//             forcePlay={forcePlay}
//             duration={1}
//             delay={0.6}
//             text={subtitle}
//             secondStep={secondStep}
//             secondStepText={subtitleTwo}
//             secondStepDelay={2.5}>
//             {subtitle}
//           </Scrambler>
//         </BlockReveal>
//       </span>
//       <DownArrow forcePlay={forcePlay} />
//     </div>
//   </header>
// );

Hero.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  forcePlay: PropTypes.bool
};

export default Hero;
