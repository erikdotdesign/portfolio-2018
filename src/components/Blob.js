import React from 'react';
import PropTypes from 'prop-types';
import GooFilter from './GooFilter';

class Blob extends React.Component {
  render() {
    const { id, className, opacity, x, y, filter, character, circle } = this.props;
    return (
      <g id={id}
         className={className}
         filter={`url(#${id}-filter)`}
         transform={`matrix(1, 0, 0, 1, ${x}, ${y})`}
         style={{opacity}}>

        <text className='character'
              fontFamily={character.fontFamily}
              fontSize={character.fontSize}
              fontWeight={character.fontWeight}
              fill={character.fill}
              style={{opacity}}>

          <tspan x={character.x} y={character.y}>
            {character.character}
          </tspan>

        </text>

        <circle className='blob-circle'
                cx={circle.cx}
                cy={circle.cy}
                r={circle.r}
                fill={circle.fill}>
        </circle>

        <GooFilter id={`${id}-filter`}
                   className='blob-filter'
                   feGaussianBlur={{
                    stdDeviation: filter.feGaussianBlur,
                    result: `${id}-filter-feGaussianBlur`}}
                   feColorMatrix={{
                    values: filter.feColorMatrix,
                    result: `${id}-filter-feColorMatrix`}} />
      </g>
    );
  }
}

Blob.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  opacity: PropTypes.number.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  filter: PropTypes.shape({
    feColorMatrix: PropTypes.string.isRequired,
    feGaussianBlur: PropTypes.number.isRequired
  }),
  character: PropTypes.shape({
    fontFamily: PropTypes.string.isRequired,
    opacity: PropTypes.number.isRequired,
    fontSize: PropTypes.number.isRequired,
    fontWeight: PropTypes.string.isRequired,
    fill: PropTypes.string.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    character: PropTypes.string.isRequired
  }),
  circle: PropTypes.shape({
    cx: PropTypes.number.isRequired,
    cy: PropTypes.number.isRequired,
    r: PropTypes.number.isRequired,
    fill: PropTypes.string.isRequired
  })
};

export default Blob;
