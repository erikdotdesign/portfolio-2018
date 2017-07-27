import React from 'react';
import BlockReveal from '../../../components/BlockReveal';
import Cube from '../../../components/Cube';
import DownArrow from './DownArrow';

export const Hero = () => (
  <div className="section c-hero">
    <div className="single single-measure c-hero__content">
      <Cube faceSize={20} above start={{x: '10%', y: '60%', rotateX: 80, rotateY: 45, rotateZ: -90}} end={{x: '-=50', y: '+=50'}} />
      <Cube faceSize={15} above start={{x: '70%', y: '70%', rotateX: 47, rotateY: 57, rotateZ: 11}} end={{x: '-=50', y: '+=50'}} />
      <Cube faceSize={20} above start={{x: '70%', y: '20%', rotateX: 76, rotateY: 22, rotateZ: 34}} end={{x: '-=50', y: '+=50'}} />
      <Cube faceSize={15} above start={{x: '25%', y: '15%', rotateX: 40, rotateY: 90, rotateZ: 90}} end={{x: '+=50', y: '-=50'}} />
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
