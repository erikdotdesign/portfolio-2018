import React from 'react';
import PropTypes from 'prop-types';
import BlockReveal from '../../../components/BlockReveal';
import Hero from '../../../components/Hero';
import VisibilitySensor from 'react-visibility-sensor';

const WorkHero = ({ year, hex, title, tags, blockId }) => (
  <VisibilitySensor partialVisibility delayedCall>
    {({ isVisible }) =>
      <Hero>
        <div className='single single-measure c-work-hero__content'>
          <h1 className='epsilon--display-condensed'>
            <BlockReveal
              inline={false}
              forcePlay={isVisible}
              blockId={blockId}
              blockColor={hex}
              header
              delay={0}
              duration={0.5}>
              {title}
            </BlockReveal>
          </h1>
          <ul className='c-work-hero__tag-list'>
            <BlockReveal
              inline={false}
              forcePlay={isVisible}
              blockColor={hex}
              header
              blockId={blockId}
              delay={0.2}
              duration={0.5}
              direction='rightLeft'>
              {
              tags.map((tag, index) =>
                <li className={'c-work-hero__tag'} key={index}>
                  {
                    index === tags.length - 1
                    ? tag
                    : `${tag},\u00A0`
                  }
                </li>
              )
            }
            </BlockReveal>
          </ul>
        </div>
      </Hero>
    }
  </VisibilitySensor>
);

WorkHero.propTypes = {
  title: PropTypes.string,
  tags: PropTypes.array,
  blockId: PropTypes.string,
  hex: PropTypes.string,
  year: PropTypes.string
};

export default WorkHero;