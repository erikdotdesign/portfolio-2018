import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../../components/Button';
import BlockReveal from '../../../components/BlockReveal';

const BriefLinks = ({ links, hex, forcePlay, blockId }) => (
  <div>
    {
      links.map((link, index) =>
        <BlockReveal
          key={index}
          blockColor={hex}
          forcePlay={forcePlay}
          blockId={blockId}
          inline={false}
          delay={0}
          duration={0.5}
          direction={
            index % 2 === 0
            ? 'rightLeft'
            : 'leftRight'}>
          <Button
            className='button button--outline'
            link={link.url}
            blockId={blockId}
            forcePlay={forcePlay}
            text={link.text}
            hex={hex} />
        </BlockReveal>
      )
    }
  </div>
);

BriefLinks.propTypes = {
  links: PropTypes.array,
  blockId: PropTypes.string,
  forcePlay: PropTypes.bool,
  hex: PropTypes.string
};

export default BriefLinks;
