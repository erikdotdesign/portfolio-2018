import React from 'react';
import PropTypes from 'prop-types';
import HalftoneCharacter from '../../../components/HalftoneCharacter';

const BriefAside = ({ children, className, halftoneChar }) => (
  <aside className={`column c-work-brief__aside ${className}`} role='complementary'>
    <div className='halftone-wrap'>
      <HalftoneCharacter
        className='c-work-item__index'
        character={halftoneChar} />
    </div>
    {children}
  </aside>
);

BriefAside.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  halftoneChar: PropTypes.string
};

export default BriefAside;
