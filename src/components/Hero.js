import React from 'react';
import PropTypes from 'prop-types';
import DownArrow from './DownArrow';
import HalftoneCharacter from './HalftoneCharacter';

const Hero = ({ arrowRevealColor, className, rightHalftoneText, children }) => (
  <header className={`section c-hero ${className}`} role='banner'>
    <HalftoneCharacter
      className='c-hero__rightHalftone'
      character={rightHalftoneText} />
    {children}
    <DownArrow />
  </header>
);

Hero.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  rightHalftoneText: PropTypes.string
};

export default Hero;
