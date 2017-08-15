import React from 'react';
import PropTypes from 'prop-types';
import Phone from '../../../components/Phone';
import BriefAside from './BriefAside';

const BriefSidebar = ({ halftoneChar, image, forcePlay, blockId }) => (
  <BriefAside
    className='column--sidebar'
    halftoneChar={halftoneChar}>
    <Phone
      image={image}
      blockId={blockId}
      forcePlay={forcePlay} />
  </BriefAside>
);

BriefSidebar.propTypes = {
  halftoneChar: PropTypes.string,
  image: PropTypes.object,
  forcePlay: PropTypes.bool
};

export default BriefSidebar;
