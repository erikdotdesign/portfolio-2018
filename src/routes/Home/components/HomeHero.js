import React from 'react';
import BlockReveal from '../../../components/BlockReveal';
import Hero from '../../../components/Hero';
import VisibilitySensor from 'react-visibility-sensor';

const HomeHero = () => (
  <VisibilitySensor partialVisibility delayedCall>
    {({ isVisible }) =>
      <Hero>
        <div className='single single-measure c-work-hero__content'>
          <h1 className='epsilon--display-condensed'>
            <BlockReveal
              inline={false}
              forcePlay={isVisible}
              delay={0}
              duration={0.5}>
              Erik Myers
            </BlockReveal>
          </h1>
          <h1 className='epsilon--display-condensed'>
            <BlockReveal
              inline={false}
              forcePlay={isVisible}
              delay={0.2}
              duration={0.5}
              direction='rightLeft'>
              Design
            </BlockReveal>
          </h1>
        </div>
      </Hero>
    }
  </VisibilitySensor>
);

export default HomeHero;
