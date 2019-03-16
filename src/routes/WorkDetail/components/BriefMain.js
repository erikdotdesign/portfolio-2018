import React from 'react';
import PropTypes from 'prop-types';
import BlockReveal from '../../../components/BlockReveal';
import BriefHeader from './BriefHeader';
import BriefLinks from './BriefLinks';

const BriefMain = ({ brief, className, forcePlay, links, blockId }) => (
  <section className='section'>
    <div className={`column c-work-brief__text ${className}`}>
      <BriefHeader forcePlay={forcePlay} blockId={blockId} />
      {
        brief.map((paragraph, index) =>
          <p key={index}>
            <BlockReveal
              forcePlay={forcePlay}
              blockId={blockId}
              inline={false}
              delay={0}
              duration={0.5}
              direction={
                index % 2 === 0
                ? 'leftRight'
                : 'rightLeft'}>
              {paragraph}
            </BlockReveal>
          </p>
        )
      }
      {
        links
        ? <BriefLinks links={links} forcePlay={forcePlay} blockId={blockId} />
        : null
      }
    </div>
  </section>
);

BriefMain.propTypes = {
  brief: PropTypes.array,
  className: PropTypes.string,
  blockId: PropTypes.string,
  forcePlay: PropTypes.bool,
  links: PropTypes.array
};

export default BriefMain;
