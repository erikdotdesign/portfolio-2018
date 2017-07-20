import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import _uniqueId from 'lodash.uniqueid';
import TweenMax from 'gsap';
import Letter from './Letter';
import Circle from './Circle';
import GooFilter from './GooFilter';

class Blob extends React.Component {
  componentWillMount() {
    const id = _uniqueId("blob-");
    const filterId = `${id}-filter`;
    this.setState({id, filterId});
  }
  componentDidMount() {
    const circleLGNode = ReactDOM.findDOMNode(this.circleLG);
    const circleSM1Node = ReactDOM.findDOMNode(this.circleSM1);
    const circleSM2Node = ReactDOM.findDOMNode(this.circleSM2);
    const circleSM3Node = ReactDOM.findDOMNode(this.circleSM3);
    const circleSM4Node = ReactDOM.findDOMNode(this.circleSM4);
    const letterNode = ReactDOM.findDOMNode(this.letter);
    const filterNode = ReactDOM.findDOMNode(this.filter);
    const filterBlurNode = ReactDOM.findDOMNode(this.filter.feGaussianBlur);
    const filterContrastNode = ReactDOM.findDOMNode(this.filter.feColorMatrix);
  }
  render() {
    return (
      <g id={this.state.id}
         filter={`url(#${this.state.filterId})`}
         transform={`translate(${this.props.x}, ${this.props.y})`}>

        {
          this.props.letter
          ?
          <Letter character={this.props.letter.character}
                  fontFamily={this.props.letter.fontFamily}
                  fontSize={this.props.letter.fontSize}
                  fontWeight={this.props.letter.fontWeight}
                  x={this.props.letter.x}
                  y={this.props.letter.y}
                  ref={(Letter) => this.letter = Letter} />
          :
          null
        }

        {this.props.children}

        <Circle cx={this.props.circleLG.cx}
                cy={this.props.circleLG.cy}
                r={this.props.circleLG.r}
                ref={(Circle) => this.circleLG = Circle} />

        <Circle cx={this.props.circleSM1.cx}
                cy={this.props.circleSM1.cy}
                r={this.props.circleSM1.r}
                ref={(Circle) => this.circleSM1 = Circle} />

        <Circle cx={this.props.circleSM2.cx}
                cy={this.props.circleSM2.cy}
                r={this.props.circleSM2.r}
                ref={(Circle) => this.circleSM2 = Circle} />

        <Circle cx={this.props.circleSM3.cx}
                cy={this.props.circleSM3.cy}
                r={this.props.circleSM3.r}
                ref={(Circle) => this.circleSM3 = Circle} />

        <Circle cx={this.props.circleSM4.cx}
                cy={this.props.circleSM4.cy}
                r={this.props.circleSM4.r}
                ref={(Circle) => this.circleSM4 = Circle} />

        <defs>
          <GooFilter id={this.state.filterId}
                     feGaussianBlur={{stdDeviation: this.props.filter.feGaussianBlur, result: `${this.state.filterId}-feGaussianBlur`}}
                     feColorMatrix={{values: this.props.filter.feColorMatrix, result: `${this.state.filterId}-feColorMatrix`}}
                     ref={(Filter) => this.filter = Filter} />
        </defs>
      </g>
    );
  }
}

Blob.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  filter: PropTypes.shape({
    feColorMatrix: PropTypes.string,
    feGaussianBlur: PropTypes.number
  }),
  circleLG: PropTypes.shape({
    cx: PropTypes.number,
    cy: PropTypes.number,
    r: PropTypes.number
  }),
  circleSM1: PropTypes.shape({
    cx: PropTypes.number,
    cy: PropTypes.number,
    r: PropTypes.number
  }),
  circleSM2: PropTypes.shape({
    cx: PropTypes.number,
    cy: PropTypes.number,
    r: PropTypes.number
  }),
  circleSM3: PropTypes.shape({
    cx: PropTypes.number,
    cy: PropTypes.number,
    r: PropTypes.number
  }),
  circleSM4: PropTypes.shape({
    cx: PropTypes.number,
    cy: PropTypes.number,
    r: PropTypes.number
  }),
  letter: PropTypes.shape({
    fontFamily: PropTypes.string,
    fontSize: PropTypes.number,
    fontWeight: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
    character: PropTypes.string
  }),
  children: PropTypes.node
};

export default Blob;
