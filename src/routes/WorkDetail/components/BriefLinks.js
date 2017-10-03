import React from 'react';
import PropTypes from 'prop-types';
import OutlineButton from '../../../components/OutlineButton';
import BlockReveal from '../../../components/BlockReveal';

const BriefLinks = ({ links, forcePlay, blockId }) => (
  <div>
    {
      links.map((link, index) =>
        <OutlineButton
          key={index}
          link={link.url}
          blockId={blockId}
          forcePlay={forcePlay}
          text={link.text} />
      )
    }
  </div>
);

BriefLinks.propTypes = {
  links: PropTypes.array,
  blockId: PropTypes.string,
  forcePlay: PropTypes.bool,
};

export default BriefLinks;
