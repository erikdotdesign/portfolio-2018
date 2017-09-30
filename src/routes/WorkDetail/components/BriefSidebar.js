import React from 'react';
import PropTypes from 'prop-types';
import LazyPhone from '../../../components/LazyPhone';
import BriefAside from './BriefAside';

const BriefSidebar = ({ halftoneChar, image, forcePlay, blockId }) => (
  <BriefAside
    className='column--sidebar'
    halftoneChar={halftoneChar}>
    <LazyPhone
      image={image}
      blockId={blockId}
      forcePlay={forcePlay} />
  </BriefAside>
);

BriefSidebar.propTypes = {
  halftoneChar: PropTypes.string,
  blockId: PropTypes.string,
  image: PropTypes.object,
  forcePlay: PropTypes.bool
};

export default BriefSidebar;
