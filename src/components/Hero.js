import React from 'react';
import PropTypes from 'prop-types';
import DownArrow from './DownArrow';
import HalftoneCharacter from './HalftoneCharacter';

const Hero = ({ arrowRevealColor, className, children, rightHalftoneText, blockId }) => (
  <header className={`section c-hero ${className}`} role='banner'>
    <HalftoneCharacter
      className='c-hero__rightHalftone'
      character={rightHalftoneText} />
    {children}
    <DownArrow blockRevealColor={arrowRevealColor} blockId={blockId} />
  </header>
);

Hero.propTypes = {
  arrowRevealColor: PropTypes.string,
  className: PropTypes.string,
  blockId: PropTypes.string,
  children: PropTypes.node,
  rightHalftoneText: PropTypes.string
};

export default Hero;
