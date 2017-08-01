import React from 'react';
import PropTypes from 'prop-types';

class HalftoneCharacter extends React.Component {
  render () {
    return (
      <h1 className={`typeset c-halftone-character ${this.props.className}`}>{this.props.character}</h1>
    );
  }
}

HalftoneCharacter.propTypes = {

};

export default HalftoneCharacter;
