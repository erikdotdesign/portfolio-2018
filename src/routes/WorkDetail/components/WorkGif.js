import React from 'react';
import PropTypes from 'prop-types';
import VisibilitySensor from 'react-visibility-sensor';
import BlockReveal from '../../../components/BlockReveal';
import LazyGif from '../../../components/LazyGif';

const WorkGif = ({ gif, index, blockId }) => (
  <VisibilitySensor delayedCall partialVisibility minTopValue={300}>
    {({ isVisible }) =>
      <figure className='c-work-gif'>
        <LazyGif forcePlay={isVisible} gif={gif} blockId={blockId} index={index} />
        <figcaption className='c-work-gif__caption'>
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
            {gif.alt}
          </BlockReveal>
        </figcaption>
      </figure>
    }
  </VisibilitySensor>
);

WorkGif.propTypes = {
  gif: PropTypes.object,
  blockId: PropTypes.string,
  index: PropTypes.number,
};

export default WorkGif;
