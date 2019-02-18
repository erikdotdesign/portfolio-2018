import React from 'react';
import PropTypes from 'prop-types';
import DownArrow from './DownArrow';

const Hero = ({ className, rightHalftoneText, children, forcePlay }) => (
  <header className={`section c-hero ${className}`} role='banner'>
    {children}
    <DownArrow forcePlay={forcePlay} />
  </header>
);

Hero.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  forcePlay: PropTypes.bool
};

export default Hero;
