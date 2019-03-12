import React from 'react';
import PropTypes from 'prop-types';
import WorkImage from './WorkImage';
import WorkGif from './WorkGif';

const BriefImages = ({ images, hex, blockId }) => (
  <section className='section single'>
    {
      images.map((image, index) =>
        typeof (image.cover) !== 'undefined'
        ? <WorkGif gif={image} key={index} index={index} blockId={blockId} />
        : <WorkImage image={image} key={index} index={index} blockId={blockId} />
      )
    }
  </section>
);

BriefImages.propTypes = {
  images: PropTypes.array,
  blockId: PropTypes.string,
  hex: PropTypes.string
};

export default BriefImages;
