import React from 'react';
import PropTypes from 'prop-types';
import Tablet from '../../../components/Tablet';
import BriefAside from './BriefAside';

const BriefDuo = ({ halftoneChar, image, forcePlay, blockId }) => (
  <BriefAside
    className='column--duo'
    halftoneChar={halftoneChar}>
    <Tablet
      className='c-tablet__warp--left'
      image={image}
      blockId={blockId}
      forcePlay={forcePlay}
      index={0} />
  </BriefAside>
);

BriefDuo.propTypes = {
  halftoneChar: PropTypes.string,
  blockId: PropTypes.string,
  image: PropTypes.object,
  forcePlay: PropTypes.bool
};

export default BriefDuo;
