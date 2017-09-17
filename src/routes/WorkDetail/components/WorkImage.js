import React from 'react';
import PropTypes from 'prop-types';
import BlockReveal from '../../../components/BlockReveal';
import HalftoneCharacter from '../../../components/HalftoneCharacter';
import VisibilitySensor from 'react-visibility-sensor';
import LazyImage from '../../../components/LazyImage';

const WorkImage = ({ image, index, hex, blockId }) => (
  <VisibilitySensor partialVisibility delayedCall>
    {({ isVisible }) =>
      <figure className='c-work-image'>
        <HalftoneCharacter
          className='c-work-item__index'
          character={index + 1} />
        <LazyImage imgSrc={image.url} retina={image.retina} isVisible={isVisible} imgAlt={image.alt} blockId={blockId} hex={hex} index={index} />
        <figcaption className='c-work-image__caption top-stroke--strong top-stroke--inline'>
          <BlockReveal
            blockColor={hex}
            forcePlay={isVisible}
            blockId={blockId}
            inline={false}
            delay={0}
            duration={0.5}
            direction={
              index % 2 === 0
              ? 'rightLeft'
              : 'leftRight'}>
            {image.alt}
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
  hex: PropTypes.string
};

export default WorkImage;
