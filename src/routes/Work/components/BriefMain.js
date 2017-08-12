import React from 'react';
import PropTypes from 'prop-types';
import BlockReveal from '../../../components/BlockReveal';
import BriefHeader from './BriefHeader';
import BriefLinks from './BriefLinks';

export const BriefMain = ({ brief, className, forcePlay, hex, links }) => (
  <div className={`column c-work-brief__text ${className}`}>
    <BriefHeader hex={hex} forcePlay={forcePlay} />
    {
      brief.map((paragraph, index) =>
        <p key={index} className='c-block-reveal-wrap'>
          <BlockReveal
            blockColor={hex}
            forcePlay={forcePlay}
            inline={false}
            delay={0}
            textShift
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
      ? <BriefLinks links={links} hex={hex} forcePlay={forcePlay} />
      : null
    }
  </div>
);

BriefMain.propTypes = {
  brief: PropTypes.array,
  className: PropTypes.string,
  forcePlay: PropTypes.bool,
  hex: PropTypes.string,
  links: PropTypes.array
};

export default BriefMain;
