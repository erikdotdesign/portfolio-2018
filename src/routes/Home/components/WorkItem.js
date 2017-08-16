import React from 'react';
import PropTypes from 'prop-types';
import BlockReveal from '../../../components/BlockReveal';
import HalftoneCharacter from '../../../components/HalftoneCharacter';
import Tablet from '../../../components/Tablet';
import VisibilitySensor from 'react-visibility-sensor';
import Button from '../../../components/Button';

const WorkItem = ({ work, index, blockId }) => (
  <VisibilitySensor partialVisibility delayedCall>
    {({ isVisible }) =>
      <article className='section c-work-item' role='article'>
        <div className='columns-flush'>
          <div className='column column--duo column--mg-b'>
            <HalftoneCharacter
              className='c-work-item__index'
              character={index + 1} />
            <h1>
              <BlockReveal
                inline={false}
                forcePlay={isVisible}
                blockId={blockId}
                blockColor={work.hex}
                delay={0}
                duration={0.5}
                direction={
                index % 2 === 0
                ? 'leftRight'
                : 'rightLeft'}>
                {work.name}
              </BlockReveal>
            </h1>
            <ul className='c-work-item__tag-list'>
              <BlockReveal
                inline={false}
                forcePlay={isVisible}
                blockId={blockId}
                blockColor={work.hex}
                delay={0.1}
                duration={0.5}
                direction={
                index % 2 === 0
                ? 'rightLeft'
                : 'leftRight'}>
                {
                  work.tags.map((tag, index) =>
                    <li className={'c-work-item__tag'} key={index}>
                      {
                        index === work.tags.length - 1
                        ? tag
                        : `${tag},\u00A0`
                      }
                    </li>
                  )
                }
              </BlockReveal>
            </ul>
            <p>
              <BlockReveal
                inline={false}
                forcePlay={isVisible}
                blockColor={work.hex}
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
            <BlockReveal
              inline={false}
              forcePlay={isVisible}
              blockId={blockId}
              blockColor={work.hex}
              delay={0.4}
              duration={0.5}
              direction={index % 2 === 0
              ? 'rightLeft'
              : 'leftRight'}>
              <Button
                text='Read more'
                router
                link={`/work/${work.id}`}
                blockId={blockId}
                hex={work.hex} />
            </BlockReveal>
          </div>
          <div className='column column--duo'>
            <HalftoneCharacter
              className='c-work-item__display-name'
              character={work.name.slice(0, 2)} />
            <Tablet
              className='c-tablet__warp--right'
              image={work.image}
              blockId={blockId}
              forcePlay={isVisible}
              index={index} />
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
