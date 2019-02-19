import React from 'react';
import PropTypes from 'prop-types';
import BlockReveal from '../../../components/BlockReveal';
import HalftoneCharacter from '../../../components/HalftoneCharacter';
import Scrambler from '../../../components/Scrambler';
import LazyTablet from '../../../components/LazyTablet';
import VisibilitySensor from 'react-visibility-sensor';
import OutlineButton from '../../../components/OutlineButton';

const WorkItem = ({ work, index, blockId }) => (
  <VisibilitySensor partialVisibility delayedCall>
    {({ isVisible }) =>
      <article className='section c-work-item' role='article'>
        <div className='columns-flush'>
          <div className='column column--duo'>
            <LazyTablet
              className='c-tablet__warp--left'
              image={work.tablet}
              blockId={blockId}
              forcePlay={isVisible}
              index={index} />
          </div>
          <div className='column column--duo column--mg-b'>
            {/* <HalftoneCharacter
              className='c-work-item__index'
              character={index + 1} /> */}
            <h1>
              <BlockReveal
                inline={false}
                forcePlay={isVisible}
                blockId={blockId}
                delay={0}
                duration={0.5}
                direction={
                index % 2 === 0
                ? 'leftRight'
                : 'rightLeft'}>
                <Scrambler
                  forcePlay={isVisible}
                  duration={1}
                  blockId={blockId}
                  delay={0.5}
                  text={work.name}>
                  {work.name}
                </Scrambler>
              </BlockReveal>
            </h1>
            <ul className='c-work-item__tag-list'>
              <BlockReveal
                inline={false}
                forcePlay={isVisible}
                blockId={blockId}
                delay={0.1}
                duration={0.5}
                direction={
                index % 2 === 0
                ? 'rightLeft'
                : 'leftRight'}>
                {
                  work.tags.map((tag, index) =>
                    <li className={'c-work-item__tag'} key={index}>
                      <Scrambler
                        forcePlay={isVisible}
                        blockId={blockId}
                        header
                        text={index === work.tags.length - 1 ? tag : `${tag},\u00A0`}
                        duration={0.5}
                        delay={0.75 + (0.1 * index)}>
                        {
                          index === work.tags.length - 1 ? tag : `${tag},\u00A0`
                        }
                      </Scrambler>
                    </li>
                  )
                }
              </BlockReveal>
            </ul>
            <p>
              <BlockReveal
                inline={false}
                forcePlay={isVisible}
                blockId={blockId}
                delay={0.2}
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
              delay={0.4}
              router
              link={`/work/${work.id}`}
              blockId={blockId} />
          </div>
        </div>
      </article>
    }
  </VisibilitySensor>
);

WorkItem.propTypes = {
  work: PropTypes.object,
  blockId: PropTypes.string,
  index: PropTypes.number
};

export default WorkItem;
