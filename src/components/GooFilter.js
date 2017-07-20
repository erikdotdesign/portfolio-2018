import React from 'react';
import PropTypes from 'prop-types';

class GooFilter extends React.Component {
  render() {
    const {id, feGaussianBlur, feColorMatrix, className} = this.props;
    return (
      <filter id={id}>
        <feGaussianBlur in="SourceGraphic"
                        className={className}
                        stdDeviation={feGaussianBlur.stdDeviation}
                        result={feGaussianBlur.result} />

        <feColorMatrix in={feGaussianBlur.result}
                       mode="matrix"
                       values={feColorMatrix.values}
                       result={feColorMatrix.result} />

        <feComposite in="SourceGraphic"
                     in2={feColorMatrix.result}
                     operator="atop" />
      </filter>
    );
  }
}

GooFilter.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  feGaussianBlur: PropTypes.shape({
    stdDeviation: PropTypes.number.isRequired,
    result: PropTypes.string.isRequired
  }),
  feColorMatrix: PropTypes.shape({
    values: PropTypes.string.isRequired,
    result: PropTypes.string.isRequired
  })
};

export default GooFilter;
