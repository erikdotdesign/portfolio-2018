import React from 'react';
import PropTypes from 'prop-types';
import VisibilitySensor from 'react-visibility-sensor';
import WorkItem from '../../Home/components/WorkItem';
import BlockReveal from '../../../components/BlockReveal';
import Scrambler from '../../../components/Scrambler';
import DownArrow from '../../../components/DownArrow';

const BriefFooter = ({ blockId, nextWork, prevWork }) => (
  <VisibilitySensor partialVisibility delayedCall>
    {({ isVisible }) =>
      <div>
        <div className='section c-brief-footer'>
          <div className='single c-brief-footer__header'>
            <h1 className='epsilon--display-condensed'>
              <BlockReveal
                inline={false}
                forcePlay={isVisible}
                blockId={blockId}
                delay={0}
                duration={0.5}
                direction={'topBottom'}>
                <Scrambler
                  forcePlay={isVisible}
                  duration={1}
                  blockId={blockId}
                  delay={0.5}
                  text={'More Work'}>
                  More Work
                </Scrambler>
              </BlockReveal>
            </h1>
          </div>
          <div className='c-brief-footer-arrow'>
            <DownArrow forcePlay={isVisible} blockId={blockId} />
          </div>
        </div>
        <WorkItem work={nextWork} index={0} workDetail='Next' blockId={blockId} />
        <WorkItem work={prevWork} index={1} workDetail='Prev' blockId={blockId} />
      </div>
    }
  </VisibilitySensor>
);

BriefFooter.propTypes = {
  blockId: PropTypes.string,
  nextWork: PropTypes.object,
  prevWork: PropTypes.object
};

export default BriefFooter;
