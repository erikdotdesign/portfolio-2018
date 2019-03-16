import React from 'react';
import PropTypes from 'prop-types';
import VisibilitySensor from 'react-visibility-sensor';
import BlockReveal from '../../../components/BlockReveal';
import LazyImage from '../../../components/LazyImage';

const WorkImage = ({ image, index, blockId }) => (
  <VisibilitySensor delayedCall partialVisibility minTopValue={300}>
    {({ isVisible }) =>
      <figure className='c-work-image'>
        <LazyImage
          imgSrc={image.url}
          retina={image.retina}
          forcePlay={isVisible}
          imgAlt={image.alt}
          blockId={blockId}
          index={index} />
        <figcaption className='c-work-image__caption'>
          <BlockReveal
            forcePlay={isVisible}
            blockId={blockId}
            inline={false}
            delay={0}
            duration={0.5}
            direction={
              index % 2 === 0
              ? 'rightLeft'
              : 'leftRight'}>
            {`${index + 1}. ${image.alt}`}
          </BlockReveal>
        </figcaption>
      </figure>
    }
  </VisibilitySensor>
);

WorkImage.propTypes = {
  image: PropTypes.object,
  blockId: PropTypes.string,
  index: PropTypes.number,
};

export default WorkImage;
