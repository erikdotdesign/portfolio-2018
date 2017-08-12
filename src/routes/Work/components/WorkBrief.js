import React from 'react';
import PropTypes from 'prop-types';
import VisibilitySensor from 'react-visibility-sensor';
import BriefSidebar from './BriefSidebar';
import BriefDuo from './BriefDuo';
import BriefMain from './BriefMain';
import BriefImages from './BriefImages';

export const WorkBrief = ({ brief, title, mobile, tablet, hex, links, images }) => (
  <VisibilitySensor onChange={this.onChange} partialVisibility delayedCall>
    {({ isVisible }) =>
      <main role='main'>
        <section className='section'>
          <div className='columns-flush'>
            {
              mobile
              ? <BriefSidebar
                  halftoneChar={title.slice(0, 2)}
                  image={mobile}
                  forcePlay={isVisible} />
              : <BriefDuo
                  halftoneChar={title.slice(0, 2)}
                  image={tablet}
                  forcePlay={isVisible} />
            }
            <BriefMain
              className={mobile ? 'column--main' : 'column--duo'}
              brief={brief}
              forcePlay={isVisible}
              hex={hex}
              links={links} />
          </div>
        </section>
        <BriefImages
          images={images}
          hex={hex} />
      </main>
    }
  </VisibilitySensor>
);

WorkBrief.propTypes = {
  brief: PropTypes.array,
  title: PropTypes.string,
  mobile: PropTypes.object,
  tablet: PropTypes.object,
  hex: PropTypes.string,
  links: PropTypes.array,
  images: PropTypes.array
};

export default WorkBrief;
