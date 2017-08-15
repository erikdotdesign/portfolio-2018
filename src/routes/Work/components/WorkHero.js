import React from 'react';
import PropTypes from 'prop-types';
import BlockReveal from '../../../components/BlockReveal';
import Hero from '../../../components/Hero';
import VisibilitySensor from 'react-visibility-sensor';
import { Link } from 'react-router';

const WorkHero = ({ year, hex, title, tags, blockId }) => (
  <VisibilitySensor partialVisibility delayedCall>
    {({ isVisible }) =>
      <Hero rightHalftoneText={year} arrowRevealColor={hex} blockId={blockId}>
        <div className='single single-measure c-work-hero__content'>
          <h1 className='epsilon--display-condensed'>
            <BlockReveal
              inline={false}
              forcePlay={isVisible}
              blockId={blockId}
              blockColor={hex}
              header={true}
              delay={0}
              textShift
              duration={0.5}>
              {title}
            </BlockReveal>
          </h1>
          <ul className='c-work-hero__tag-list'>
            <BlockReveal
              inline={false}
              forcePlay={isVisible}
              blockColor={hex}
              header={true}
              blockId={blockId}
              delay={0.2}
              textShift
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
        <div className='c-work-hero__overlay' style={{ background: hex }} />
      </Hero>
    }
  </VisibilitySensor>
);

WorkHero.propTypes = {
  title: PropTypes.string,
  tags: PropTypes.array,
  hex: PropTypes.string,
  year: PropTypes.string
};

export default WorkHero;
