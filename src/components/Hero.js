import React from 'react';
import PropTypes from 'prop-types';
import DownArrow from './DownArrow';

const Hero = ({ arrowRevealColor, className, children }) => (
  <header className={`section c-hero ${className}`} role='banner'>
    {children}
    <DownArrow />
  </header>
);

Hero.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Hero;
