import React from 'react';
import PropTypes from 'prop-types';
import WorkImage from './WorkImage';
import WorkGif from './WorkGif';

export const BriefImages = ({ images, hex }) => (
  <section className='section single'>
    {
      images.map((image, index) =>
        typeof (image.cover) !== 'undefined'
        ? <WorkGif gif={image} key={index} index={index} hex={hex} />
        : <WorkImage image={image} key={index} index={index} hex={hex} />
      )
    }
  </section>
);

BriefImages.propTypes = {
  images: PropTypes.array,
  hex: PropTypes.string
};

export default BriefImages;
