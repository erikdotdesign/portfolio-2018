import React from 'react';
import PropTypes from 'prop-types';
import VisibilitySensor from 'react-visibility-sensor';
import BriefMain from './BriefMain';
import BriefImages from './BriefImages';

const WorkBrief = ({ brief, links, images, blockId }) => (
  <VisibilitySensor partialVisibility delayedCall>
    {({ isVisible }) =>
      <main role='main'>
        <BriefMain
          className='single'
          brief={brief}
          blockId={blockId}
          forcePlay={isVisible}
          links={links} />
        <BriefImages
          images={images}
          blockId={blockId} />
      </main>
    }
  </VisibilitySensor>
);

WorkBrief.propTypes = {
  brief: PropTypes.array,
  blockId: PropTypes.string,
  links: PropTypes.array,
  images: PropTypes.array
};

export default WorkBrief;
