import React from 'react';
import PropTypes from 'prop-types';
import BlockReveal from '../../../components/BlockReveal';

const BriefHeader = ({ forcePlay, hex, blockId }) => (
  <div>
    <h3 className='top-stroke--strong top-stroke--inline'>
      <BlockReveal
        blockColor={hex}
        forcePlay={forcePlay}
        blockId={blockId}
        inline={false}
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
  blockId: PropTypes.string,
  forcePlay: PropTypes.bool
};

export default BriefHeader;
