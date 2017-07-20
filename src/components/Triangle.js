import React from 'react';
import PropTypes from 'prop-types';

class Triangle extends React.Component {
  render() {
    const { id, opacity } = this.props;
    return (
      <g id={id}
         style={{opacity}}>
        <use fill='black'
             fillOpacity='1'
             filter={`url(#${id}-filter)`}
             xlinkHref={`#${id}-path`}></use>
        <use fill={`url(#${id}-gradient)`}
             fillRule='evenodd'
             xlinkHref={`#${id}-path`}></use>
        <path d='M29,8 L519,8 L29,498 L29,8 Z M49.3319502,28.3319502 L49.3319502,447.170124 L468.170124,28.3319502 L49.3319502,28.3319502 Z' id={`${id}-path`}></path>

        <linearGradient x1='92.8315925%'
                        y1='7.16840752%'
                        x2='3.4089115%'
                        y2='96.5910885%'
                        id={`${id}-gradient`}>
          <stop stopColor='#71F7D7' offset='0%'></stop>
          <stop stopColor='#77F398' offset='100%'></stop>
        </linearGradient>

        <filter x='-2.9%'
                y='-2.9%'
                width='106.5%'
                height='106.5%'
                filterUnits='objectBoundingBox'
                id={`${id}-filter`}>

          <feOffset dx='2'
                    dy='2' in='SourceAlpha'
                    result={`${id}-filter-feOffset`}>
          </feOffset>

          <feGaussianBlur stdDeviation='5'
                          in={`${id}-filter-feOffset`}
                          result={`${id}-filter-feGaussianBlur`}>
          </feGaussianBlur>

          <feColorMatrix values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.15 0'
                         type='matrix'
                         in={`${id}-filter-feGaussianBlur`}>
          </feColorMatrix>
        </filter>
      </g>
    );
  }
}

Triangle.propTypes = {
  id: PropTypes.string,
  opacity: PropTypes.number
};

export default Triangle;
