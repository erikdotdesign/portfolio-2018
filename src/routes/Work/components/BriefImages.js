import React from 'react';
import PropTypes from 'prop-types';
import WorkImage from './WorkImage';
import WorkGif from './WorkGif';

const BriefImages = ({ images, hex, blockId }) => (
  <section className='section single'>
    {
      images.map((image, index) =>
        typeof (image.cover) !== 'undefined'
        ? <WorkGif gif={image} key={index} index={index} hex={hex} blockId={blockId} />
        : <WorkImage image={image} key={index} index={index} hex={hex} blockId={blockId} />
      )
    }
  </section>
);

BriefImages.propTypes = {
  images: PropTypes.array,
  hex: PropTypes.string
};

export default BriefImages;
