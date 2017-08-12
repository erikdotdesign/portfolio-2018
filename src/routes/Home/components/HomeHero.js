import React from 'react';
import BlockReveal from '../../../components/BlockReveal';
import Hero from '../../../components/Hero';
import VisibilitySensor from 'react-visibility-sensor';

export const HomeHero = () => (
  <VisibilitySensor partialVisibility delayedCall>
    {({ isVisible }) =>
      <Hero rightHalftoneText='17/18'>
        <div className='single single-measure'>
          <h1 className='epsilon--display-condensed'>
            <BlockReveal
              inline={false}
              forcePlay={isVisible}
              delay={0}
              textShift
              duration={0.5}>
              Erik Myers
            </BlockReveal>
          </h1>
          <h1 className='epsilon--display-condensed'>
            <BlockReveal
              inline={false}
              forcePlay={isVisible}
              delay={0.2}
              textShift
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
