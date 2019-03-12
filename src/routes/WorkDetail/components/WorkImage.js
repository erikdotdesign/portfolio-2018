import React from 'react';
import PropTypes from 'prop-types';
import BlockReveal from '../../../components/BlockReveal';
import HalftoneCharacter from '../../../components/HalftoneCharacter';
import VisibilitySensor from 'react-visibility-sensor';
import LazyImage from '../../../components/LazyImage';
import Scrambler from '../../../components/Scrambler';

const WorkImage = ({ image, index, blockId }) => (
  <VisibilitySensor delayedCall>
    {({ isVisible }) =>
      <figure className='c-work-image'>
        <div className='halftone-wrap'>
          <HalftoneCharacter
            className='c-work-item__index'
            character={`0${index + 1}`} />
        </div>
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
            <Scrambler
              forcePlay={isVisible}
              blockId={blockId}
              text={image.alt}
              duration={0.5}
              delay={0.6}>
              {image.alt}
            </Scrambler>
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
