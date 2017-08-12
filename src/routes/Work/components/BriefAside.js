import React from 'react';
import PropTypes from 'prop-types';
import HalftoneCharacter from '../../../components/HalftoneCharacter';

export const BriefAside = ({ children, className, halftoneChar }) => (
  <aside className={`column ${className}`} role='complementary'>
    <HalftoneCharacter
      className='c-work-item__index c-work-item__brief'
      character={halftoneChar} />
    {children}
  </aside>
);

BriefAside.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  halftoneChar: PropTypes.string
};

export default BriefAside;
