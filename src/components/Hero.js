import React from 'react';
import PropTypes from 'prop-types';
import VisibilitySensor from 'react-visibility-sensor';
import DownArrow from './DownArrow';
import BlockReveal from './BlockReveal';
import Scrambler from './Scrambler';

const Hero = ({ title, subtitle, secondStep, titleTwo, subtitleTwo, blockId }) => (
  <VisibilitySensor delayedCall partialVisibility>
    {({ isVisible }) =>
      <header className='section c-hero' role='banner'>
        <div className='single c-hero__content'>
          <h1 className='epsilon--display-condensed'>
            <BlockReveal
              inline={false}
              forcePlay={isVisible}
              blockId={blockId}
              header
              delay={0}
              duration={0.5}>
              <Scrambler
                forcePlay={isVisible}
                blockId={blockId}
                duration={1}
                header
                delay={0.5}
                text={title}
                secondStep={secondStep}
                secondStepText={titleTwo}
                secondStepDelay={1}>
                {title}
              </Scrambler>
            </BlockReveal>
          </h1>
          <span className='c-hero__subtitle'>
            <BlockReveal
              inline={false}
              forcePlay={isVisible}
              blockId={blockId}
              header
              delay={0.15}
              duration={0.5}
              direction='rightLeft'>
              <Scrambler
                forcePlay={isVisible}
                blockId={blockId}
                duration={1}
                header
                delay={0.65}
                text={subtitle}
                secondStep={secondStep}
                secondStepText={subtitleTwo}
                secondStepDelay={1.5}>
                {subtitle}
              </Scrambler>
            </BlockReveal>
          </span>
          <DownArrow forcePlay={isVisible} blockId={blockId} />
        </div>
      </header>
    }
  </VisibilitySensor>
);

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  secondStep: PropTypes.bool,
  titleTwo: PropTypes.string,
  subtitleTwo: PropTypes.string,
  blockId: PropTypes.string
};

export default Hero;
