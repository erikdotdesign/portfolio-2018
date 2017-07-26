import React from 'react';
import PropTypes from 'prop-types';
import BlockReveal from '../../../components/BlockReveal';

class DownArrow extends React.Component {
  render () {
    return (
      <div className="c-down-arrow">
        <BlockReveal inline={true} delay={1} duration={0.5} direction="topBottom">
          <svg width="44px" height="60px" viewBox="0 0 44 60" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <path d="M24.8465491,60 L44,40.1673384 L41.1742465,37.2413793 L23.9773139,55.0481415 L23.9773139,0 L19.9810949,0 L19.9810949,55.0050754 L2.82575354,37.2413793 L0,40.1673384 L19.1534509,60 L24.8465491,60 Z"></path>
          </svg>
        </BlockReveal>
      </div>
    );
  }
}

DownArrow.propTypes = {

};

export default DownArrow;
