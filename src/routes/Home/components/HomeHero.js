import React from 'react';
import BlockReveal from '../../../components/BlockReveal';
import Scrambler from '../../../components/Scrambler';
import Hero from '../../../components/Hero';
import VisibilitySensor from 'react-visibility-sensor';

const HomeHero = () => (
  <VisibilitySensor partialVisibility delayedCall>
    {({ isVisible }) =>
      <Hero rightHalftoneText='2019'>
        <div className='single c-work-hero__content'>
          <h1 className='epsilon--display-condensed'>
            <BlockReveal
              inline={false}
              forcePlay={isVisible}
              delay={0}
              duration={0.5}>
              <Scrambler
                forcePlay={isVisible}
                duration={1}
                delay={0.6}
                text='Erik Myers'>
                Erik Myers
              </Scrambler>
            </BlockReveal>
          </h1>
          <span className='c-hero__subtitle'>
            <BlockReveal
              inline={false}
              forcePlay={isVisible}
              delay={0.15}
              duration={0.5}
              direction='rightLeft'>
              <Scrambler
                forcePlay={isVisible}
                duration={1}
                delay={0.8}
                text='Full Stack Design'>
                Full Stack Design
              </Scrambler>
            </BlockReveal>
          </span>
        </div>
      </Hero>
    }
  </VisibilitySensor>
);

export default HomeHero;
