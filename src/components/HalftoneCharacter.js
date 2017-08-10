import React from 'react';
import PropTypes from 'prop-types';

class HalftoneCharacter extends React.Component {
  render () {
    return (
      <h1 className={`typeset c-halftone-character ${this.props.className ? this.props.className : null}`}>
        <span className="c-halftone-character__halftone"></span>
        {this.props.character}
      </h1>
    );
  }
}

HalftoneCharacter.propTypes = {

};

export default HalftoneCharacter;
