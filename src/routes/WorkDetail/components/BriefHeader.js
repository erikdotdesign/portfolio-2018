import React from 'react';
import PropTypes from 'prop-types';
import Scrambler from '../../../components/Scrambler';
import BlockReveal from '../../../components/BlockReveal';

const BriefHeader = ({ forcePlay, blockId }) => (
  <h3 className='top-stroke--strong top-stroke--inline'>
    <BlockReveal
      forcePlay={forcePlay}
      blockId={blockId}
      inline={false}
      delay={0}
      duration={0.5}
      direction='rightLeft'>
      <Scrambler
        forcePlay={forcePlay}
        blockId={blockId}
        duration={0.5}
        delay={0.6}
        text='Brief'>
        Brief
      </Scrambler>
    </BlockReveal>
  </h3>
);

BriefHeader.propTypes = {
  blockId: PropTypes.string,
  forcePlay: PropTypes.bool
};

export default BriefHeader;
