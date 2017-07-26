import React from 'react';
import BlockReveal from '../../../components/BlockReveal';
import DownArrow from './DownArrow';

export const Hero = () => (
  <div className="section c-hero">
    <div className="single single-measure c-hero__content">
      <div>
        <BlockReveal inline={true} delay={0} duration={0.5}>
          <h1 className='epsilon--display-condensed'>Erik Myers</h1>
        </BlockReveal>
      </div>
      <div>
        <BlockReveal inline={true} delay={0.25} duration={0.5} direction="rightLeft">
          <h1 className='epsilon--display-condensed'>Design</h1>
        </BlockReveal>
      </div>
      <DownArrow />
    </div>
  </div>
);

export default Hero;
