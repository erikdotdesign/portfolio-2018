import React from 'react';
import PropTypes from 'prop-types';
import VisibilitySensor from 'react-visibility-sensor';
import BlockReveal from '../../../components/BlockReveal';
import HalftoneCharacter from '../../../components/HalftoneCharacter';
import Scrambler from '../../../components/Scrambler';
import LazyTablet from '../../../components/LazyTablet';
import OutlineButton from '../../../components/OutlineButton';

const WorkItem = ({ work, index, workDetail }) => (
  <VisibilitySensor delayedCall partialVisibility minTopValue={300}>
    {({isVisible}) =>
      <article className='section c-work-item' role='article'>
        <div className='columns-flush'>
          <div className='column column--duo column--tablet'>
            <div className='halftone-wrap'>
              <HalftoneCharacter
                className='c-work-item__index'
                character={workDetail ? `${workDetail.slice(0, 2)}` : `0${index + 1}`} />
            </div>
            <LazyTablet
              className='c-tablet__warp--left'
              image={work.tablet}
              blockId={work.id}
              forcePlay={isVisible}
              index={index} />
          </div>
          <div className='column column--duo column--content'>
            <h6 className='c-work-item__meta'>
              <BlockReveal
                inline={false}
                forcePlay={isVisible}
                blockId={work.id}
                delay={0}
                duration={0.5}
                direction={
                index % 2 === 0
                ? 'rightLeft'
                : 'leftRight'}>
                <Scrambler
                  forcePlay={isVisible}
                  blockId={work.id}
                  text={workDetail ? `${workDetail} • ${work.year}` : `0${index + 1} • ${work.year}`}
                  duration={1}
                  delay={0.50}>
                  {workDetail ? `${workDetail} • ${work.year}` : `0${index + 1} • ${work.year}`}
                </Scrambler>
              </BlockReveal>
            </h6>
            <h1>
              <BlockReveal
                inline={false}
                forcePlay={isVisible}
                blockId={work.id}
                delay={0.1}
                duration={0.5}
                direction={
                index % 2 === 0
                ? 'leftRight'
                : 'rightLeft'}>
                <Scrambler
                  forcePlay={isVisible}
                  duration={1}
                  blockId={work.id}
                  delay={0.6}
                  text={work.name}>
                  {work.name}
                </Scrambler>
              </BlockReveal>
            </h1>
            <h3 className='c-work-item__tag-list'>
              <BlockReveal
                inline={false}
                forcePlay={isVisible}
                blockId={work.id}
                delay={0.15}
                duration={0.5}
                direction={
                index % 2 === 0
                ? 'rightLeft'
                : 'leftRight'}>
                <Scrambler
                  forcePlay={isVisible}
                  blockId={work.id}
                  text={work.tags.join(', ')}
                  duration={1}
                  delay={0.65}>
                  {work.tags.join(', ')}
                </Scrambler>
              </BlockReveal>
            </h3>
            <p>
              <BlockReveal
                inline={false}
                forcePlay={isVisible}
                blockId={work.id}
                delay={0.20}
                duration={0.5}
                direction={
                index % 2 === 0
                ? 'leftRight'
                : 'rightLeft'}>
                {work.snippet}
              </BlockReveal>
            </p>
            <OutlineButton
              text='Read More'
              forcePlay={isVisible}
              router
              link={`/work/${work.id}`}
              blockId={work.id} />
          </div>
        </div>
      </article>
    }
  </VisibilitySensor>
)

WorkItem.propTypes = {
  work: PropTypes.object,
  index: PropTypes.number,
  workDetail: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};

export default WorkItem;
