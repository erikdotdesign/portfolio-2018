import React from 'react';
import PropTypes from 'prop-types';
import BlockReveal from './BlockReveal';

export const DownArrow = ({ blockRevealColor }) => (
  <div className='c-down-arrow'>
    <BlockReveal inline={false} blockColor={blockRevealColor} textShift delay={0.2} duration={0.5} direction='topBottom'>
      <div className='c-down-arrow__svg c-down-arrow__svg--lg'>
        <svg width='36px' height='64px' viewBox='0 0 36 64' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink'>
          <path fill='#000000' d='M17,60.0857864 L1.70710678,44.7928932 L0.292893219,46.2071068 L18,63.9142136 L35.7071068,46.2071068 L34.2928932,44.7928932 L19,60.0857864 L19,0.5 L17,0.5 L17,60.0857864 Z' />
        </svg>
      </div>
      <div className='c-down-arrow__svg c-down-arrow__svg--sm'>
        <svg width='20px' height='36px' viewBox='0 0 20 36' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink'>
          <path fill='#000000' d='M8.77419355,31.3277219 L1.70710678,24.2606352 L0.292893219,25.6748487 L9.77419355,35.156149 L19.2554939,25.6748487 L17.8412803,24.2606352 L10.7741935,31.3277219 L10.7741935,0.258064516 L8.77419355,0.258064516 L8.77419355,31.3277219 Z' />
        </svg>
      </div>
    </BlockReveal>
  </div>
);

DownArrow.propTypes = {
  blockRevealColor: PropTypes.string
};

export default DownArrow;
