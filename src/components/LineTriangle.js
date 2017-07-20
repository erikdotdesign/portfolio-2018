import React from 'react';
import PropTypes from 'prop-types';

class LineTriangle extends React.Component {
  render() {
    const { id, d, stroke, strokeWidth } = this.props;
    return (
      <path id={id}
            d={d}
            stroke={stroke}
            strokeWidth={strokeWidth}></path>
    );
  }
}

LineTriangle.propTypes = {
  id: PropTypes.string,
  d: PropTypes.string,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.number
};

export default LineTriangle;
