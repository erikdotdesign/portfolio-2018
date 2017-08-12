import React from 'react';
import PropTypes from 'prop-types';
import BlockReveal from '../../../components/BlockReveal';
import HalftoneCharacter from '../../../components/HalftoneCharacter';
import VisibilitySensor from 'react-visibility-sensor';

export const WorkImage = ({ image, index, hex }) => (
  <VisibilitySensor partialVisibility delayedCall>
    {({ isVisible }) =>
      <div className='c-work-image'>
        <HalftoneCharacter
          className='c-work-item__index'
          character={index + 1} />
        <div className='c-work-image__aspect'>
          <BlockReveal
            blockColor={hex}
            forcePlay={isVisible}
            inline={false}
            textShift
            delay={0}
            duration={0.5}
            direction={
              index % 2 == 0
              ? 'leftRight'
              : 'rightLeft'}>
            {
              image.retina
              ? <img
                src={isVisible ? image.retina : null}
                alt={image.alt}
                srcSet={
                    `${image.url},
                    ${image.retina} 2x`} />
              : <img
                src={isVisible ? image.url : null}
                alt={image.alt} />
            }
          </BlockReveal>
          <div className='c-work-image__bg' />
        </div>
        <p className='c-work-image__caption c-block-reveal-wrap top-stroke--strong top-stroke--inline'>
          <BlockReveal
            blockColor={hex}
            forcePlay={isVisible}
            inline={false}
            textShift
            delay={0}
            duration={0.5}
            direction={
              index % 2 == 0
              ? 'rightLeft'
              : 'leftRight'}>
            {image.alt}
          </BlockReveal>
        </p>
      </div>
    }
  </VisibilitySensor>
);

WorkImage.propTypes = {
  image: PropTypes.object,
  index: PropTypes.number,
  hex: PropTypes.string
};

export default WorkImage;
