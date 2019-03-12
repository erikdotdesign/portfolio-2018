import React from 'react';
import PropTypes from 'prop-types';
import VisibilitySensor from 'react-visibility-sensor';
import BriefSidebar from './BriefSidebar';
import BriefDuo from './BriefDuo';
import BriefMain from './BriefMain';
import BriefImages from './BriefImages';

const WorkBrief = ({ brief, title, mobile, tablet, hex, links, images, blockId }) => (
  <VisibilitySensor partialVisibility delayedCall>
    {({ isVisible }) =>
      <main role='main'>
        <section className='section'>
          {/* <div className='columns-flush'>
            {
              mobile
              ? <BriefSidebar
                halftoneChar={title.slice(0, 2)}
                image={mobile}
                blockId={blockId}
                forcePlay={isVisible} />
              : <BriefDuo
                halftoneChar={title.slice(0, 2)}
                image={tablet}
                blockId={blockId}
                forcePlay={isVisible} />
            }
            <BriefMain
              className={mobile ? 'column--main' : 'column--duo'}
              brief={brief}
              blockId={blockId}
              forcePlay={isVisible}
              hex={hex}
              links={links} />
          </div> */}
          <BriefMain
            className='single'
            brief={brief}
            blockId={blockId}
            forcePlay={isVisible}
            hex={hex}
            links={links} />
        </section>
        <BriefImages
          images={images}
          blockId={blockId}
          hex={hex} />
      </main>
    }
  </VisibilitySensor>
);

WorkBrief.propTypes = {
  brief: PropTypes.array,
  title: PropTypes.string,
  mobile: PropTypes.object,
  blockId: PropTypes.string,
  tablet: PropTypes.object,
  hex: PropTypes.string,
  links: PropTypes.array,
  images: PropTypes.array
};

export default WorkBrief;
