import React from 'react';
import PropTypes from 'prop-types';
import halftone from '../routes/Home/assets/img/halftone.png';

class HalftoneCharacter extends React.Component {
  render () {
    return (
      <h1 className={`typeset c-halftone-character ${this.props.className}`}>
        <span className="c-halftone-character__halftone" style={{background: `url(${halftone})`}}></span>
        {this.props.character}
      </h1>
    );
  }
}

HalftoneCharacter.propTypes = {

};

export default HalftoneCharacter;
