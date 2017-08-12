import React from 'react';
import PropTypes from 'prop-types';

export const HalftoneCharacter = ({ className, character }) => (
  <h1 className={`typeset c-halftone-character ${className ? className : ''}`}>
    <span className='c-halftone-character__halftone' />
    {character}
  </h1>
);

HalftoneCharacter.propTypes = {
  className: PropTypes.string,
  character: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};

export default HalftoneCharacter;
