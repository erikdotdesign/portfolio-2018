import React from 'react';
import PropTypes from 'prop-types';
import BlockReveal from '../../../components/BlockReveal';

const BriefHeader = ({ forcePlay, hex }) => (
  <div>
    <h3 className='top-stroke--strong top-stroke--inline c-block-reveal-wrap'>
      <BlockReveal
        blockColor={hex}
        forcePlay={forcePlay}
        inline={false}
        textShift
        delay={0}
        duration={0.5}
        direction='rightLeft'>
        Brief
      </BlockReveal>
    </h3>
  </div>
);

BriefHeader.propTypes = {
  hex: PropTypes.string,
  forcePlay: PropTypes.bool
};

export default BriefHeader;
