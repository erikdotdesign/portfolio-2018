import React from 'react';
import PropTypes from 'prop-types';
import Phone from '../../../components/Phone';
import BriefAside from './BriefAside';

export const BriefSidebar = ({ halftoneChar, image, forcePlay }) => (
  <BriefAside
    className='column--sidebar'
    halftoneChar={halftoneChar}>
    <Phone
      image={image}
      forcePlay={forcePlay} />
  </BriefAside>
);

BriefSidebar.propTypes = {
  halftoneChar: PropTypes.string,
  image: PropTypes.object,
  forcePlay: PropTypes.bool
};

export default BriefSidebar;
